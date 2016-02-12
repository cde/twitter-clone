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
    $.post("/tweets", { body: tweetToAdd })
    .success( savedTweet => {
      let actualTweetList = this.state.tweetList;
      actualTweetList.unshift(savedTweet);
      this.setState({ tweetList: actualTweetList })
    })
    .error(error => console.log(error))
  }
  
  componentDidMount(){
    $.ajax("/tweets")
    .success(data => this.setState({ tweetList:data }))
    .error(error => console.log(error));
  }
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
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render (
      <Main />, reactNode
    );
  }
};

$(documentReady);
