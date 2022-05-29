let quptes = [];

function output(quotes) {
    let quotesContainer = document.getElementById("quotes-container")
   
    quotes.forEach(quote => {

        let article = document.createElement("article");
        article.setAttribute("class", "each-quote")

        let quoteParagraph = document.createElement("p")
        quoteParagraph.setAttribute("class", "quote-paragraph")
        quoteParagraph.innerHTML = '"' + quote.cita + '"';

        let autorText = document.createElement("div")
        autorText.setAttribute("class", "quote-autor")
        autorText.innerHTML = "-" + quote.autor;

        // append different element as childs
        article.appendChild(quoteParagraph);
        article.appendChild(autorText);
        quotesContainer.appendChild(article)

        // create columns for the grid
        quotesContainer.style.setProperty('grid-template-columns', 'repeat(3, 1fr)');

        // create random colors for backgrounds
        let colorRed = Math.floor(Math.random() * 256);
        let colorGreen = Math.floor(Math.random() * 256);
        let colorBlue = Math.floor(Math.random() * 256);
        article.style.backgroundColor = 'rgb(' + colorRed + ', ' + colorGreen + ', ' + colorBlue + ')';

    });
}

// async function to get the quotes
let getQuotes = async () => {
    let response = await fetch(
        "https://nmelgar.github.io/citas_lds_spanish_json/citas_lds_spanish.json"
    );
    quotesData = await response.json();

    // returns a promise
    output(quotesData);
};
getQuotes();