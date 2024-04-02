const trackList = document.getElementById(`track-list`)

axios.get(`https://leonardoapi.onrender.com/songs`)
    .then((res) => {

        res.data.songs.map( (song) => {

            const div = document.createElement(`div`)

            div.classList.add(`containe__box__listm`)

            div.innerHTML = `
            <div class="title__artist">
                <div class="img_album">
                    <img class="album__list" src="${song.path.front}" alt="">
                    <p>${song.title}</p>
                </div>
                <div class=title__agrupation>
                    <p class="text_album">${song.album}</p>
                    <p>${song.duration}</p>
                </div>
            </div>
            `

            div.addEventListener(`click`, () => {
                document.getElementById(`current_song_img`).setAttribute(`src`,song.path.front)
                document.getElementById(`control_audio`).setAttribute(`src`,song.path.audio)
                document.getElementById(`current_title`).innerHTML = song.title
                document.getElementById(`current_author`).innerHTML = song.author
            })

            trackList.appendChild(div)
    } )
})

