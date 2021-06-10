const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach(function (key) {
  key.addEventListener("click", function () {
    playNote(key);
  });
});

document.addEventListener("keydown", function (e) {
  const key = e.key;
  if (e.repeat)
    // returns true if we are holding down(for multiple seconds)
    return;

  // to prevent reverberation on holding down
  // we return from function if we are holding down

  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;

  // currentTime explicitly sets the time
  // at which play should begin when it is clicked
  // if not set then we have to wait for former audio play to finish before next one starts
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", function () {
    key.classList.remove("active");
    // no need to pass as already in parent function
  });
}
