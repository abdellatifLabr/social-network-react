import React, {Component} from 'react';
import TweetItem from "../Tweets/TweetItem";

class IgPhotosList extends Component {
  render() {
    return (
      <div>
        <h5 className='py-2 py-lg-4 mt-3 mt-lg-5 h5'>Instagram Photos</h5>
          <div className='w-100 d-flex m-auto justify-content-between flex-wrap'>
            <div className="width-30">
              <img src='/media/card-img.png' width='100%' height='auto'  alt="Image"/>
            </div>
            <div className="width-30 mb-3">
              <img src='/media/card-img.png' width='100%' height='auto'  alt="Image"/>
            </div>
            <div className="width-30 mb-3">
              <img src='/media/card-img.png' width='100%' height='auto'  alt="Image"/>
            </div>
            <div className="width-30 mb-3">
              <img src='/media/card-img.png' width='100%' height='auto'  alt="Image"/>
            </div>
            <div className="width-30 mb-3">
              <img src='/media/card-img.png' width='100%' height='auto'  alt="Image"/>
            </div>
            <div className="width-30 mb-3">
              <img src='/media/card-img.png' width='100%' height='auto'  alt="Image"/>
            </div>
          </div>
      </div>
    );
  }
}

export default IgPhotosList;
