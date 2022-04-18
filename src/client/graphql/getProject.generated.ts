import * as Types from "./types.generated";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetProjectQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars["String"]>;
  slug?: Types.InputMaybe<Types.Scalars["String"]>;
}>;

export type GetProjectQuery = {
  __typename?: "Query";
  project?: {
    __typename?: "Project";
    id: string;
    name?: string | null;
    slug?: string | null;
    paidPlan?: Types.PaidPlan | null;
  } | null;
};

export const GetProjectDocument = gql`
  query GetProject($id: String, $slug: String) {
    project(id: $id, slug: $slug) {
      id
      name
      slug
      paidPlan
    }
  }
`;

export function useGetProjectQuery(
  options?: Omit<Urql.UseQueryArgs<GetProjectQueryVariables>, "query">
) {
  return Urql.useQuery<GetProjectQuery>({
    query: GetProjectDocument,
    ...options,
  });
}
