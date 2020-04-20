// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
const topicDoc = document.querySelector('.topics');

function topicCreator(topicObj){
    const topicsDiv = document.createElement('div')
    topicsDiv.classList.add('tab')
    topicsDiv.textContent = `Topic here: ${topicObj}`

    return topicsDiv
}


axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then( (response) => {
     response.data.topics.forEach((topicObj) => {
 const newTopic = topicCreator(topicObj)
 topicDoc.appendChild(newTopic);
   })
console.log(response)
})
.catch( (err) => {
  console.log("the data was not returned", err)
});

//for(response.data.articles()){
       