Tone = require('tone')
var synth = new Tone.Synth().toMaster();
$(document).ready(function() {
	down = {}
  $('body').on( "keydown", function(e) {
	// if (down['e.which'] == null)
	// console.log(e.which)
	// down['e.which'] = true
 	if (e.which == 65){
 	  synth.triggerAttackRelease('A3', '1n')
 	}
 	else if (e.which == 83) {
 	  synth.triggerAttackRelease('B3', '1n')
 	}
 	else if (e.which == 68) {
 	  synth.triggerAttackRelease('C3', '1n')
 	}
 	else if (e.which == 70) {
 	  synth.triggerAttackRelease('D3', '1n')
 	}
 	else if (e.which == 71) {
 	  synth.triggerAttackRelease('E3', '1n')
 	}
  else if (e.which == 72) {
    synth.triggerAttackRelease('F3', '1n')
  }
  else if (e.which == 74) {
    synth.triggerAttackRelease('G3', '1n')
  }
  else if (e.which == 75) {
    synth.triggerAttackRelease('A4', '1n')
  }
  else if (e.which == 76) {
    synth.triggerAttackRelease('B4', '1n')
  }
  else if (e.which == 186) {
    synth.triggerAttackRelease('C4', '1n')
  }
  else if (e.which == 222) {
    synth.triggerAttackRelease('D4', '1n')
  }
  })
  	

  $('body').on( "keyup", function(e) {
  	//down['e.which'] = null
  	if (e.which == 65){
  	  synth.triggerRelease()
  	}
  	else if (e.which == 83) {
  	 synth.triggerRelease()
  	}
  	else if (e.which == 68) {
  	  synth.triggerRelease()
  	}
  	else if (e.which == 70) {
  	  synth.triggerRelease()
  	}
  	else if (e.which == 71) {
  	  synth.triggerRelease()
  	}
  })	
}) 