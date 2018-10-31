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
/*Fin de la funcion que controla el audio del video*/

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".black").css("background" , "blue");
        }
  
        else{
            $(".black").css("background" , "#333");  	
        }
    })
  })

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: -33, lng: 151},
      mapTypeControl: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        mapTypeIds: ['roadmap', 'terrain']
      }
    });
  }