import * as Types from "./types.generated";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type InviteToProjectMutationVariables = Types.Exact<{
  email: Types.Scalars["String"];
  projectId: Types.Scalars["String"];
}>;

export type InviteToProjectMutation = {
  __typename?: "Mutation";
  inviteToProject?: boolean | null;
};

export const InviteToProjectDocument = gql`
  mutation InviteToProject($email: String!, $projectId: String!) {
    inviteToProject(email: $email, projectId: $projectId)
  }
`;

export function useInviteToProjectMutation() {
  return Urql.useMutation<
    InviteToProjectMutation,
    InviteToProjectMutationVariables
  >(InviteToProjectDocument);
}
