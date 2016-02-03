$(document).ready(function() {

var key_dict = {65:'a',83:'s',68:'d',70:'f',74:'j',75:'k',76:'l',186:'semi'}
var note_dict = {65:'c2',83:'d',68:'e',70:'f',74:'g',75:'a',76:'b',186:'c3'}

var keypress_module = {
  pressed: function(key){
    if(key.which in key_dict){
      var audioElement = document.createElement('audio');
      var key_val = key.keyCode;
      var src = "media/" + note_dict[key_val] + ".mp3"
      audioElement.setAttribute('src', src);
      audioElement.setAttribute('autoplay', 'autoplay');
      $('#' + key_dict[key_val]).css('background-color','rgb(75, 219, 193)');
      $('body').css('background-color','rgb(145, 242, 225)');
      audioElement.duration > 0 ? audioElement.stop() : audioElement.play();
    }
  },

  release: function(key){
    if(key.which in key_dict){
      var key_val = key.keyCode;
      $('#' + key_dict[key_val]).css('background-color','rgb(246, 108, 108)');
      $('body').css('background-color','rgb(249, 237, 81)');
    }
  }
}

$(document).keydown(function(e){
  keypress_module.pressed(e)
});

$(document).keyup(function(e){
  keypress_module.release(e);
});

});
