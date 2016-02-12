import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweetList: []
    };
  }
  addTweet(tweetToAdd) {
    let actualTweetList = this.state.tweetList;
    actualTweetList.unshift({
      id: Date.now(),
      name: 'Guest',
      body: tweetToAdd
    });
    
    this.setState({ tweetList: actualTweetList })
    
  };
  render() {
    return(
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={this.state.tweetList}/>
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render (
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
