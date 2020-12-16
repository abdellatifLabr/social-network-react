import React from 'react';
import CategoriesList from './categories/CategoriesList';
import PostsList from './posts/PostsList';
import TweetsList from './Tweets/TweetsList';
import IgPhotosList from './instagramPhotos/IgPhotosList';

export default function Rightsidebar() {
  return (
    <div className="p-3">
      <div className="form-group custom-search-box mb-2 mb-lg-4">
        <input
          type="text"
          className="form-control rounded-0"
          placeholder="Search"
        />
        <button type="submit">
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
