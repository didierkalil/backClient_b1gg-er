const socket_externo = io('https://servidor-externo.herokuapp.com/')
const socket_arduino = io(); 





class interruptores {

  constructor(palabraencendido, palabraapagado, dato_prender, dato_apagar) {
    this.palabraencendido = palabraencendido;
    this.palabraapagado = palabraapagado;
    this.dato_prender = dato_prender;
    this.dato_apagar = dato_apagar;
  }

    recibir_enviar() {
      socket_externo.on('datos', (datas) => {

          
       if (datas.mensage == this.palabraencendido) {
        console.log("uno");
        socket_arduino.emit('datos', {mensage: this.dato_prender}); 
       }

       if (datas.mensage == this.palabraapagado) {
        console.log("cero");
        socket_arduino.emit('datos', {mensage: this.dato_apagar}); 
       }

      });
    }

}


function crear (palabraencendido, palabraapagado, valor_encendido, valor_apagado) {
  var nombre_instancia = new interruptores(palabraencendido, palabraapagado, valor_encendido, valor_apagado);
  nombre_instancia.recibir_enviar();
  return nombre_instancia;

 }

 
const primero = crear('uno','cero','1', '0');
const segundo = crear('tres','cuatro','3', '4');
const tercero = crear('cinco','seis','5', '6');









      // Escucho el servidor y respondo a arduino por cada dato recibido del servidor
      // socket_externo.on('datos', (datas) => {
   

      //  if (datas.mensage == 'uno') {
      //      console.log("uno");
      //      socket_arduino.emit('datos', {mensage: '1'}); 
      //  }
   
      //  if (datas.mensage == 'cero') {
      //      console.log("cero");
      //      socket_arduino.emit('datos', {mensage: '0'}); 
      //  }
  

      //  if (datas.mensage == 'tres') {
      //      console.log("tres");
      //      socket_arduino.emit('datos', {mensage: '3'}); 
      //  }


      //  if (datas.mensage == 'cuatro') {
      //      console.log("cuatro");
      //      socket_arduino.emit('datos', {mensage: '4'}); 
      //  }
       
      // });
   
     



