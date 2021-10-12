import { useInfiniteQuery } from "react-query";
import { gql } from "@apollo/client";
import client from "../../graphql";

const USERS_QUERY = gql`
  query ($first: Int!, $offset: Int!, $orderBy: String!) {
    users(first: $first, offset: $offset, orderBy: $orderBy) {
      count
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          fullName
          username
          imageUrl
        }
      }
    }
  }
`;

const useUsers = (filters) =>
  useInfiniteQuery(
    ["users", filters],
    async ({ pageParam = 0 }) => {
      const { data } = await client.query({
        query: USERS_QUERY,
        variables: {
          ...filters,
          first: filters.perPage,
          offset: filters.perPage * pageParam,
        },
      });

      return {
        data: data.users.edges.map((edge) => edge.node),
        meta: { count: data.users.count, ...data.users.pageInfo },
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

export default useUsers;
