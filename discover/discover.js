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
    const row = document.createElement('div')
    row.className = 'row d-flex justify-content-center'
    songs.forEach(song => {
        const card = document.createElement('div')
        card.className = 'hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 m-2 rounded'
        card.innerHTML = `
        <img src=${song.album.cover_xl} class="card-img-top pt-2 img-fluid" alt="...">
        <div class="card-body">
            <p class="hp-subhero-title">${song.title}</p>
            <p></p>
            <p class="hp-subhero-subtitle mb-0"></p>
        </div>`
        row.appendChild(card)
    })
    container.appendChild(row)
}