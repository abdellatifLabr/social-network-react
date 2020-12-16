import React from 'react';

const TweetItem = ({
  userImage,
  userName,
  userAccount,
  postedAt,
  tweetDes,
}) => (
  <div className="d-flex align-items-center mb-3">
    <div style={{ width: '50px', height: '50px' }} className="mr-2">
      <img src={userImage} alt={userImage} width="100%" height="100%" />
    </div>
    <div className="tweetItem">
      <span>
        <h5 className="h5 mr-2">{userName}</h5>
        <span className="small">{userAccount}</span>
        <span className="small float-right">{postedAt}</span>
      </span>
      <div>
        {' '}
        <h6 className="small text-muted">{tweetDes}</h6>
      </div>
    </div>
  </div>
);

export default TweetItem;
