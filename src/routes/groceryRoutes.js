import { getGroceries } from "../controllers/groceryControllers.js"


export const groceryRoutes = (app)=>{
    app.route('/groceries')
    .get(getGroceries)
}