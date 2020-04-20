// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardContainerConst = document.querySelector('cards-container')

function cardCreator(ArtHeadline, ArtSrc, ArtAuthor){

const cardConst = document.createElement('div')
cardConst.classList.add('card');

const headlineConst = document.createElement('div');
headlineConst.classList.add('headline')
headlineConst.textContent = `${ArtHeadline}`

const authorConst = document.createElement('div')
authorConst.classList.add('author');

const imgConst = document.createElement('div')
imgConst.classList.add('img-container');

const imgSrcConst = document.createElement('img');
imgSrcConst.src = `${ArtSrc}`

const spanConst = document.createElement('span')
spanConst.textContent = `${ArtAuthor}`

cardContainerConst.appendChild(cardConst)

cardConst.appendChild(headlineConst)
cardConst.appendChild(authorConst)

authorConst.appendChild(imgConst)
authorConst.appendChild(spanConst)

imgConst.appendChild(imgSrcConst)

return cardConst
}


axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then( (response) => {
    let articles = response.data.articles
    for (const name in articles)
    console.log(articles[name])
 
  console.log(response)
})
.catch( (err) => {
  console.log("the data was not returned", err)
})

//for(response.data.articles(ArtHeadline, ArtSrc, ArtAuthor)){
    // const newArticle = cardCreator(ArtHeadline, ArtSrc, ArtAuthor)
    // newArticle.appendChild(cardContainerConst)


    // response.data.articles.forEach((ArtHeadline, ArtSrc, ArtAuthor) => {
    //     const newArticle = cardCreator(ArtHeadline, ArtSrc, ArtAuthor)
    //     newArticle.appendChild(cardContainerConst)

    // for (const whateverName in object) {
    //  console.log(object[whateverName])
         for (i = 0; i < javascript.length; i++){
             console.log(response.data.articles[javascript])
         }

         
 