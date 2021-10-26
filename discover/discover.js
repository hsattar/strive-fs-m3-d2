const myKey = config.MY_KEY;

const artists = ['eminem', 'ariana grande', 'ed sheeran']

window.onload= () => {

artists.forEach(artist => {
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": myKey
        } })
        .then(response => response.json())
        .then(data => {
            const songs = data.data
            console.log(data.data)
            displaySongs(songs, artist)
        })
        .catch(error => console.log(error))
})


const displaySongs = (songs, artist) => {
    const container = document.querySelector('.api-data')
    const row = document.createElement('div')
    row.className = 'row d-flex justify-content-center'
    const artistTitle = document.createElement('h3')
    artistTitle.className = 'col-12 text-center my-3'
    artistTitle.innerText = artist.toUpperCase()
    row.appendChild(artistTitle)
    const tempArray = []
    songs.forEach(song => tempArray.push(song))
    tempArray.forEach(song => {
        const card = document.createElement('div')
        card.className = 'hp-subhero-card col-12 col-sm-6 col-md-4 col-lg-3 m-2 rounded'
        card.innerHTML = `
        <img src=${song.album.cover_xl} class="card-img-top pt-2 img-fluid" alt="...">
        <div class="card-body">
            <p class="hp-subhero-title">${song.title}</p>
            <p class="album-title">${song.album.title}</p>
            <p class="hp-subhero-subtitle mb-0"></p>
        </div>`
        row.appendChild(card)
    })
    container.appendChild(row)
}

}


const listAlbums = () => {
    const albumModalContent = document.querySelector('.album-modal-body')
    const albumTitles = document.querySelectorAll('.album-title')
    albumTitles.forEach(album => {
        albumModalContent.innerHTML += `<p>${album.innerText}</p>`
    })
}

const countUniqueAlbums = () => {
    const albumTitles = document.querySelectorAll('.album-title')
    const uniqueAlbums = []
    albumTitles.forEach(album => {
        if (uniqueAlbums.indexOf(album.innerText) < 0) uniqueAlbums.push(album.innerText)
        // uniqueAlbums.push(album.innerText)
        // console.log(uniqueAlbums.indexOf(album.innerText))

    })
    alert(uniqueAlbums.length)
}

const listAlbumsBtn = document.querySelector('#list-albums')
listAlbumsBtn.addEventListener('click', listAlbums)

const uniqueAlbumsBtn = document.querySelector('#unique-albums')
uniqueAlbumsBtn.addEventListener('click', countUniqueAlbums)