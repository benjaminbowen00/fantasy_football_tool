import React from 'react';
import PlayerList from '../components/PlayerList.js'
class PlayerListContainer extends React.Component{
constructor(props){
  super(props);
  this.state = {
    players: []
  };
}






componentDidMount() {
  const url = 'https://fantasy.premierleague.com/drf/bootstrap-static';
  const request = new XMLHttpRequest();
  request.open('GET', url);

  request.addEventListener("load", () => {
    if (request.status !== 200) return;
    const jsonString = request.responseText;
    const data = JSON.parse(jsonString);

    data.elements.sort(this.compareOnForm);
    const savedData = data.elements.slice(0, 5)
    this.setState({players: savedData})
  });

  request.send();
}

render(){
  return(
    <div>
      <PlayerList players={this.state.players} />
    </div>
  )
}

compareOnForm(a, b){
  let comparison = 0;

  if (Number(a.form) < Number(b.form)) {
    comparison = 1;
  }
  if (Number(b.form) < Number(a.form)) {
    comparison = -1;
  }

  return comparison;
}

}
export default PlayerListContainer;
