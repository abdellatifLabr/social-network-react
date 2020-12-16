import React from 'react';
import CategoryItem from "../categories/CategoryItem";
import PostItem from "./PostItem";

const PostsList = () => {
  return (
    <div>
      <h5 className='py-2 py-lg-3 mt-3 mt-lg-5  h5'>Popular Posts</h5>
      <PostItem itemName = 'Photography' itemDate = 'May, 19th 2020' itemImage = '/media/card-img.png'/>
      <PostItem itemName = 'Photography' itemDate = 'May, 12th 2020' itemImage = '/media/card-img.png'/>
      <PostItem itemName = 'Photography' itemDate = 'May, 12th 2020' itemImage = '/media/card-img.png'/>
    </div>
  );
};

export default PostsList;
