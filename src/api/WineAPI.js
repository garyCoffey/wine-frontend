const fetchWineByID = (wineID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://pure-coast-15116.herokuapp.com/wines/${wineID}`)
    .then((response) => response.json());
}

const fetchWines = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://pure-coast-15116.herokuapp.com/wines`)
    .then((response) => response.json());
}

const addWine = (wineObject) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://pure-coast-15116.herokuapp.com/wines`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(wineObject)
  })
}

export default {
  fetchWineByID: fetchWineByID,
  fetchWines: fetchWines,
  addWine: addWine
}