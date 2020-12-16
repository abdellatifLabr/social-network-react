import React from 'react';
import SinglePost from './SinglePost/SinglePost';
import SinglePostComments from './SinglePost/SinglePostComments';

export default function Pagecontent() {
  return (
    <div>
      <SinglePost />
      <SinglePostComments />
    </div>
  );
}
