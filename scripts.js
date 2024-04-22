function cambiarColorImagen(){
    let imagen = document.getElementById("imagen").src; 
  
    if(imagen=="http://127.0.0.1:5500/perro.jpg"){
        document.getElementById("imagen").src= "zorro.jpg";
        document.getElementById("tabla").style.backgroundColor='green';
    }else{
        document.getElementById("imagen").src="perro.jpg";
        document.getElementById("tabla").style.backgroundColor='gold';
    }
}