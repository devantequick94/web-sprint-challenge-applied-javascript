import axios from "axios"
const Card = (article) => {
 
 const div = document.createElement("div");
 div.className = "card";
 
 const headlineDiv = document.createElement("div");
 headlineDiv.className = "headline";
 headlineDiv.textContent = article.headline;

 const authorDiv = document.createElement("div")
 authorDiv.className = "author";

 const imgContainer = document.createElement("div");
 imgContainer.className = "img-container";
 
 const img = document.createElement("img");
 img.src = article.authorPhoto;

 const span = document.createElement("span");
 span.textContent = `By ${article.authorName}`;

 imgContainer.append(img);
 authorDiv.append(imgContainer, span);
 div.append(headlineDiv, authorDiv);
 div.addEventListener("click", (evt) => console.log(headlineDiv.textContent));

 return div;

 
 
 
 
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {


  const container = document.querySelector(selector);
  axios
   .get("http://localhost:5000/api/articles")
   .then(item => {
     const articles = item.data.articles;
     for(const article in articles){
       console.log("here", articles[articles]);
       articles[article].forEach(i => container.appendChild(Card(i)))
     }
       })
    .catch(err => console.log(err))
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
