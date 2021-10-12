import { useInfiniteQuery } from "react-query";
import { gql } from "@apollo/client";
import client from "../../graphql";

const POSTS_QUERY = gql`
  query (
    $first: Int!
    $offset: Int!
    $orderBy: String!
    $createdAfter: DateTime
  ) {
    posts(
      first: $first
      offset: $offset
      orderBy: $orderBy
      createdAt_Gte: $createdAfter
    ) {
      count
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          title
          imageUrl
          createdSince
          rating
          user {
            fullName
          }
          likes {
            count
          }
          comments {
            count
          }
        }
      }
    }
  }
`;

const usePosts = (filters) =>
  useInfiniteQuery(
    ["posts", filters],
    async ({ pageParam = 0 }) => {
      const { data } = await client.query({
        query: POSTS_QUERY,
        variables: {
          ...filters,
          first: filters.perPage,
          offset: filters.perPage * pageParam,
        },
      });

      return {
        data: data.posts.edges.map((edge) => edge.node),
        meta: { count: data.posts.count, ...data.posts.pageInfo },
      };
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.meta.hasNextPage) {
          return pages.length;
        }
      },
      getPrevPageParam: (lastPage, pages) => {
        if (lastPage.meta.hasPreviousPage) {
          return pages.length;
        }
      },
    }
  );

export default usePosts;
