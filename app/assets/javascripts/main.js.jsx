class Main extendes React.componet {
  render(){
    return {
      <h1>Hello from componet</h1>
    }
  }
  
}

let documentReady = () => {
  React.render{
    <Main/>,
    document.getElementById('react')
  }
}

$(documentReady);
