import API from '../API'

export default {
  getAllTweets() {
    console.log(1,"TweetActions");
    API.getAllTweets();
  },
  sendTweet(body) {
    console.log(6, "TweetActions sendTweet");
    API.createTweet(body);
  }
}