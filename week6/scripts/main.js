
//  create a random number
function getRandom(quotesArrayLength) {
    let randomNumber = (Math.floor(Math.random() * quotesArrayLength.length))
    console.log(randomNumber)
    // console.log(typeof randomNumber);
    return randomNumber
    
}

//  create the quote in html
let quotes = []

function showQuotes(quotes) {
    let quotesContainer = document.querySelector(".quotes-container")
    quotes.forEach(quote => {
        let quoteParagraph = document.createElement("p")
        quoteParagraph.innerHTML = '"' + quote.cita + '"';

        quotesContainer.appendChild(quoteParagraph)
    })

    // quotes.randomNumber
    // console.log(quotes[0])

}


//  to get the quotes
const getQuotes = async () => {
    const responseQuotes = await fetch("https://nmelgar.github.io/citas_lds_spanish_json/citas_lds_spanish.json");
    const quotesData = await responseQuotes.json();

    //this returns a promise
    showQuotes(quotesData);
    getRandom(quotesData);
};
getQuotes();