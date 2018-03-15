import React, {Component} from 'react';
import PlayerDetails from './PlayerDetails.js';
import PlayerTableTitles from './PlayerTableTitles.js';

class PlayerList extends Component{

  render(){




    const playerNodes = this.props.players.map((player, index)=> {

        return(
          <PlayerDetails key={index} name = {player.web_name} form = {player.form} photoURL = {player.photo} transfers_in = {player.transfers_in_event} transfers_out = {player.transfers_out_event}/>
        )

    })
    return(
      <table>
        <thead>
          <PlayerTableTitles nodes={playerNodes.length}/>
          {playerNodes}
        </thead>
      </table>
    )
  }


}

export default PlayerList;
