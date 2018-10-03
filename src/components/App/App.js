import React, { Component } from 'react';
import './App.css';
import StreamList from '../StreamList/StreamList';
import { Twitch } from '../../util/Twitch';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      streams: [],
      search: "",
      filterdStreams:[],
    };

    this.getFeaturedStreamers = this.getFeaturedStreamers.bind(this);
  }

  onSearchChange = e =>{
    this.setState({search:e.target.value})
        this.state.filterdStreams = this.state.streams.filter((stream)=>{
          return stream.stream.channel.status.indexOf(e.target.value) >= 0
        })
  }

  getFeaturedStreamers() {
    Twitch.getFeaturedStreamers().then(featuredStreamerList => {
      this.setState({
        streams: featuredStreamerList,
        filterdStreams:featuredStreamerList
      });
    });
  }

  render() {
    return (
      <div className="App">
      <h1>Learning React with Twitch!</h1>
        <input type="button" onClick={this.getFeaturedStreamers} value="Get Featured Streamers" />
        <input label="Search Stream" icon="search" onChange={this.onSearchChange} placeholder="Filter" />
        <StreamList streams={this.state.filterdStreams} />
      </div>

    );
  }
}

export default App;