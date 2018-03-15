import React, {Component} from 'react';

class PlayerDetails extends Component {
  formURL(ext){
    return (
      `https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p`+ext.slice(0, -3)+`png`
    )
  }
  render(){
    return(
      <tr>
        <td><img src={this.formURL(this.props.photoURL)} alt="player image" className="player-image"/></td>

        <td>{this.props.name}</td>
        <td>{this.props.form}</td>
        <td>{this.props.transfers_in}</td>
        <td>{this.props.transfers_out}</td>
        <td>{Number(this.props.transfers_in) - Number(this.props.transfers_out)}</td>

      </tr>

    )
  }


}
export default PlayerDetails;
