/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// Quotes to randomly iterate through
var quotes = [
	      { 
		  quote: "All in all it's just another brick in the wall.",
		  source: "Pink Floyd",
		  citation: "Another Brick in the Wall",
		  year: 1979 
	      },
	      { 
		  quote: "What's love got to do, got to do with it?",
		  source: "Tina Turner" 
	      },
	      { 
		  quote: "Is this the real life? Is this just fantasy?",
		  source: "Queen",
		  citation: "Bohemian Rhapsody" 
	      },
	      { 
		  quote: "I am the egg man. They are the egg men. I am the walrus. Goo goo g'joob.",
		  source: "The Beatles" 
	      },
	      { 
		  quote: "She wore a Raspberry beret. The kind you find in a second hand store.",
		  source: "Prince and the Revolution",
		  citation: "Raspberry Beret",
		  year: 1985 
	      } 
 ];

console.log( quotes );

// Grab a random quote from quotes and return it.
function getRandomQuote( ) {
    // Figure out which quote to return
    var rand = Math.floor( ( Math.random() * quotes.length ) );
    var quote = quotes[ rand ];

    return( quote );
}
console.log(getRandomQuote());

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote( ) {
    // Grab a quote
    var quoteObject = getRandomQuote();
    console.log( "Random quote: " + quoteObject );

    var html = "";
    html += '<p class="quote">' + quoteObject.quote + '</p>\n';
    html += '<p class="source">' + quoteObject.source;

    if ( quoteObject.citation ) {
	html += '<span class="citation">' + quoteObject.citation + '</span>';
    }

    if ( quoteObject.year ) {
	html += '<span class="year">' + quoteObject.year + '</span>';
    }
    html += "</p>\n";

    console.log( html );

    var domElement = document.getElementById('quote-box');
    domElement.innerHTML = html;
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


