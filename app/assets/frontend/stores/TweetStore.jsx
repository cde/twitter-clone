// A Store's responsability is to manage data. Its source for the data is the dispatcher
import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';
import { EventEmitter } from 'events';

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {
    getAll() {
      return _tweets.map( tweet => {
        tweet.formattedDate = moment(tweet.created_at).fromNow();
        return tweet;
      });
    }
    emitChange() {
      this.emit(CHANGE_EVENT);
    }
    addChangeListener(callback) {
      this.on(CHANGE_EVENT,callback);
    }
    removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
}

let TweetStore = new TweetEventEmitter();

//The first thing a store needs to do is register with the dispatcher. The store
// is interested in whatever data is going to be dispatching
AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      //
      console.log(4,"TweetStore");
      _tweets = action.rawTweets;
      TweetStore.emitChange();
      break;
    default: 
      // no op
  }
});

export default TweetStore;