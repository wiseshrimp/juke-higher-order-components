import React, { Component } from 'react';
import PlaylistConstructor from './PlaylistConstructor';

export default class PlaylistForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
        currentPlaylistName: '',
        playlists: []
      }

      this.onInputChange.bind(this);
      this.handleSubmit.bind(this);
   }

   onInputChange(currentPlaylistName) {
      this.setState({
         currentPlaylistName
      })
   }
   
  handleSubmit(event) {
     event.preventDefault();
     var playlists = this.state.playlists.concat([PlaylistConstructor(this.state.currentPlaylistName)]);
     this.setState({ playlists: playlists });
   }

   render() {
      return (
         <div className="well">
            <form className="form-horizontal" onSubmit={ event => this.handleSubmit(event) }>
            <fieldset>
               <legend>New Playlist</legend>
               <div className="form-group">
               <label className="col-xs-2 control-label">Name</label>
               <div className="col-xs-10">
                   <input className="form-control" type="text" onChange={event => this.onInputChange(event.target.value)} />
               </div>
               </div>
               <div className="form-group">
               <div className="col-xs-10 col-xs-offset-2">
                     <button type="submit" className="btn btn-success">Create Playlist</button>
               </div>
               </div>
            </fieldset>
            </form>
            { this.state.playlists && this.state.playlists.map(playlist => console.log(playlist)) }
         </div>
      )
   }
}