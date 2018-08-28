 function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
return array
}

function johnLennonFacts(facts) {
  var i = 4
  var array = []
  while (i > 0) {
    array.push(facts[i] + "!!!");
    i--
  }
  return array
}