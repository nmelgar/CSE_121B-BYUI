//  create the quote in html
// let randomNumber;
// function getRandom(quotesNumbers){
//     randomNumber = (Math.floor(Math.random() * quotesNumbers.length));
//     return randomNumber
// }

let quotes = []

function quotesLength(quotesLen){
    length = quotesLen.length
    return length
}


function newQuote(quotes) {
    // randomNumber = (Math.floor(Math.random() * 2));

    let quotesContainer = document.querySelector(".quotes-container");

    let quoteParagraph = document.createElement("h3")
    quoteParagraph.innerHTML = '"' + quotes[1].cita + '"';
    quotesContainer.appendChild(quoteParagraph)

}

// function newQuote(quotes){
//     let generateQuote = quotes[Math.floor(Math.random() * quotes.length)];
//     let printQuote = document.getElementById('quote-here');
//     printQuote.textContent = generateQuote;
// }


//  to get the quotes
let getQuotes = async () => {
    let response = await fetch(
        "https://nmelgar.github.io/citas_lds_spanish_json/citas_lds_spanish.json"
    );
    quotesData = await response.json();
    
    //this returns a promise
    newQuote(quotesData);
    quotesLength(quotesData);
};
getQuotes();

let randomQuote = document.getElementById('new-quote').addEventListener("click", newQuote);
// document.getElementById("new-quote").onclick = function () {
//     showQuotes()
// };