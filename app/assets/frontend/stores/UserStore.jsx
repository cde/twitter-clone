// A Store's responsability is to manage data. Its source for the data is the dispatcher
import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';
import AppEventEmitter from './AppEventEmitter';

let _users = [];
let _followedIds = [];

class UserEventEmitter extends AppEventEmitter {
    getAll() {
      return _users.map( user => {
        user.following = _followedIds.indexOf(user.id) >= 0;
        return user;
      });
    }
}

let UserStore = new UserEventEmitter();

//The first thing a store needs to do is register with the dispatcher. The store
// is interested in whatever data is going to be dispatching
AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_USERS:
      _users = action.rawUsers;
      UserStore.emitChange();
      break;
    case ActionTypes.RECEIVED_ONE_FOLLOWER:
      console.log(action.rawFollower)
      _followedIds.push(action.rawFollower.user_id);
      UserStore.emitChange();
      break;  
    default: 
      // no op
  }
});

export default UserStore;