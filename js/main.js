/// CAMBIAR IMAGEN REGULABLE
function cambiarImagenRegulable (){
 let imagenRegulable = document.getElementById ("imagenRegulable");
 imagenRegulable.addEventListener("mouseover", (event) =>{
    event = document.getElementById("imagenRegulable").src='../images/imagen5.jpg'
 })
}


function cambiarImagenRegulableOut(){
    let imagenRegulable = document.getElementById ("imagenRegulable");
    imagenRegulable.addEventListener("mouseout", (event) =>{
       event = document.getElementById("imagenRegulable").src='../images/regulables.jpg'
    })
   }
cambiarImagenRegulable();
cambiarImagenRegulableOut();

///CAMBIAR IMAGEN RESORTES
function cambiarImagenResortes (){
    let imagenRegulable = document.getElementById ("imagenResortes");
    imagenRegulable.addEventListener("mouseover", (event) =>{
       event = document.getElementById("imagenResortes").src='../images/imagen42.jpeg'
    })
   }
   
   
function cambiarImagenResortesOut(){
       let imagenRegulable = document.getElementById ("imagenResortes");
       imagenRegulable.addEventListener("mouseout", (event) =>{
          event = document.getElementById("imagenResortes").src='../images/fija.jpg'
       })
      }
cambiarImagenResortes();
cambiarImagenResortesOut();

///CAMBIAR IMAGEN MECANICA
function cambiarImagenMecanica (){
    let imagenRegulable = document.getElementById ("imagenMecanica");
    imagenRegulable.addEventListener("mouseover", (event) =>{
       event = document.getElementById("imagenMecanica").src='../images/imagen20.jpeg'
    })
   }
   
   
function cambiarImagenMecanicaOut(){
       let imagenRegulable = document.getElementById ("imagenMecanica");
       imagenRegulable.addEventListener("mouseout", (event) =>{
          event = document.getElementById("imagenMecanica").src='../images/mecanica.jpg'
       })
      }
cambiarImagenMecanica();
cambiarImagenMecanicaOut();