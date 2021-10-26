const myKey = config.MY_KEY;

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": myKey
    } })
    .then(response => response.json())
    .then(data => {
        const songs = data.data
        console.log(data.data)
        displaySongs(songs)
    })
    .catch(error => console.log(error))

const displaySongs = songs => {
    const container = document.querySelector('.api-data')
}