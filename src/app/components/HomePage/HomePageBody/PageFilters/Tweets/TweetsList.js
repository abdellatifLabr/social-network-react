import React, {Component} from 'react';
import TweetItem from "./TweetItem";
class TweetsList extends Component {
  render() {
    //Get Tweets Data here
    return (
        <div>
          <h5 className='py-2 py-lg-4 mt-3 mt-lg-5 h5'>Recent Tweets</h5>
          {/* Map the Tweets data from array of objects*/}
          <TweetItem userImage = '/media/card-img.png' userName = 'Jhon Doe'  userAccount= '@tweetdoe' postedAt = '1h' tweetDes = 'How does it feel, to be on your own'/>
          <TweetItem userImage = '/media/card-img.png' userName = 'Jhon Doe'  userAccount= '@tweetdoe' postedAt = '1h' tweetDes = 'How does it feel, to be on your own'/>
          <TweetItem userImage = '/media/card-img.png' userName = 'Jhon Doe'  userAccount= '@tweetdoe' postedAt = '1h' tweetDes = 'How does it feel, to be on your own'/>
          <TweetItem userImage = '/media/card-img.png' userName = 'Jhon Doe'  userAccount= '@tweetdoe' postedAt = '1h' tweetDes = 'How does it feel, to be on your own'/>
          <button className='btn text-uppercase small font-weight-bold btn-secondary w-100 rounded-0 p-3'>Follow</button>
        </div>
    );
  }
}

export default TweetsList;
