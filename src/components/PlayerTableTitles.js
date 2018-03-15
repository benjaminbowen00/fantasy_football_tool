import React, {Component} from 'react';

class PlayerTableTitles extends Component {

  render(){
    if(this.props.nodes === 0)return null;
    return(
      <tr>
        <th>Photo</th>
        <th>Player</th>
        <th>Transfers in</th>
        <th>Transfers out</th>
        <th>Net transfers</th>
      </tr>
    )}

  }

export default PlayerTableTitles;
