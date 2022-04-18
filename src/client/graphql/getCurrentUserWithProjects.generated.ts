import * as Types from "./types.generated";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetCurrentUserWithProjectsQueryVariables = Types.Exact<{
  projectsFirst: Types.Scalars["Int"];
  projectsAfter?: Types.InputMaybe<Types.Scalars["String"]>;
}>;

export type GetCurrentUserWithProjectsQuery = {
  __typename?: "Query";
  currentUser?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    email: string;
    projects?: {
      __typename?: "ProjectConnection";
      pageInfo: {
        __typename?: "PageInfo";
        endCursor?: string | null;
        hasNextPage: boolean;
      };
      edges?: Array<{
        __typename?: "ProjectEdge";
        node?: {
          __typename?: "Project";
          id: string;
          name?: string | null;
          slug?: string | null;
          paidPlan?: Types.PaidPlan | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export const GetCurrentUserWithProjectsDocument = gql`
  query GetCurrentUserWithProjects(
    $projectsFirst: Int!
    $projectsAfter: String
  ) {
    currentUser {
      id
      name
      email
      projects(first: $projectsFirst, after: $projectsAfter) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            name
            slug
            paidPlan
          }
        }
      }
    }
  }
`;

export function useGetCurrentUserWithProjectsQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCurrentUserWithProjectsQueryVariables>,
    "query"
  >
) {
  return Urql.useQuery<GetCurrentUserWithProjectsQuery>({
    query: GetCurrentUserWithProjectsDocument,
    ...options,
  });
}
