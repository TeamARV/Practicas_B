//console.log("hola mundo")
//let variable="test"
//console.log(variable)

//let algo = prompt("ingrese numero","")
//let algo2 = prompt("ingrese numero2","")

//document.write("salida de una variable ")
//let algo3= algo*algo2
//document.write(algo3)

//--------------------------------

class Producto {
    constructor(a,b) {
      let Id = a;
      let Precio = b;
      this.Array =[];
    }
  
    getId() {return this.Id;}
    setId(value) {this.Id = value;}
  
    getPrecio() {return this.Precio;}
    setPrecio(value) {this.Precio = value;}
  
    getArray() {return this.Array;}
    setArray(value) {this.Array.push(value);}

    toString(){
        let retorno = "El ID es --> " + this.getId() + " El Precio es " + this.getPrecio() + "<br/>"
        return retorno
    }
  
  };
  

  
  class Carrito {
    constructor() {
      this.Array =[];  // va contener todos los objetos productos
      this.Sale_Description ="nada aún"
      this.Generation_Date = Date()
      this.Payment_Date = Date()
      this.Vendedor = "ninguno"
      this.Total =0;
    }
  
    getArray() {return this.Array;}
    setArray(value) {this.Array.push(value);}
  
    getTotal() {
      this.Total=this.Array.reduce((x,y) => x + y.Precio,0.0) //voy aquí 
      return this.Total;}

      toString(){
          let retorno = "el contenido del carrito es " + "<br/>"
          + this.getArray() + "<br/>" + 
          " el total es " + this.getTotal() + "<br/>"
          return retorno
      }



  };

  

  //-----------------------
  let Mi_Producto1= new Producto();
  let Mi_Producto2= new Producto();
  
  Mi_Producto1.setPrecio(5000)
  Mi_Producto1.setId(1)
  console.log(Mi_Producto1.getPrecio())
  
  Mi_Producto2.setPrecio(25000)
  Mi_Producto2.setId(2)
  console.log(Mi_Producto2.getPrecio())


  
  
  let My_Carrito= new Carrito();
  
  My_Carrito.setArray(Mi_Producto1)
  My_Carrito.setArray(Mi_Producto2)
  
  console.log(My_Carrito.getArray())
  console.log(My_Carrito.getTotal())

  document.write(My_Carrito)

  console.log(My_Carrito.Sale_Description)
  console.log(My_Carrito.Generation_Date)
  console.log(My_Carrito.Payment_Date)
  console.log(My_Carrito.Vendedor)
  
  
