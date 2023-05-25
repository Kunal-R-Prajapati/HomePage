// Inintializing the required DOM Elemnets.
const dropdownButton = document.getElementById('dropdownButton');
const dropdownList = document.getElementById('dropdownList');
const serachButton = document.getElementById('searchButton');
const searchText = document.getElementById('searchText');
const body = document.querySelector("body");
const logo = document.querySelector('.logo');

// Taking a default url of google for initial condition
let url = "https://www.google.com/search?q=";

// When the page is lodaed we call this function to set or background and image
changeBackground();

// dropdownButton.addEventListener("click", toggleList());
function changeBackground() {

    //  Using fetch to access image from the unsplash server (api) 
    fetch(`https://source.unsplash.com/1600x900/?code`)
        .then((response) => {
            body.style.background = `url(${response.url}) no-repeat center`;
            logo.querySelector('img').src = `${response.url}`;
        })
        .catch((error) => {
            // This will handle any error when we does not get any response or any kind of error in response
            let random = Math.floor(Math.random() * 9) + 1;
            body.style.background = `url(./img/background${random}.jpg) no-repeat center`;
            logo.querySelector('img').src = `./img/background${random}.jpg`;
        })
    // This styling will be same for both condition 
    body.style.backgroundSize = 'cover';
    body.style.backdropFilter = 'blur(4px)';
    body.style.backgroundAttachment = "fixed";
}

// Adding a evcentlister to all buttons in the dropdown menu
dropdownList.querySelectorAll('button').forEach(button => {
    button.onclick = function () {
        // Accessing url from the clicked button 
        url = this.dataset.url;
        // engine variable is only use to change the inner html of the dropdownButton
        var engine = this.dataset.engine;
        // hiding the dropdown list after selecting the search engine
        toggleList();
        // Updating the content of dropdown Button
        dropdownButton.innerHTML = `
            <img src="./img/icons8-${engine}.svg" class="w-6 md:w-7" alt="" srcset="">
                    ${engine}
                    <img src="./img/icons8-down-16.png" class="w-2 md:w-3" alt="" srcset="">`;

    }
})


//  Event listerns which enables the search

// Event for the Search button
serachButton.addEventListener("click", openSearch);
// Event for the enter key
searchText.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        openSearch();
    }
});

// Function which toggle the view of dropdown list
function toggleList() {
    if (dropdownList.style.display === 'block') {
        dropdownList.style.display = 'none';
        console.log(dropdownList.style.display);
    } else {
        dropdownList.style.display = 'block';
        console.log(dropdownList.style.display);
    }
}

// Function to seach the content
function openSearch() {
    // If the input field is empty the search will be hault 
    if(searchText.value == "" || searchText.value == null){
        alert("Cannot Search Nothing :< ");
    }
    else {
        // If search filed contain any value te open it
        url = `${url}${searchText.value}`;
        window.open(url, "_self");
    }
}

