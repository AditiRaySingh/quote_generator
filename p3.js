const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "//api.quotable.io/random";

async function getquotes(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

// Call once when page loads
getquotes(api_url);

// Add event listener to the first button (New Quote)
const newQuoteBtn = document.querySelector(".button button");
newQuoteBtn.addEventListener("click", function () {
    getquotes(api_url);
});
