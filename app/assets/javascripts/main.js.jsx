class Main extends React.Component {
  render(){
    return(
      <h1>Hola Mundo!</h1>
    );
  }
}

let documentReady = () => {
  React.render (
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
