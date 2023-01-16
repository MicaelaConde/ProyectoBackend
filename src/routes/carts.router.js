const {Router} = require ("express");
const cartManager = require("../utils/cartsManager");

const router = Router();

router.post('/', async(req, res) =>{
   const resp= await cartManager.addCart()
    res.json({msg : "Carrito creado", id:resp})
} )

router.get('/:id', async (req,res) =>{
    try {
        const cart = await cartManager.getCart(req.params.id);
        res.json({
            msg:"ok",
            cart
        })
        } catch(error){
            res.status(404).json({
                msg:"Carrito no encontraso"
            })
    }
})

module.exports = router;