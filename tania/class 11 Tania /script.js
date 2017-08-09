console.log("Hello World");
  
var shape = {
    height: 10, 
    width:10,

    area: function(){
        return this.height * this.width;
    }
}


shape.height= shape.height/2;
shape.width=shape.width/2;
console.log(shape.area());


function Shape(){              
    this.height=10;             
    this.width=10;
    
//agora definimos o nosso metodo:

    this.area= function(){
        return this.height*this.width;     
    };

    this.perimetro= function(){
        return this.height+this.width;     
    };
};


var shape2 = new Shape();           
console.log(shape2.area());


var shape3= new Shape();

    shape3.height= shape3.height/2;
    shape3.width=shape3.width/2;
    console.log(shape2.area());
    console.log(shape3.perimetro()); 