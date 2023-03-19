import {Request, Response} from 'express'
import {writeFile, readFile} from 'fs/promises'

class ProductController {
    public async writeProductsFile(req: Request, res: Response) {
        const products = req.body

        try {
            writeFile('products.json', JSON.stringify(products, null, 2))
            res.status(200).send()
        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    }

    public async readProductsFile(req: Request, res: Response) {
        try {
            const json = await readFile('products.json')
            res.status(200).send(json)
        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    }

    public async calculateStock(req: Request, res: Response) {
        try {
            const json = await readFile('products.json')
            const products = JSON.parse(json.toString())
            const stock = products.map(item => {
                return {
                    nome: item.nome,
                    qtde: item.qtde,
                    preco: item.preco,
                    valor_estoque: item.qtde * item.preco
                }
            })

            res.status(200).send(stock)
        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    }
}

export default new ProductController()