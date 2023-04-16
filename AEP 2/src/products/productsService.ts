import productsSchema from "./productsSchema";
import { writeFile, readFile } from "fs/promises"

interface productTypes {
    name: String,
    quantity: Number,
    price: Number
}

export class ProductService {
    async create(user: productTypes) {
        const users = await productsSchema.create(user)

        return users;
    }

    async list() {
        const products = await productsSchema.find();
        const jsonProducts = JSON.stringify(products, null, 2);
        await writeFile('productsList.json', jsonProducts);
        return products;
    }

    async listById(id) {
        const products = await productsSchema.findById(id)

        return products
    }

    async delete(id) {
        const product = await productsSchema.findOneAndDelete(id)

        return product
    }

    async patch(id, product: productTypes) {
        const findProduct = await productsSchema.findById(id)

        const updateProduct = await productsSchema.findByIdAndUpdate(id, {
            $set: {
                name: product.name,
                price: product.price,
                quantity: product.quantity
            }
        })

        return "Atualizado com sucesso"
    }

    async getRandom() {
        const products = await productsSchema.find()
        let randomProducts: any = []

        while (randomProducts.length < 10) {
            let randomNumber: any = Math.floor(Math.random() * products.length)
            if (!randomProducts.includes(products[randomNumber])) {
                randomProducts.push(products[randomNumber])
            }
        }
        let newProducts: any = []

        for (let i = 0; i < 4; i++) {
            newProducts.push(randomProducts[i])
        }
        return newProducts
    }    

    async readFile() {
        const file = './productsList.json'

        const readed = await readFile(file,'utf-8')
        return await JSON.parse(readed)        
    }
}