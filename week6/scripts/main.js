//  create the quote in html
let randomNumber;
// // let quotes = []


function showQuotes(quotes) {
    randomNumber = (Math.floor(Math.random() * quotes.length));

    let quotesContainer = document.querySelector(".quotes-container");

    let quoteParagraph = document.createElement("h3")
    quoteParagraph.innerHTML = '"' + quotes[randomNumber].cita + '"';
    quotesContainer.appendChild(quoteParagraph)

    let quoteParagraph2 = document.createElement("p")
    quoteParagraph2.innerHTML = "-" + quotes[randomNumber].autor;
    quotesContainer.appendChild(quoteParagraph2);

}





//  to get the quotes
const getQuotes = async () => {
    const responseQuotes = await fetch("https://nmelgar.github.io/citas_lds_spanish_json/citas_lds_spanish.json");
    const quotesData = await responseQuotes.json();

    //this returns a promise
    showQuotes(quotesData);
};
getQuotes();

let randomQuote = document.getElementById('new-quote').addEventListener("click", showQuotes);
// document.getElementById("new-quote").onclick = function () {
//     showQuotes()
// };