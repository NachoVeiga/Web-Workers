var i=0;

function cronometro()
{
self.postMessage(i);
i++;
setTimeout("cronometro()",1000);

// Deteniendo el worker
// if (i>6){self.close();}
}

cronometro();