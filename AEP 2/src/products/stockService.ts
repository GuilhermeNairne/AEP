import productsSchema from "./productsSchema";
import stockSchema from "./stockSchema";

export class stockService {
    async getStock() {
        let stock = {}
        const products = await productsSchema.find()

        products.map(item => {
            stock = {
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                stock: item.quantity * item.price
            }            
            return stockSchema.create(stock)
        })        
    }

    async totalStock() {
        const products = await stockSchema.find()

        const stockTotal = products.reduce((accumulador, currentValue) => accumulador + currentValue.stock, 0)
        
        return stockTotal
    }
}