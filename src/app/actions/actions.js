const BASE_URL = 'http://localhost:3000'

export function storeGame(json) {
  return {
    type: 'SET_GAME',
    payload: json
  }
}

export const trackInput = (text) => ({
  type: 'TRACK_INPUT',
  payload: text
})

export const requestGame = () => ({
  type: 'FETCH_GAME'
})

export const createGame = () => (dispatch) => {
  dispatch(requestGame())
  let url = `${BASE_URL}/newgame`
  return fetch(url)
          .then(response => response.json())
          .then((json) => dispatch(storeGame(json)))
}

export const TalkToNPC = (text, id) => (dispatch) => {
  //console.log(text)
  let data = {'talk': {'input': text}}
  //console.log(data)
  //var req = new Request(`${BASE_URL}/games/${id}/talk`, {mode: 'no-cors', method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
  return (
    fetch(`${BASE_URL}/games/${id}/talk`,
      {//mode: 'no-cors',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)}
    ).then(response => response.json())
    .then(json => dispatch(addResponse(json)))
    )
}

export function addResponse(json) {
  console.log(json)
  return {
    type: 'ADD_TO_CONVO',
    payload: json
  }
}
