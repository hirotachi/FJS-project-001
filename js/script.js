// FSJS - Random Quote Generator
const fetchData = url => {
    fetch(url)
    .then(res => res.json())
    .then(data =>  createQuote(data))
}


const printQuote = () => {
    fetchData("https://talaikis.com/api/quotes/random/");
    console.log("done");
}

const createQuote = data => {
    document.querySelector(".quote").textContent = data.quote;
    document.querySelector(".source").textContent = data.author;
}




// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);