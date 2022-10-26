const btn = document.getElementById("searchbtn").addEventListener("click",function(){

 const inputValue = document.getElementById("search-field").value;
 //console.log(inputValue)
 const url = `https://api.lyrics.ovh/suggest/:${inputValue}`
//console.log(url);
fetch(url)
.then(res=>res.json())
.then(data=>displayData(data.data))

})

function displayData(songs){

//console.log(songs);
const songContain = document.getElementById("song-Container");
songs.forEach(song => {
    //console.log(song.title)
    const div = document.createElement('div');
    div.className ='single-result row align-items-center my-3 p-3'
    div.innerHTML=`
    
            <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
        </div>
        <audio controls>
            <source src="${song.preview}" type="audio/ogg">
           
       </audio>
        <div class="col-md-3 text-md-right  align-items-center">
            <button onclick="getLyrics('${song.artist.name}','${song.title}')" class="btn btn-success mt-3 align-items-center">Get Lyrics</button>
        </div>
    
    `;
    songContain.appendChild(div);
 
});

}
const getLyrics=(artist,title)=>{
  const url =` https://api.lyrics.ovh/v1/${artist}/${title}`;
 // console.log(url)
 fetch(url)
.then(res=>res.json())
.then(data => console.log(data))
}
