
var searchField = getElementById("input");

var searchTerm = searchField.value.trim();



var outputField = getElementById("content");

displaySearch = function (data) {
    outputField.textContent = "data";
};


var getSearchResults = function (searchTerm) {
    var searchUrl = "https://www.loc.gov/search/?q=" + searchTerm + "&fo=json";
    // var searchUrl = "https://www.loc.gov/search/?q=baseball&fo=json"; THIS WAS USED AS AN EXAMPLE

    fetch(searchUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
                displaySearch (data);
            }); 
        } else {
            alert("Error: No Data To Display");
        }
    }
    
    )
}

getSearchResults();


// var getUserRepos = function (user) {
//     var apiUrl = 'https://api.github.com/users/' + user + '/repos';
  
//     fetch(apiUrl)
//       .then(function (response) {
//         if (response.ok) {
//           response.json().then(function (data) {
//             displayRepos(data, user);
//           });
//         } else {
//           alert('Error: ' + response.statusText);
//         }
//       })
//       .catch(function (error) {
//         alert('Unable to connect to GitHub');
//       });
//   };