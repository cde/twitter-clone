import Tweet from "./Tweet"
export default class TweetList extends React.Component {
  render() {
    return(
      <div> 
        <ul className="collection">
          <Tweet />
        </ul>
      </div>
    );
  }
}