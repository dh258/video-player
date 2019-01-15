import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDescription from './VideoDescription';

class App extends React.Component {
  state = { video: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      video: response.data.items,
      selectedVideo: response.data.items[0]});
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit('Hello');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDescription
                  video={this.state.selectedVideo}
              />
            </div>
            <div className="five wide column">
              <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videoArr={this.state.video}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;