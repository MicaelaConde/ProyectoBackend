const {Router} = require("express");
const Product = require('../../archivoProductos.json')
const ProductManager = require("../ProductManager")
const router = Router();


router.get('/', async (req,res)=>{
    const limite= req.query.limit
    if(limite<Product.length){
        Product=Product.slice(0,limite)
    }
    res.send(Product)
})

router.get('/:pid', async (req,res)=>{
    const ProductM= new ProductManager
    const pid = req.params.pid
    const producto = await ProductM.getProductById(pid);
    res.send({producto})
})




module.exports = router;