import config from "../db/config.js";
import sql from 'mssql'
 

export const getGroceries = async(req, res)=>{
    try {
        let pool = await sql.connect(config.sql);
        const request = await pool.request();
        const result= await request.query(`select * from Groceries`);
        console.log(result);
        !result.recordset[0] ? res.status(404).json({message: 'groceries not found'}) :
        res.status(200).json(result.recordset);
    } catch (error) {
        console.log('error fetching groceries', error);
        res.status(201).json({ message: 'error getting groceries'})
    } finally{
        sql.close();
    }
};
// Create a new grocery
export const createGroceries = async (req, res) => {
    try {
        const {  groceryName, Quantity} = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("groceryName", sql.VarChar, groceryName)
            .input("Quantity", sql.VarChar,Quantity)
            .query("INSERT INTO Groceries( groceryName, Quantity) VALUES ( @groceryName, @Quantity)");
        res.status(201).json({ message: 'Grocery created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while creating the grocery' });
    }
     finally {
        sql.close();
    }
};

// Delete grocery
export const deleteGroceries = async(req, res) => {
    try {
        const { groceryID } = req.params;
        await sql.connect(config.sql);
        await sql.query`DELETE FROM Groceries WHERE groceryID = ${groceryID}`;
        res.status(200).json({ message: 'grocery deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while deleting the grocery' });
    } finally {
        sql.close();
    }
};

// Update grocery
export const updateGroceries = async (req, res) => {
    try {
      const { groceryID } = req.params;
      const { groceryName, Quantity } = req.body;
  
      let pool = await sql.connect(config.sql);
      const result = await pool
        .request()
        .input("groceryID", sql.Int, groceryID)
        .input("groceryName", sql.VarChar, groceryName)
        .input("Quantity", sql.Text, Quantity)
        .query(
          "UPDATE Groceries SET groceryName = @groceryName, Quantity = @Quantity WHERE groceryID = @groceryID"
        );
  
      if (result.rowsAffected[0] === 0) {
        res.status(404).json({ message: 'grocery not found' });
      } else {
        res.status(200).json({ message: 'grocery updated successfully' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred while updating the grocery' });
    } finally {
      sql.close();
    }
  };
  