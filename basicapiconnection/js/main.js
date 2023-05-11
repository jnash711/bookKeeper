//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // localStorage.setItem('books', data.title)
        let books = localStorage.getItem('books') + ";" + data.title
        localStorage.setItem('books', books)
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.physical_format
        document.querySelector('h4').innerText = data.publish_date
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

