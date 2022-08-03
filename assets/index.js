 //1. traigo el video y button del html
 const video = document.querySelector("video");
 const button = document.querySelector("button");



 
 // 3. creo una funcion media player
 // 4. le agregamos un parametro (config) que va a tener el elemento video original. this.media se le asigna el parámetro. (mediaPlayer(el.video))
 // this.mediaa == a decir MediaPlayer.mediaa
 function MediaPlayer(config){
     this.mediaa = config.el;
 }
 
 // 3. a mediaPlayer le asigno una funcion llamada "playMethod" usando el prototype (la convertimos en una funcion extendida)
 // 4. a this.media le asignamos play (elemento de los mediaElements) para que se ejecute cuando presionamos el boton    
 MediaPlayer.prototype.playMethod = function(){
     this.mediaa.play();
 }

 MediaPlayer.prototype.pause = function(){
  this.mediaa.pause()
 }

 // 3. creo una instancia del prototipo mediaPlayer mediante el "new" en la funcion que llamaremos "player" 
 // 4. le asignamos el valor de video mediante la destructuración de objetos donde al elemento "el" le asigno el "video"
 const player = new MediaPlayer({ el:video})
 
 // 2. el damos la el onclick para hacer funcionar el boton para reproducir el video (video.play())
 button.onclick = () =>{
     // 5. player se encuentra en pausa?
 player.mediaa.paused ? 
 //si es SI ejecuta playMthod, si es NO (reproduciendo) ejecuto el metodo player.pause
 player.playMethod() : player.pause()

 }