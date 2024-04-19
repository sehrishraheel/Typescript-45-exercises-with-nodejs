function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };
    if(tracks !== undefined){
        album.tracks = tracks;
}
   return album;
}
// calling three functions and creating 3 variables with different values
let album1 = make_album("Sehar", "Album title 1");

let album2 = make_album("Raheel", "Album title 2");

//calling a make_album function with third parameter

let album3 = make_album("Raza", "Album title 3", 10);

//print values of our object created my function

console.log(album1);
console.log(album2);
console.log(album3);