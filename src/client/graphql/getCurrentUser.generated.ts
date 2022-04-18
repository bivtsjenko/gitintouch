import * as Types from "./types.generated";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetCurrentUserQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetCurrentUserQuery = {
  __typename?: "Query";
  currentUser?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    email: string;
  } | null;
};

export const GetCurrentUserDocument = gql`
  query GetCurrentUser {
    currentUser {
      id
      name
      email
    }
  }
`;

export function useGetCurrentUserQuery(
  options?: Omit<Urql.UseQueryArgs<GetCurrentUserQueryVariables>, "query">
) {
  return Urql.useQuery<GetCurrentUserQuery>({
    query: GetCurrentUserDocument,
    ...options,
  });
}
