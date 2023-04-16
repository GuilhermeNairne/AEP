import { Request, Response } from "express";
import { ProductService } from "./productsService";
import { stockService } from "./stockService";
import productService from "src/service/productService";

export class productController {
    async create(req: Request, res: Response) {
        try {
            const productCreated = await new ProductService().create(req.body)

            return res.status(200).json(productCreated)
        } catch (error) {
            throw new error
        }        
    }

    async list(req: Request, res: Response) {
        try {
            const listedProducts = await new ProductService().list()                    

            return res.status(200).json(listedProducts)
        } catch (error) {
            throw new error
        }       
    }

    async listById(req: Request, res: Response) {
        try {
            const listedProduct = await new ProductService().listById(req.params.id)

            return res.status(200).json(listedProduct)
        } catch (error) {
            throw new error
        }
    }

    async delete(req: Request, res: Response) {
        try {
            console.log('entrei aqui')
            const deletedProduct = await new ProductService().delete(req.params.id)

            return res.status(200).json('Produto deletado com sucesso')
        } catch (error) {
            throw new error
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updade = await new ProductService().patch(req.params.id, req.body)

            return res.status(200).json(updade)
        } catch (error) {
            throw new error
        }
    }

    async getStock(req: Request, res: Response) {
        try {
            const stock = await new stockService().getStock()

            return res.status(200).json('Stock criado com sucesso')
        } catch (error) {
            throw new error
        }
    }

    async getProductsRandom(req: Request, res: Response) {
        const products = await new ProductService().getRandom()

        return res.status(200).json(products)
    }    

    async stockTotal(req: Request, res: Response) {
        const totalStock = await new stockService().totalStock()

        return res.status(200).json(totalStock)
    }

    async readFile(req: Request, res: Response) {
        const readFile = await new ProductService().readFile()

        return res.status(200).json(readFile)
    }
}