searchForm = getElementById("searchform");

function formSubmit(event) {
    event.preventDefault();

    var searchInput = getElementById("input").value;
    var formatInput = getElementById("dropDown").value;

    if (!searchInput) {
        alert("You need an input value!");
        return;
    }

}

var searchUrl = "./search-results.html?q=" + searchInput + '&format=' + formatInputVal;

localStorage.assign(searchUrl);

searchForm.addEventListener("submit", formSubmit);