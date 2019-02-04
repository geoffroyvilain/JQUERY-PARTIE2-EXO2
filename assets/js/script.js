$(function(){
  //fonctionne au doubleclick pour donner une taille de 500 px de largeur à l'image
  $('#image').dblclick(function(){
    $(this).width(500);
//#image ou mieux (this)     // ou .css('width','500px'); à la place de width
  });
});
