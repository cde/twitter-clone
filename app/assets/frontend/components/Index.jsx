import React from "react";
import TweetBox from './TweetBox';
import TweetsList from './TweetsList';

import TweetStore from '../stores/TweetStore';
import TweetActions from '../actions/TweetActions';
TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
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
        <TweetBox />
        <TweetsList tweets={this.state.tweetsList}/>
      </div>
    );
  }
}