Tone = require('Tone')
var synth = new Tone.Synth().toMaster();
$(document).ready(function() {
	down = {}
  $('body').on( "keydown", function(e) {
	if (down['e.which'] == null)
	console.log(e.which)
	down['e.which'] = true
  })

  $('body').on( "keyup", function(e) {
  	down['e.which'] = null
  })	
}) 