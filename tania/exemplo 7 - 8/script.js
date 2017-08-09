console.log("Hello World");

//objectivo é criar funçao pilha, funcao stack, criando primeiro um atributo array,var data, e por isso tem o this.data.

function Stack(){

    this.data = [];
    //preciso de duas funcoes,uma que ponha e oura que tire. crio um método:
    this.push = function(element){ // o porco está dentro dos parenteses. adicionar um element para dentro da nossa pilha, nossa data.
    this.data.push(element); // como adicionar elementos á nossa array
    }
    this.pop = function(){
        var result = this.data[this.data.length-1];
        //this.data.splice(this.data.length-1); o splice remove um pedaço de array dentro da array
        this.data.pop(); 
        return result;
    }
};


//chamar o objecto:
var stack1 = new Stack();//é um construtor vazio, daí ter parenteses vazios

//so posso instanciar um método da  instancia da classe (isto nao é correct: Stack.push()).A forma crrecta é:
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);
stack1.push(6);

// chamar o ultimo elemento da minha lista atraves da var b, para guardar o valor localmente:
// var b = data[data.length-1];

// sem utilizar a funcao pop():
// como é um atributo:  this.data.remove(data.length-1);
 // return b;

 // stack1.data : da me os valores da lista. experimentar na consola:
stack1.data
stack1.pop();
stack1.data
stack1.pop();


// classe car
function Car(brand,model){
    this.brand = brand; // estou a estanciar um elemento do construtor
     this.model = model;
}

//criar um novo carro:
var hondaCivic = new Car("Honda","Civic");
var citroenC4 = new Car("Citroen","C4");


//agora queremos fazer uma pilha de carros:

var ferroVeho = new Stack();
   // ferroVelho.push(citroenC4);
    //na consolapor ferroVelho.data, vejo que ha um carro.
    // na consola por: ferroVelho.push(hondaCivic);
    // agora se fizer ferroVelho.pop(),retira-me o ultimo carrp que pus.

//-----------------------------------------------------------------------

//agora passando para queue:

   //http://www.javascripttutorial.net/javascript-queue/
   //http://www.stephanimoroni.com/creating-a-queue-in-javascript/

function Queue(){ 
    this.data = [];

    this.enqueue = function(element){ 
        this.data.push(element);
    }
    this.dequeue = function(){ 
       this.data.shift();
    }
};

var queue1 = new Queue();

queue1.enqueue(9);
queue1.dequeue();
