// A Store's responsability is to manage data. Its source for the data is the dispatcher
import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';
import AppEventEmitter from './AppEventEmitter';

let _tweets = [];

class TweetEventEmitter extends AppEventEmitter {
    getAll() {
      return _tweets.map( tweet => {
        tweet.formattedDate = moment(tweet.created_at).fromNow();
        return tweet;
      });
    }
}

let TweetStore = new TweetEventEmitter();

//The first thing a store needs to do is register with the dispatcher. The store
// is interested in whatever data is going to be dispatching
AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      //
      _tweets = action.rawTweets;
      TweetStore.emitChange();
      break;
    case ActionTypes.RECEIVED_ONE_TWEET:
      _tweets.unshift(action.savedTweet);
      TweetStore.emitChange();
    default: 
      // no op
  }
});

export default TweetStore;