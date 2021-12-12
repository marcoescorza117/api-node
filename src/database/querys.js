export const querys = {
    getAllProducts: 'SELECT * FROM Products',
    addNewProduct : 'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
    getProductByID : 'SELECT * FROM Products where id = @id',
    deleteProduct:'DELETE FROM Products where id = @id',
    getTotalProducts : 'SELECT COUNT(*) FROM Products',
    updateProductByID: 'UPDATE Products SET name = @name, description = @description, quantity=@quantity WHERE id=@id'

}

