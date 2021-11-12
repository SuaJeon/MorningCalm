// inspiring quotes - about self dev, Long term goals, meditation etc
// as an array - contents, sources 
// randomly display v
// visible all the time v
// refresh frequently

const quotes = [
    {content:"1", source:"1",},
];

const quote = document.querySelector("#quotes span:first-child");
const source = document.querySelector("#quotes span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.content;
source.innerText = todaysQuote.source;