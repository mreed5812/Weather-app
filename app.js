const searchButton = document.getElementById('searchButton');
var searchItem;

searchButton.addEventListener('click', function () {
    searchItem = document.getElementById('searchInput').value;
    console.log(searchItem);
});