import React from 'react';
import { gql, useQuery } from '@apollo/client';

import PostItem from './PostItem';
import Loading from '../../../../Loading';

const POPULAR_POSTS_QUERY = gql`
  query PopularPosts($userId: ID!, $postId: String!) {
    posts(user_Id: $userId, last: 3, before: $postId) {
      edges {
        node {
          id
          title
          imageUrl
          createdSince
        }
      }
    }
  }
`;

export default function PostsList({ post }) {
  const { loading, data } = useQuery(POPULAR_POSTS_QUERY, {
    variables: {
      userId: post.user.id,
      postId: post.id,
    },
  });

  if (loading) return <Loading />;

  const { posts } = data;

  return (
    <>
      <div>
        <h5 className="py-2 py-lg-3 mt-3 mt-lg-5  h5">Popular Posts</h5>
        {posts.edges
          .map((edge) => edge.node)
          .map((_post, index) => (
            <PostItem key={index.toString()} post={_post} />
          ))}
      </div>
    </>
  );
}
