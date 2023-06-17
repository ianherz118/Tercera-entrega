export default ProductManager;

const fs= require ("fs");

class ProductManager{
    #path="./Usuarios.json"
    #accumulator=0;
    #products=[];

    async addProduct (title, description, code, price, thumbnail, stock){
        const productWithSameCodeExists = this.#products.some(
            (p) => p.code == code
           );
          
           if (productWithSameCodeExists){
               throw new Error ("Producto ya existe")
           }
          
           if (!title || !description){
               throw new Error("Error")
           }
          
           const newProduct ={
               id: this.#accumulator,
               title,
               description,
               code,
               price,
               thumbnail,
               stock
           };
          
           this.#accumulator++;
    
        const users = await this.consultarUsuarios();
        const updatedUsers = [...this.#products, newProduct];
        await fs.promises.writeFile(this.#path, JSON.stringify(updatedUsers));
    }
    
    async consultarUsuarios(){
        try{
        const users = await fs.promises.readFile(this.#path,"utf-8");
        return JSON.parse(users);
    } catch (e){
        return[];
    }
    }
    getEraseById(indexOF){
        return(delete this.#products[indexOF-1])
        }
    async getUpdateById(indexOF,title, description, code, price, thumbnail, stock){
        const UpdateProduct ={
            id: indexOF-1,
            title,
            description,
            code,
            price,
            thumbnail,
            stock
        };
        const users = await this.consultarUsuarios();
        const  updatedUsers= {...this.#products[indexOF-1], UpdateProduct}
        await fs.promises.writeFile(this.#path, JSON.stringify(updatedUsers));
        }    

}