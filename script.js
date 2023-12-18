
//displays the played tone on the display
function play(str) {
  if (str === 'q' || str === 'Q') {
    document.getElementById('display').innerText = 'Heater';
  } else if (str === 'w' || str === 'W') {
    document.getElementById('display').innerText = 'Snare';
  } else if (str === 'e' || str === 'E') {
    document.getElementById('display').innerText = 'Kick n Hat';
  } else if (str === 'a' || str === 'A') {
    document.getElementById('display').innerText = 'Kick';
  } else if (str === 's' || str === 'S') {
    document.getElementById('display').innerText = 'Closed HH';
  } else if (str === 'd' || str === 'D') {
    document.getElementById('display').innerText = 'Chord';
  } else if (str === 'z' || str === 'Z') {
    document.getElementById('display').innerText = 'Punchy Kick';
  } else if (str === 'x' || str === 'X') {
    document.getElementById('display').innerText = 'Side Kick';
  } else if (str === 'c' || str === 'C') {
    document.getElementById('display').innerText = 'Snare';
  }


  const audio = document.getElementById(str);
  audio.play();
}

//plays the audio files     
window.document.onkeyup = function (event) {
  let str = event.key
  if (str === 'q' || str === 'Q') {
    play('Q');
  } else if (str === 'w' || str === 'W') {
    play('W');
  } else if (str === 'e' || str === 'E') {
    play('E');
  } else if (str === 'a' || str === 'A') {
    play('A');
  } else if (str === 's' || str === 'S') {
    play('S');
  } else if (str === 'd' || str === 'D') {
    play('D');
  } else if (str === 'z' || str === 'Z') {
    play('Z');
  } else if (str === 'x' || str === 'X') {
    play('X');
  } else if (str === 'c' || str === 'C') {
    play('C');
  }

}
