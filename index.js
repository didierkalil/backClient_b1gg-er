
const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
console.log('server on port', app.get('port'));
});

const SocketIO = require('socket.io');
const io = SocketIO(server);

  const {Board, Led} = require("johnny-five"); 
  var MyBoard, MyLed, MyLed2;  

  myBoard = new Board({ port: "COM5" });  


    myBoard.on('ready', function (){ 

io.on('connection', (socket)=> {
     console.log("nueva conexion");
           


     class interruptor {
      constructor(evento, pin, condicional1, condicional2){
        this.evento = evento;
        this.pin = pin;
        this.condicional1 = condicional1;
        this.condicional2 = condicional2;
        
        }

      datosANDstatus() {
             var MyLed = new Led(this.pin); 
             socket.on(this.evento, (data)=>{

           
            if(data.mensage == this.condicional1) {
             MyLed.on(); 
             console.log("prendido");
                                
            } 
            else if (data.mensage == this.condicional2) {
             MyLed.off();  
               console.log("apagado");
          
                                     
            }

      
      
    })
    
      }

    }
     

// nombre: nombre, pin: pin que se controlará, condicional1: valor de prendido, condicional2: valor de apagado
function crear (pin, condicional1, condicional2) {
  var nombre = new interruptor('datos', pin, condicional1,condicional2);
  nombre.datosANDstatus();
  return nombre;

}

const primero = crear( 13, '1', '0');
const segundo = crear( 11, '3', '4');
const tercero = crear( 10, '5', '6');

                       


  })


})

  




 

 
       
 

