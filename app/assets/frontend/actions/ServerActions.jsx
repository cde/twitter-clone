import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

export default {
    receivedTweets(rawTweets) {
      console.log(3,"ServerActions.receivedTweets()");
      AppDispatcher.dispatch({
        actionType: ActionTypes.RECEIVED_TWEETS,
        rawTweets: rawTweets
      })
    },
    savedOneTweet(savedTweet) {
      console.log(7, "ServerActions.savedOneTweet" );
      AppDispatcher.dispatch({
        actionType: ActionTypes.RECEIVED_ONE_TWEET,
        savedTweet
      })
    }
}