/*variable global volumen para llevar un control del estado del volumen del video inicial */
var volumen = 1;
/* Al momento de hacer click en el boton con ID mute se hace un trigger de la siguiente función, 
la finalidad es subir y bajar el volumen del video*/
document.getElementById("mute").onclick = function(){
    if(volumen == 1){
        document.getElementsByTagName("video")[0].volume = 0;
        volumen = 0;

    }else if(volumen == 0){
        document.getElementsByTagName("video")[0].volume = 1.0;
        volumen = 1;
        
    }
}
/*

Fin de la funcion que controla el audio del video*/
/* Se ubica un metodo en el espacio del navegador para escuchar los eventos y al presentarse el scroll, basandose en el
 id nav y comparando para dos tipos de navegadores y asi agregar y remover las clases pertinentes*/
window.addEventListener('scroll', function (e) {
    var nav = document.getElementById('nav');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('nav-colored');
            nav.classList.remove('nav-transparent');
        } else {
            nav.classList.add('nav-transparent');
            nav.classList.remove('nav-colored');
        }
});

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: {lat: 4.620824, lng: -74.063659},
      disableDefaultUI: true
    });
  }
  initMap();