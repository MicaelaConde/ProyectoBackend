const fs = require('fs')
const writeFile =(path, data) => fs.promises.writeFile(path,JSON.stringify(data))
const readFile = async(path) => {
    const read = await fs.promises.readFile(path,{encoding:'utf-8'});
    const aux = read ? read : []
    const parseResult = JSON.parse(aux);
    return parseResult;
}

const CreateFile = async ()=>{
    if (!fs.existsSync(this.path)){
        writeFile(this.path, this.carts)
    }
}

class CartManager{
    constructor(path){
        this.path=path;
        this.carts=[];
        // this.CreateFile();
    }

    addCart = async ()=>{
     const carts= await readFile(this.path);
        // const carts= JSON.parse(data ? data : "[]");
        const id = carts.length
        carts.push({
            id,
            products:[]
        })
        await writeFile(this.path,carts)
        return id;
    }


    getCart = async (id) =>{
        const data = readFile(this.path);
        const carts = JSON.parse(data)
        return carts[id] ? carts[id] : new Error ("Carrito no encontrado");
    }

    addProductToCart=async (cid,pid)=>{
        const carts = await readFile(this.path);
        if (carts[cid]){
            const productsIndex= carts[cid].products.findIndex((p) => p.id == pid);
            if(productsIndex !== -1){
                carts[cid].products[productsIndex].quantity++;
            }else {
                carts[cid].products.push({id:pid, quantity:1});
            }
        }
        throw new Error("Carrito no encontrado")
    }
}



const cartManager =new CartManager('./carts.json')
module.exports= cartManager