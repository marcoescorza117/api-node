import { getConnection, sql } from '../database/connection'


//get
export const getProducts = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM Products');
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
            .query('INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)')
            //console.log(result)

            //console.log(name, description, quantity)
            / res.json("New Product added successfully!")
    } catch (error) {

        res.status(500)
        res.send(error.message)

    }

}