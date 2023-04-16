import { Router } from 'express'
import { productController } from './products/productsController'
import userController from './users/user.controller'

const routes = Router()

routes.post('/users', userController.create)
routes.post('/createProduct', new productController().create)
routes.get('/listProducts', new productController().list)
routes.get('/listProductById/:id', new productController().listById)
routes.delete('/deleteProduct/:id', new productController().delete)
routes.put('/updateProduct/:id', new productController().update)
routes.get('/getStock', new productController().getStock)
routes.get('/getProductsRandom', new productController().getProductsRandom)
routes.get('/stockTotal', new productController().stockTotal)
routes.get('/readFile', new productController().readFile)

// 17 - Estamos exportando a constante routes
export default routes