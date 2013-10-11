
var cliente=0;

self.addEventListener("connect", function (e) {

    var port = e.ports[0];

    cliente++;

    port.addEventListener("message", function (me) {
       port.postMessage("Puerto #" + cliente);
    }, false);

    port.start();

});