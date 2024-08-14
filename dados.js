var card = document.getElementById("imagem")
var titulo = document.getElementById("titulo")
var desc = document.getElementById("desc")

function PegarInformações() {
    fetch('http://www.omdbapi.com/?t=deadpool%26wolverine&apikey=109562f8')
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log(data); 
        console.log(data.Poster)
        card.src = data.Poster
        titulo.innerHTML = data.Title
        desc.innerHTML = data.Plot
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
}