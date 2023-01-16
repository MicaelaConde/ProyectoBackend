const fs = require ("fs");
const { parse } = require("path");
       
const writeFile =(path, products) => fs.promises.writeFile(path,JSON.stringify({products}))
const readFile = async(path) => {
    const asyncGetProducts = await fs.promises.readFile(path);
    const parseResult = JSON.parse(asyncGetProducts);
    return parseResult;
}


 class ProductManager{
    constructor(){
        this.products= []
        this.path='./archivoProductos.json'
        
    }

   async createFile(){
        const existFile = fs.existsSync(this.path)
        if(existFile){
            console.log("El archivo ya existe")
            const {products}= await readFile(this.path)
            this.products=products
        }else{
            await writeFile(this.path, this.products)
            console.log("el archivo se creo")
        }
    }

   
    async addProduct(id,title,description,price,thumbnail,code,stock){
        if (id && title && description && price && thumbnail && code && stock){
        const existCode = this.products.map(p => p.code).includes(code);
        if (existCode){
            console.log("Ya existe el codigo del producto")
        }else{
        this.products.push({id:this.products.length,title,description,price,thumbnail,code,stock})
        await writeFile(this.path, this.products)

console.log("producto creado")

        }
    
    }
    else{
        console.log("Fantan ingresar datos")
    }
 
}

getProductById(productId){

    const product = this.products.find(elem => elem.id === productId);
    if(product){
        console.log(product)
    }else{
        console.log("El producto con el id " +productId+" no existe")
    }
 
    return this.product
}
getProducts(){
        console.log(this.products)
        return this.products
       
        }

      async  updateProduct(productId, newProductId){
        const  indexFind = this.products.findIndex((product) => product.id ==productId)

        if (indexFind == -1){
            console.log("No existe el producto")
        }else{
            const id= this.products[indexFind].id
            this.products[indexFind]={
                id,...newProductId
            }
            await writeFile(this.path, this.products)
        }
        }

     async deleteProduct(id){
        const indexProduct = this.products.findIndex((product)=> product.id == id)
        if (indexProduct === -1){
            console.log("Producto no encontrado")
        }else{
            const newProduct = this.products.filter(product => product.id != id )
            await writeFile(this.path, newProduct)
            console.log("Se elimino el producto")
        }
        }

 }


async function main(){
//     const productManager = new ProductManager()
//     await productManager.createFile();
//     productManager.addProduct(" ","Tablet","Sistema operativo Android,procesador Qcta-Core de 2GHz",356,546,5,12)
//  productManager.addProduct(" ","Notebook","Sistema Operativo Windows, 16Gb RAM,256GB SSD",800,4544,6,52)
//  productManager.getProductById(1)
//  await productManager.updateProduct(1,"dssfd","prueba",356,546,5,12)
}

main();


const Product = new ProductManager("../archivoProductos.json")
module.exports= Product;
module.exports=ProductManager