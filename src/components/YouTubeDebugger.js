import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  resolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });
  }

  render() {
    return (
      <div className="youtube-clickers">
        <button className="bitrate" onClick={this.bitrateClick}>The current bitrate is {this.state.settings.bitrate}</button>
        <br />
        <button className="resolution" onClick={this.resolutionClick}>The current resolution is {this.state.settings.video.resolution}</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
