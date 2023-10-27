function typeWriter(txt) {
    var i = 0;
    var speed = 50;
    if (i < txt.length) {
    document.getElementById("welcome_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}