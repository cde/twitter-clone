import ServerActions from './actions/ServerActions'

export default {
  getAllTweets() {
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
    .error(error => console.log(error));
  },
  createTweet(body) {
    $.post("/tweets", { body: body })
    .success( savedTweet => ServerActions.savedOneTweet(savedTweet) )
    .error(error => console.log(error))
  },
  getAllUsers() {
    $.get("/followers/random")
    .success( rawUsers => ServerActions.receivedUsers(rawUsers) )
    .error(error => console.log(error));
  },
  followUser(userId) {
    console.log("API.followUser " + userId);
    $.post("/followers", { user_id: userId })
    .success( rawFollower => ServerActions.receivedOneFollower(rawFollower))
    .error(error => console.log(error));
  }

}