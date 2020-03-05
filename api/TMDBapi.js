const API_TOKEN = "cbe364327a49b1c86ffcc7c688737058"

export function getFilmsFromApiWithSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}



export function ApiPTUT(id) {
  const url = 'http://ptutgestionabsences.herokuapp.com/api/classrooms/9'
  const urlTest = 'http://ptutgestionabsences.herokuapp.com/api/api_tests'
  return fetch(urlTest)
    .then((response) => response.json())
    .catch((error) => console.error(error))
    
}




export function PostApiPTUT(id) {
  const urlTest = 'http://ptutgestionabsences.herokuapp.com/api/testapi'

 
  fetch(urlTest, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    data: 'Test retour au present',
    
  }),
    
}).then((response) => response.json())
.then((response) => console.log({response}))
.catch((error) => console.error(error))
}

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }

export function getFilmDetailFromApi (id) {
    return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
