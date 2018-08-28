 function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
  }
return array
}

function johnLennonFacts(facts) {
  var count = facts.length
  while (count > 1) {
    facts.push(`${facts} !!!`);
    count--
  }
}