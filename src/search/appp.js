import React from 'react';
import axios from 'axios';
import Header from './Header';
import Youtube from './Youtube';

export default class App extends React.Component {
  state = {
    videos: [],
  }

  onSearchYoutube = (keyword) => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=3&key=AIzaSyCFYVkilr1Dq-FE2Nf6ucIHp47zBCD2GEc`;

    axios
      .get(url)
      .then(response => {
          this.setState({
            videos: response.data.items,
          });
      })
      .catch(() => {
          console.log('通信に失敗しました');
      });
  }

  render() {
    // console.log(this.state.videos)
    return (
      <>
        <Header onSearchYoutube={this.onSearchYoutube} />
        <Youtube videos={this.state.videos}/>
      </>
    )
  }
}