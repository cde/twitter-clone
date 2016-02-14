import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';

import TweetStore from './stores/TweetStore';
import TweetActions from './actions/TweetActions';
TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  // formattedTweets(tweetList){
  //   let formattedlist = tweetList.map( tweet => {
  //     tweet.formattedDate = moment(tweet.created_at).fromNow();
  //     return tweet;
  //   });
  //   return {
  //     tweetList: tweetList
  //   };
  // }
  
  addTweet(tweetToAdd) {
    // $.post("/tweets", { body: tweetToAdd })
    // .success( savedTweet => {
    //   let actualTweetList = this.state.tweetList;
    //   actualTweetList.unshift(savedTweet);
    //   this.setState(this.formattedTweets(actualTweetList))
    // })
    // .error(error => console.log(error))
  }
  
  componentDidMount() {
    console.log(5, "componentDidMount Main._onChange");
    TweetStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    console.log(5, "componentWillUnmount Main._onChange");
    TweetStore.removeChangeListener(this._onChange);  
  }
  _onChange() {
    this.setState(getAppState());
  }
  render() {
    return(
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetsList tweets={this.state.tweetsList}/>
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render (
      <Main />, reactNode
    );
  }
};

$(documentReady);
