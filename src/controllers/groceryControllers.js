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