import React, { Component } from 'react';
import { connect } from 'react-redux';

class Playlist extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         playlists: []
      }
   }
}

function mapStateToProps(state) {
   return {
      playlists: state.playlists
   }
}

const PlaylistContainer = connect(mapStateToProps)(Playlist);
