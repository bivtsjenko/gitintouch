import * as Types from "./types.generated";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type UpdateUserMutationVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars["String"]>;
  userId: Types.Scalars["String"];
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser?: {
    __typename?: "User";
    id: string;
    name?: string | null;
    email: string;
  } | null;
};

export const UpdateUserDocument = gql`
  mutation UpdateUser($name: String, $userId: String!) {
    updateUser(name: $name, userId: $userId) {
      id
      name
      email
    }
  }
`;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument
  );
}
