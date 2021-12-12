import { restart } from 'nodemon';
import { getConnection, sql, querys} from '../database'


//get
export const getProducts = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getAllProducts);
        //console.log(result.recordset)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

//post
export const createNewProduct = async (req, res) => {

    const { name, description } = req.body

    let { quantity } = req.body

    if (name == null || description == null) {
        return res.status(400).json({
            msg: "Bad request, please fill the fields"
        })
    }

    if (quantity == null) {
        quantity = 0
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("name", sql.VarChar, name)
            .input("description", sql.Text, description)
            .input("quantity", sql.Int, quantity)
            .query(querys.addNewProduct)
            //console.log(result)

            //console.log(name, description, quantity)
            res.json("New Product added successfully!")
    } catch (error) {

        res.status(500)
        res.send(error.message)

    }

}


export const getTotalProducts = async (req, res) =>{

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(querys.getTotalProducts)
            //console.log(result);
            //res.send(result.recordset[0])
            res.json(result.recordset[0][''])

       
    } catch (error) {
        res.status(500)
        res.send(error.message)
        
    }

}


//GET/id?
export const getProductByID = async (req, res) => {

    const {id} = req.params

    console.log(id);

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("id", sql.Int, id)
            .query(querys.getProductByID)
            //console.log(result)
            console.log(result);
            res.send(result.recordset[0])

       
    } catch (error) {
        res.status(500)
        res.send(error.message)
        
    }


    //res.send(id)


}

//Delete
export const deleteProduct = async (req, res)=>{
    const {id} = req.params


    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("id", id)
            .query(querys.deleteProduct)
            //res.json("Product deleted successfully!")

            res.sendStatus(204)
       
    } catch (error) {
        res.status(500)
        res.send(error.message)
        
    }
}


export const updateProduct = async (req, res) =>{

    const { name, description, quantity} = req.body

    const {id} = req.params


    if (name == null || description == null || quantity== null) {
        return res.status(400).json({
            msg: "Bad request, please fill the fields"
        })
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("name", sql.VarChar, name)
            .input("description", sql.Text, description)
            .input("quantity", sql.Int, quantity)
            .input("id", sql.Int, id)
            
            .query(querys.updateProductByID)
            //console.log(result)

            //console.log(name, description, quantity)
            res.json({
                name, description, quantity
            });
            
    } catch (error) {
        
    }

}

