self.onmessage= function(me) {
	me.data[0].Tel    = false;
	me.data[2].Nombre = "Heisenberg";
	me.data[2].Hijo   = "Baby Blue";
	self.postMessage(me.data);
};