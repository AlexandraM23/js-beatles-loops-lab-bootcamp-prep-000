// add solution here
function theBeatlesPlay(musicians, instruments) {
  var result = [];

  for(var i = 0; i < musicians.length() - 1; i++) {
    var sentence = musicians[i] + ' plays ' + instruments[i]
    result.push(sentence)
  }

  return result
}
