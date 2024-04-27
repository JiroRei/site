const envelope = document.querySelector(".envelope-wrapper");
envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");
  let aux = document.getElementById("bgm");
  aux.volume = 0.5;
  aux.play();
});
