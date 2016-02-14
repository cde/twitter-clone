import ServerActions from './actions/ServerActions'

export default {
  getAllTweets() {
    console.log(2, "API.getAllTweets");
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
    .error(error => console.log(error));
  },
  createTweet(body) {
    $.post("/tweets", { body: body })
    .success( savedTweet => ServerActions.savedOneTweet(savedTweet) )
    .error(error => console.log(error))
  }

}