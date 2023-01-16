const express= require("express")
const cartsRouter = require("./routes/carts.router.js")
const productRouter = require("./routes/products.router.js")
const app= express()
app.use(express.json())

app.use('/api/products', productRouter)
app.use('/api/carts', cartsRouter) 

app.listen(8080, ()=>
console.log("servidor escuchando")
)