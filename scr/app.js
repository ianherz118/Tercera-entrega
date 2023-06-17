import express from "express";
import ProductManager from "./Productmanager.js";

const manager = new ProductManager();

const app = express();

/** 
const users = [
  { id: "1", name: "Franco",city: "Londres"},
  { id: "2", name: "Francisco",city: "Londres"},
  { id: "3", name: "Marla",city: "Buenos Aires"},
];*/

app.get("/users" , (req, res)=> {
   const products = manager.consultarUsuarios();
   const { limits } =req.query;
   objresult=[];
   for (var i = 0; i < limits; i++) {
        if(n){
          results=products.filter((u) => u.id == id);
          objresult.push(results)
       }
   } 
   res.send(results)
});

app.get("/users/:id",(req,res) =>{
  // Endpoint combinaciones entre rutas y metodos y servidor tendra una respuesta
  const {id} = req.params;
  const products = manager.consultarUsuarios();
  res.send("Cliente pidio id = ${id}");
  if(id){
    res.send(products.filter((u) => u.id == id));

 }else{
 res.send(products);
 } 
});

app.get("/usuario/ejemplo",(req,res) =>{
    // Endpoint combinaciones entre rutas y metodos y servidor tendra una respuesta
    res.json({
        fistName:"Ale",
        lastName:"Suarez",
        age:29,
        email:"ale@gmail.com"
    });
  });

app.listen(8080, () => {
   console.log("Server listening on port 8080")
});

