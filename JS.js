function Azbuka(words) {
  lib = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    " ":"space",

    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",

    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "!": "-.-.--",
    "@": ".--.-."
  };
  var str = "";
  var spliting = words.replace("   ", " space ").split(" ");
  for (var i in spliting) {
    if (spliting[i] != "") {
      for (var j in lib) {
        if (spliting[i] == lib[j]) {
          str += j;
        }
      }
    }
  }
  return str;
}
var decoded =Azbuka("... .- -- .--. .-.. .         - . -..- -");
document.write("Переведено слово: " + decoded);
