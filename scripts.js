/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */



// This is an array of strings (TV show titles)
// An array of objects, where each object contains both the title and the corresponding image URL. 
// This way allows to add new shows with their images without modifying the code structure. 
/*
let shows = [
    { title: "Fresh Prince of Bel Air", imageUrl:"https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg"},
    { title: "Curb Your Enthusiasm", imageUrl:"https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg"},
    { title: "East Los High", imageUrl:"https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg"},
]
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    

    // 

    for (let i = 0; i < shows.length; i++) {
        const show = shows[i];
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, show.title, show.imageUrl);
        cardContainer.appendChild(nextCard);
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    shows.pop();
    showCards();
}
*/

let albums = [
    {
        artist: "Eminem",
        title: "The Marshall Mathers LP",
        genre: "Hip Hop/Rap",
        releaseDate: "2000-05-23",
        label: "Aftermath Entertainment",
        rating: 4,
        tracklist: ["The Real Slim Shady", "Track 2", "Track 3", "Track 4", "Track 5"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg"

    },
    { 
        artist: "Artist Name",
        title: "Album Title",
        genre: "Genre",
        releaseDate: "YYYY-MM-DD",
        label: "Music Label",
        rating: 3,
        tracklist: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        artist: "Artist Name",
        title: "Album Title",
        genre: "Genre",
        releaseDate: "YYYY-MM-DD",
        label: "Music Label",
        rating: 5,
        tracklist: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
        imageUrl: "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg"
    },
    {
        artist: "Artist Name",
        title: "Album Title",
        genre: "Genre",
        releaseDate: "YYYY-MM-DD",
        label: "Music Label",
        rating: 2,
        tracklist: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
        imageUrl: "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg"
    
    },
    {
        artist: "Artist Name",
        title: "Album Title",
        genre: "Genre",
        releaseDate: "YYYY-MM-DD",
        label: "Music Label",
        rating: 4,
        tracklist: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg"
    }, 
    {
    
        artist: "Artist Name",
        title: "Album Title",
        genre: "Genre",
        releaseDate: "YYYY-MM-DD",
        label: "Music Label",
        rating: 4,
        tracklist: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"], 
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg"
    }
        
   
];

function displayAlbums() {
    const container = document.getElementById('album-container');
    container.innerHTML = ''; // Clear the container
    albums.forEach(album => {
        const albumImage = document.createElement('img');
        albumImage.src = album.imageUrl;
        albumImage.alt = `Cover of ${album.title}`;
        container.appendChild(albumImage);

        const albumDiv = document.createElement('div');
        albumDiv.innerHTML = `
            <h2>${album.title} - ${album.artist}</h2>
            <p>Genre: ${album.genre}</p>
            <p>Release Date: ${album.releaseDate}</p>
            <p>Label: ${album.label}</p>
            <p>Rating: ${album.rating}</p>
            <h3>Tracklist:</h3>
            <ul>
                ${album.tracklist.map(track => `<li>${track}</li>`).join('')}
            </ul>
        `;
        container.appendChild(albumDiv); // Append the new div to the container
    });
}


function removeLastAlbum() {
    if (albums.length > 0) {
        albums.pop(); // Remove the last element from the array
        displayAlbums(); // Update the display
    } else {
        alert("No more albums to remove!");
    }
}
   
function searchAlbums() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const container = document.getElementById('album-container');
    container.innerHTML = ''; // Clear the album display

    const filteredAlbums = albums.filter(album => 
        album.title.toLowerCase().includes(searchTerm) ||
        album.artist.toLowerCase().includes(searchTerm)
    );

    // If no albums found, display a message
    if (filteredAlbums.length === 0) {
        container.innerHTML = '<p>No albums found. Please try another search.</p>';
        return;
    }

    // Otherwise, display the filtered albums
    filteredAlbums.forEach(album => {
        const albumDiv = document.createElement('div');
        // ... Set albumDiv details based on the album ...
        container.appendChild(albumDiv);
    });
}

// Event listener for the search button
document.getElementById('search-section').addEventListener('click', searchAlbums());

document.getElementById('search-section').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchAlbums();
    }
});