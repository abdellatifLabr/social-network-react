import React from 'react';
import TweetItem from './TweetItem';

const TweetsList = () => (
  // Get Tweets Data here
  <div>
    <h5 className="py-2 py-lg-4 mt-3 mt-lg-5 h5">Recent Tweets</h5>
    {/* Map the Tweets data from array of objects */}
    <TweetItem
      userImage="/media/card-img.png"
      userName="Jhon Doe"
      userAccount="@tweetdoe"
      postedAt="1h"
      tweetDes="How does it feel, to be on your own"
    />
    <TweetItem
      userImage="/media/card-img.png"
      userName="Jhon Doe"
      userAccount="@tweetdoe"
      postedAt="1h"
      tweetDes="How does it feel, to be on your own"
    />
    <TweetItem
      userImage="/media/card-img.png"
      userName="Jhon Doe"
      userAccount="@tweetdoe"
      postedAt="1h"
      tweetDes="How does it feel, to be on your own"
    />
    <TweetItem
      userImage="/media/card-img.png"
      userName="Jhon Doe"
      userAccount="@tweetdoe"
      postedAt="1h"
      tweetDes="How does it feel, to be on your own"
    />
    <button
      type="button"
      className="btn text-uppercase small font-weight-bold btn-secondary w-100 rounded-0 p-3"
    >
      Follow
    </button>
  </div>
);

export default TweetsList;
