//Example fetch using NASAapi

const dateChoice = getTodayDate()

getFetch(dateChoice)

document.querySelector('button').addEventListener('click', getUserFetch)

function getUserFetch(){
  const dateChoice = document.querySelector('input').value
  getFetch(dateChoice)
}

function getFetch(dateChoice){
  const url = `https://api.nasa.gov/planetary/apod?api_key=tD3yudMrKgqtPtAkqfu45OytoUAWGRUvqJzaU9KI&date=${dateChoice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('#explanation').innerText = data.explanation

        if (data.media_type == "video"){
          document.querySelector('iframe').src = data.url
        }
        else if (data.media_type == "image"){
          document.querySelector('img').src = data.url
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getTodayDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  return today
}
