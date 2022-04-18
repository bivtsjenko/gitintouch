import * as Types from "./types.generated";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RemoveUserFromProjectMutationVariables = Types.Exact<{
  userId: Types.Scalars["String"];
  projectId: Types.Scalars["String"];
}>;

export type RemoveUserFromProjectMutation = {
  __typename?: "Mutation";
  removeUserFromProject?: {
    __typename?: "Project";
    id: string;
    name?: string | null;
    slug?: string | null;
    paidPlan?: Types.PaidPlan | null;
  } | null;
};

export const RemoveUserFromProjectDocument = gql`
  mutation RemoveUserFromProject($userId: String!, $projectId: String!) {
    removeUserFromProject(userId: $userId, projectId: $projectId) {
      id
      name
      slug
      paidPlan
    }
  }
`;

export function useRemoveUserFromProjectMutation() {
  return Urql.useMutation<
    RemoveUserFromProjectMutation,
    RemoveUserFromProjectMutationVariables
  >(RemoveUserFromProjectDocument);
}
