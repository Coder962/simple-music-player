var song = [
    {
        name: 'Ikson - Alive',
        path: 'music/Alive.mp3',
        artist: 'Ikson',
        cover: 'thumbnails/Alive.jpg'
    },
    {
        name: 'Tobu - Candyland [NCS Release]',
        path: 'music/Candyland.mp3',
        artist: 'Tobu',
        cover: 'thumbnails/Candyland.jpg'
    },
    {
        name: 'Jordan Schor & Harley Bird - Home [NCS Release]',
        path: 'music/Home.mp3',
        artist: 'Jordan Schor & Harley Bird',
        cover: 'thumbnails/Home.jpg'
    },
    {
        name: 'ElementD & Chordinatez - Radiate (feat. Mees Van Den Berg) [NCS Release]',
        path: 'music/Radiate.mp3',
        artist: 'ElementD, Chordinatez & Mees Van Den Berg',
        cover: 'thumbnails/Radiate.jpg'
    },
    {
        name: 'Distrion & Electro-Light - Rubik [NCS Release]',
        path: 'music/Rubik.mp3',
        artist: 'Distrion & Electro-Light',
        cover: 'thumbnails/Rubik.jpg'
    },
]
i = 0;
function nextTrack() {
    i++
    if (i ==-1) {
        i = 4;
    }
    if (i == 0) {
        document.getElementById("artist").innerHTML="Ikson";
        document.getElementById("album").src="thumbnails/Alive.jpg";
        document.getElementById("song-audio").src="music/Alive.mp3";
        document.getElementById("music-name").innerHTML="Alive";
        let c = document.getElementById("play-bt").classList.value;
        if (c == "fas fa-pause") {
            var songname = document.getElementById("song-audio");
            songname.play();
        }
        if (c == "fas fa-play") {
            document.getElementById("play-bt").className = "fas fa-play";
            var songname = document.getElementById("song-audio");
            songname.pause();
        } 

    }
    if (i == 1) {
        document.getElementById("artist").innerHTML="Tobu";
        document.getElementById("song-audio").src="music/Candyland.mp3";
        document.getElementById("album").src="thumbnails/Candyland.jpg";
        document.getElementById("music-name").innerHTML="Candyland [NCS Release]";
        let c = document.getElementById("play-bt").classList.value;
        if (c == "fas fa-pause") {
            var songname = document.getElementById("song-audio");
            songname.play();
        }
        if (c == "fas fa-play") {
            document.getElementById("play-bt").className = "fas fa-play";
            var songname = document.getElementById("song-audio");
            songname.pause();
        } 
    }
    if (i == 2) {
        document.getElementById("artist").innerHTML="Jordan Schor & Harley Bird";
        document.getElementById("song-audio").src="music/Home.mp3";
        document.getElementById("album").src="thumbnails/Home.jpg";
        document.getElementById("music-name").innerHTML="Home [NCS Release]";
        let c = document.getElementById("play-bt").classList.value;
        if (c == "fas fa-pause") {
            var songname = document.getElementById("song-audio");
            songname.play();
        }
        if (c == "fas fa-play") {
            document.getElementById("play-bt").className = "fas fa-play";
            var songname = document.getElementById("song-audio");
            songname.pause();
        } 
    }
    if (i == 3) {
        document.getElementById("artist").innerHTML="ElementD, Chordinatez & Mees Van Den Berg";
        document.getElementById("song-audio").src="music/Radiate.mp3";
        document.getElementById("album").src="thumbnails/Radiate.jpg";
        document.getElementById("music-name").innerHTML="Radiate [NCS Release]";
        let c = document.getElementById("play-bt").classList.value;
        if (c == "fas fa-pause") {
            var songname = document.getElementById("song-audio");
            songname.play();
        }
        if (c == "fas fa-play") {
            document.getElementById("play-bt").className = "fas fa-play";
            var songname = document.getElementById("song-audio");
            songname.pause();
        } 
    }
    if (i == 4) {
        document.getElementById("artist").innerHTML="Distrion & Electro-Light";
        document.getElementById("song-audio").src="music/Rubik.mp3";
        document.getElementById("album").src="thumbnails/Rubik.jpg";
        document.getElementById("music-name").innerHTML="Rubik [NCS Release]";
        let c = document.getElementById("play-bt").classList.value;
        if (c == "fas fa-pause") {
            var songname = document.getElementById("song-audio");
            songname.play();
        }
        if (c == "fas fa-play") {
            document.getElementById("play-bt").className = "fas fa-play";
            var songname = document.getElementById("song-audio");
            songname.pause();
        } 
    }
    if (i == 5) {
        document.getElementById("artist").innerHTML="Ikson";
        document.getElementById("album").src="thumbnails/Alive.jpg";
        document.getElementById("song-audio").src="music/Alive.mp3";
        document.getElementById("music-name").innerHTML="Ikson - Alive";
        let c = document.getElementById("play-bt").classList.value;
        if (c == "fas fa-pause") {
            var songname = document.getElementById("song-audio");
            songname.play();
        }
        if (c == "fas fa-play") {
            document.getElementById("play-bt").className = "fas fa-play";
            var songname = document.getElementById("song-audio");
            songname.pause();
        } 
        i = 0;
    }
}
function prevTrack() {
    i--
    if (i ==-1) {
        i = 4;
    }
    if (i == 0) {
        document.getElementById("artist").innerHTML="Ikson";
        document.getElementById("album").src="thumbnails/Alive.jpg";
        document.getElementById("song-audio").src="music/Alive.mp3";
        document.getElementById("music-name").innerHTML="Alive";
        let c = document.getElementById("play-bt").classList.value;
        if (c == "fas fa-pause") {
            var songname = document.getElementById("song-audio");
            songname.play();
        }
        if (c == "fas fa-play") {
            document.getElementById("play-bt").className = "fas fa-play";
            var songname = document.getElementById("song-audio");
            songname.pause();
        } 

    }
    if (i == 1) {
        document.getElementById("artist").innerHTML="Tobu";
        document.getElementById("song-audio").src="music/Candyland.mp3";
        document.getElementById("album").src="thumbnails/Candyland.jpg";
        document.getElementById("music-name").innerHTML="Candyland [NCS Release]";
        let c = document.getElementById("play-bt").classList.value;
        if (c == "fas fa-pause") {
            var songname = document.getElementById("song-audio");
            songname.play();
        }
        if (c == "fas fa-play") {
            document.getElementById("play-bt").className = "fas fa-play";
            var songname = document.getElementById("song-audio");
            songname.pause();
        } 
    }
    if (i == 2) {
        document.getElementById("artist").innerHTML="Jordan Schor & Harley Bird";
        document.getElementById("song-audio").src="music/Home.mp3";
        document.getElementById("album").src="thumbnails/Home.jpg";
        document.getElementById("music-name").innerHTML="Home [NCS Release]";
        let c = document.getElementById("play-bt").classList.value;
        if (c == "fas fa-pause") {
            var songname = document.getElementById("song-audio");
            songname.play();
        }
        if (c == "fas fa-play") {
            document.getElementById("play-bt").className = "fas fa-play";
            var songname = document.getElementById("song-audio");
            songname.pause();
        } 
    }
    if (i == 3) {
        document.getElementById("artist").innerHTML="ElementD, Chordinatez & Mees Van Den Berg";
        document.getElementById("song-audio").src="music/Radiate.mp3";
        document.getElementById("album").src="thumbnails/Radiate.jpg";
        document.getElementById("music-name").innerHTML="Radiate [NCS Release]";
        let c = document.getElementById("play-bt").classList.value;
        if (c == "fas fa-pause") {
            var songname = document.getElementById("song-audio");
            songname.play();
        }
        if (c == "fas fa-play") {
            document.getElementById("play-bt").className = "fas fa-play";
            var songname = document.getElementById("song-audio");
            songname.pause();
        } 
    }
    if (i == 4) {
        document.getElementById("artist").innerHTML="Distrion & Electro-Light";
        document.getElementById("song-audio").src="music/Rubik.mp3";
        document.getElementById("album").src="thumbnails/Rubik.jpg";
        document.getElementById("music-name").innerHTML="Rubik [NCS Release]";
        let c = document.getElementById("play-bt").classList.value;
        if (c == "fas fa-pause") {
            var songname = document.getElementById("song-audio");
            songname.play();
        }
        if (c == "fas fa-play") {
            document.getElementById("play-bt").className = "fas fa-play";
            var songname = document.getElementById("song-audio");
            songname.pause();
        } 
    }
}
function playpauseTrack() {
    let c = document.getElementById("play-bt").classList.value;
    if (c == "fas fa-play") {
        document.getElementById("play-bt").className = "fas fa-pause";
        var songname = document.getElementById("song-audio");
        songname.play(); 
    }
    if (c == "fas fa-pause") {
        document.getElementById("play-bt").className = "fas fa-play";
        var songname = document.getElementById("song-audio"); 
        songname.pause(); 
    }
}
