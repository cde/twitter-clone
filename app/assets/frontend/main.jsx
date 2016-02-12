import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [
  {id: 1, name: 'Carmen', body: "Hola Mundo"},
  {id: 2, name: 'Ruben', body: "Hola Hermana"},
  {id: 3, name: 'Enrique', body: "Hola Hermano"},
]
class Main extends React.Component {
  render(){
    return(
      <div className="container">
        <TweetBox />
        <TweetList tweets={mockTweets}/>
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
