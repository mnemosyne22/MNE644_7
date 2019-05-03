/*eslint-env browser*/

var i, selection, selected, options, albumSelected, currentAlbum, playBtn, favoriteBtn, favoriteAlbum;

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

/* Get Elements */

selection = $("albumList");
options = document.querySelectorAll("option"); //Array
playBtn = $("playBtn");
favoriteBtn = $("favoriteBtn");
favoriteAlbum = $("favoriteAlbum");

/* CLASS OBJECTS */

var Jukebox = function () {
    "use strict";
    var albums = [], self;
    
    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times.";
        }
    };
    return self;
};

/* INSTANCES */

var jbox = new Jukebox();
var album1 = new Album("Duran Duran", "Rio");
var album2 = new Album("REM", "Out of Time");
var album3 = new Album("Erasure", "Wonderland");
var album4 = new Album("Beatles", "Revolver");
var album5 = new Album("Go Gos", "Beauty and the Beat");
var album6 = new Album("Duran Duran", "Seven and the Ragged Tiger");
var album7 = new Album("Alanis Morissette", "Supposed Former Infatuation Junkie");
var album8 = new Album("Heart", "Dreamboat Annie");
var album9 = new Album("Fleetwood Mac", "Rumours");
var album10 = new Album("Pretenders", "Learning to Crawl");
var album11 = new Album("Grateful Dead", "Skeletons from the Closet");
var album12 = new Album("Rolling Stones", "Exile on Main Street");

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);
jbox.addAlbum(album4);
jbox.addAlbum(album5);
jbox.addAlbum(album6);
jbox.addAlbum(album7);
jbox.addAlbum(album8);
jbox.addAlbum(album9);
jbox.addAlbum(album10);
jbox.addAlbum(album11);
jbox.addAlbum(album12);

/* Functions */

function setOptionSelected(event) {
    "use strict";
    var albumSelected;
    for (i = 0; i < options.length; i += 1) {
        options[i].removeAttribute("selected");
    }
    albumSelected = event.target;
    albumSelected.setAttribute("selected");
    
    return albumSelected;
}

function getOptionSelected() {
    "use strict";
    currentAlbum = albumSelected.value;
    
}

function playAlbum() {
    "use strict";
    if (currentAlbum === "album1") {
        album1.play();
    } else if (currentAlbum === "album2") {
        album2.play();
    } else if (currentAlbum === "album3") {
        album3.play();
    } else if (currentAlbum === "album4") {
        album4.play();
    } else if (currentAlbum === "album5") {
        album5.play();
    } else if (currentAlbum === "album6") {
        album6.play();
    } else if (currentAlbum === "album7") {
        album7.play();
    } else if (currentAlbum === "album8") {
        album8.play();
    } else if (currentAlbum === "album9") {
        album9.play();
    } else if (currentAlbum === "album10") {
        album10.play();
    } else if (currentAlbum === "album11") {
        album11.play();
    } else if (currentAlbum === "album12") {
        album12.play();
    }
}

function showAlbum() {
    "use strict";
    favoriteAlbum.inneHTML = jbox.favoriteAlbum();
}

/* Events Listeners */

options.forEach(function (option) {
    "use strict";
    option.addEventListener("click", setOptionSelected);
});
selection.addEventListener("change", getOptionSelected);

playBtn.addEventListener("click", playAlbum);
playBtn.addEventListener("click", showAlbum);