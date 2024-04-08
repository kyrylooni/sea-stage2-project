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


let albums = [
    {
        artist: "Eminem",
        title: "The Marshall Mathers LP",
        genre: "Hip Hop/Rap",
        releaseDate: "2000-05-23",
        label: "Aftermath Entertainment",
        rating: 4,
        tracklist: ["The Real Slim Shady", "Track 2", "Track 3", "Track 4", "Track 5"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/69/The_Marshall_Mathers_LP_second_cover.jpg"

    },
    { 
        artist: "50 Cent",
        title: "Get Rich or Die Tryin'",
        genre: "Hip Hop/Rap",
        releaseDate: "2003-02-06",
        label: "Shady Records, Aftermath Entertainment, Interscope Records",
        rating: 3,
        tracklist: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9d/Get_Rich_Or_Die_Tryin%27.JPG"
    },
    {
        artist: "Ed Sheeran",
        title: "No.6 Collaborations Project",
        genre: "Pop",
        releaseDate: "2019-07-12",
        label: "Atlantic Records, Asylum Records",
        rating: 5,
        tracklist: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4f/Ed_Sheeran_-_No._6_Collaborations_Project.png"
    },
    {
        artist: "Bad Bunny",
        title: "Un Verano Sin Ti",
        genre: "Latin",
        releaseDate: "2022-05-06",
        label: "Rimas Entertainment",
        rating: 5,
        tracklist: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png"
    
    },
    {
        artist: "Okean Elzy",
        title: "Zemlya",
        genre: "Rock",
        releaseDate: "2013-05-15",
        label: "Lavina Music",
        rating: 4,
        tracklist: ["Z Neyu (With her)", "Stina (The Wall)", "Bodegita", "Nezalezhnist' (Independence)", "Rendez-Vous", "Strilyaj (Shoot)", 
                    "Obijmy (Hugs)", "Karavan (Caravan)", "Dzhul'jetta (Juliet)","Na Nebi (In the Sky)", "Pory Roku (Seasons)", "Koly Navkolo Ni Dushi (When There Are No Souls Around)"],
        imageUrl: "https://www.okeanelzy.com/upload/iblock/7b4/7b45554f93c363fd5542b78f6a88735d.jpg"
    }, 
    {
    
        artist: "Arctic Monkeys",
        title: "AM (Arctic Monkeys album)",
        genre: "Alterntive",
        releaseDate: "2013-09-09",
        label: "Domino Recording Company",
        rating: 5,
        tracklist: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"], 
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/%22AM%22_%28Arctic_Monkeys%29.jpg"
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
        albumDiv.innerHTML = `
        <img src="${album.imageUrl}" alt="Cover of ${album.title}" class="album-cover"> <!-- Album cover image -->
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
        container.appendChild(albumDiv);
    });
}

// Event listener for the search button
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    if(searchButton) {
        searchButton.addEventListener('click', searchAlbums);
    } else {
        console.error('Search button not found');
    }
});

function addAlbum() {

    // Create a new album object from form values
    const newAlbum = {
        artist: document.getElementById('artist').value,
        title: document.getElementById('title').value,
        genre: document.getElementById('genre').value,
        releaseDate: document.getElementById('release-date').value,
        label: document.getElementById('label').value,
        rating: document.getElementById('rating').value,
        tracklist: document.getElementById('tracklist').value.split(','),
        imageUrl: document.getElementById('image').value,
        // Add other properties based on the form inputs
    };


    // Add new album to the albums array
    albums.push(newAlbum);

    
    // Update the album display
    displayAlbums(); // Assuming you have a function to display albums
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-album-form').addEventListener('submit', function(event) {
        event.preventDefault();
        addAlbum();
    });
});
