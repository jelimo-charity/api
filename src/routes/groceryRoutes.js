import { createGroceries, deleteGroceries, getGroceries, updateGroceries } from "../controllers/groceryControllers.js"


export const groceryRoutes = (app)=>{
    app.route('/groceries')
    .get(getGroceries)
    .post(createGroceries)

    app.route('/groceries/:groceryID')
    .delete(deleteGroceries)
    .put(updateGroceries)
    
}