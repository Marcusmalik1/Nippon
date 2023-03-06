// Få fat i pop up og knap elementerne fra DOM'en
var popUp = document.getElementById("popUp");
var popUpBtn = document.getElementById("popUpBtn");
var closeBtn = document.getElementsByClassName("close")[0];


// Når knappen klikkes, åbner pop up
popUpBtn.onclick = function() {
  popUp.style.display = "block";
}

// Når luk-knappen klikkes, lukker pop up
closeBtn.onclick = function() {
  popUp.style.display = "none";
}

// Når brugeren klikker udenfor pop up, lukkes den også
window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
}



const spinknap = document.querySelector("#spinknap");

const output = document.querySelector("#output");

const billeder = document.querySelectorAll("#pramie, #bimbi, #veganer");

function randomizeImage() {
  // Generer et tilfældigt tal mellem 0 og antallet af billeder
  const index = Math.floor(Math.random() * billeder.length);

  // Fjern CSS-klassen "skjul" for det tilfældigt valgte billede
  billeder[index].classList.remove("skjul");

  // Skjul de resterende billeder
  billeder.forEach((billede) => {
    if (billede !== billeder[index]) {
      billede.classList.add("skjul");
    }
  });
}

spinknap.addEventListener("click", randomizeImage);


