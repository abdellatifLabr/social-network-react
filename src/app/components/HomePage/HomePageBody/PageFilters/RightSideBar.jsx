import React from 'react';
import CategoriesList from './categories/CategoriesList';
import PostsList from './posts/PostsList';
import TweetsList from './Tweets/TweetsList';
import IgPhotosList from './instagramPhotos/IgPhotosList';

export default function Rightsidebar() {
  return (
    <div>
      <div className="form-group custom-search-box d-flex">
        <input
          type="text"
          className="form-control rounded-0 border-right-0 border-secondary"
          placeholder="Search"
        />
        <button
          type="submit"
          className="bg-white border-left-0 border border-secondary text-secondary px-2"
        >
          <i className="fa fa-search" />
        </button>
      </div>
      <CategoriesList />
      <PostsList />
      <TweetsList />
      <IgPhotosList />
    </div>
  );
}
