import TweetActions from '../actions/TweetActions';

export default class TweetBox extends React.Component {
  // ES6 difference: component's functions are not automatically bounded
  // to "this" keyboard, so you need to manually bind them (or a 3r library)
  
  sendTweet(event) {
    event.preventDefault();
    TweetActions.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = '';
  } 
  
  // we need access to the context of the textarea so we gave a ref 
  // property

  render(){
    return(
      <div className="row">
        <form onSubmit={this.sendTweet.bind(this)}>
          <div className="input-field">
            <textarea ref="tweetTextArea" className="materialize-textarea" name="tweet[body]" />        
            <label>What's happening?</label>
            <button type="submit" className="btn right">Tweet</button>
          </div>
        </form>
      </div>
      
    );
  }
}