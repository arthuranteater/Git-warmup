document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    var joeysmarket = document.querySelector('div')
    joeysmarket.innerContent = `<h1>Snacks</h2>`
  });