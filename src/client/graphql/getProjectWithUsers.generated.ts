import * as Types from "./types.generated";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetProjectWithUsersQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars["String"]>;
  slug?: Types.InputMaybe<Types.Scalars["String"]>;
  usersFirst: Types.Scalars["Int"];
  usersAfter?: Types.InputMaybe<Types.Scalars["String"]>;
}>;

export type GetProjectWithUsersQuery = {
  __typename?: "Query";
  project?: {
    __typename?: "Project";
    id: string;
    name?: string | null;
    slug?: string | null;
    paidPlan?: Types.PaidPlan | null;
    users?: {
      __typename?: "UserConnection";
      pageInfo: {
        __typename?: "PageInfo";
        endCursor?: string | null;
        hasNextPage: boolean;
      };
      edges?: Array<{
        __typename?: "UserEdge";
        node?: {
          __typename?: "User";
          id: string;
          name?: string | null;
          email: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export const GetProjectWithUsersDocument = gql`
  query GetProjectWithUsers(
    $id: String
    $slug: String
    $usersFirst: Int!
    $usersAfter: String
  ) {
    project(id: $id, slug: $slug) {
      id
      name
      slug
      paidPlan
      users(first: $usersFirst, after: $usersAfter) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            name
            email
          }
        }
      }
    }
  }
`;

export function useGetProjectWithUsersQuery(
  options: Omit<Urql.UseQueryArgs<GetProjectWithUsersQueryVariables>, "query">
) {
  return Urql.useQuery<GetProjectWithUsersQuery>({
    query: GetProjectWithUsersDocument,
    ...options,
  });
}
