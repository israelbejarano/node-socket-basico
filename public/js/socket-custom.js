var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('perdida la conexion con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'Israel',
    mensaje: 'Hola mundo soy un socket'
}, function(resp) {
    console.log('se disparó el callback: ', resp)
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});