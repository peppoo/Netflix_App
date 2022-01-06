import React from 'react';

const Youtube = (props) => {

    const video = props.videos.map((video,key) => {
        const url = 'https://www.youtube.com/embed/' + video.id.videoId;

        return (
            <div key={key} style={{margin: '20px', textAlign: 'center'}}>
                <iframe
                  title='Main menu'
                  id="ytplayer"
                  type="ytplayer"
                  width="500"
                  height="270"
                  src={url}
                  frameBorder="1"
                />
            </div>
        )
    });

    return (
        <div style={{marginTop: '10px'}}>
          {video}
        </div>
    )

}

export default Youtube;