self.postMessage("Hola, soy un worker");

self.onmessage= function(me) {
	self.postMessage("Mensaje recibido del hilo principal y reenviado: "+me.data);
};
