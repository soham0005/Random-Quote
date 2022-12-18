const api = "https://type.fit/api/quotes";



const displayRandomQuote = (readableData, randomNumber) => {
    
    let quoteTobeDisplayed = document.querySelector("#quote");
    let authorTobeDisplayed = document.querySelector("#author");
    if(readableData[randomNumber].author == null){
    quoteTobeDisplayed.innerText = readableData[randomNumber].text;
    authorTobeDisplayed.innerText = "Anonymous;"
    
    }
    else{
    quoteTobeDisplayed.innerText = readableData[randomNumber].text;
    authorTobeDisplayed.innerText = readableData[randomNumber].author;
    }

}





const getRandomQuotes = async () => {
    try {
        let readableData = await (await fetch(api)).json();
        const randomNumber = Math.floor(Math.random() * readableData.length);
        console.log(readableData[randomNumber]);


        displayRandomQuote(readableData, randomNumber);
       
    } catch (error) {
        console.log(error);
    }
}

getRandomQuotes();

