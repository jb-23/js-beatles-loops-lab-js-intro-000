

function theBeatlesPlay(mus, ins) {
  var f = [];

  for (var i = 0; i < mus.length; ++i) {
    f.push(mus[i] + ins[i])
  }

  return f;
}
