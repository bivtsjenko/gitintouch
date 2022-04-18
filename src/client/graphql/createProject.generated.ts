import * as Types from "./types.generated";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type CreateProjectMutationVariables = Types.Exact<{
  name: Types.Scalars["String"];
}>;

export type CreateProjectMutation = {
  __typename?: "Mutation";
  createProject?: {
    __typename?: "Project";
    id: string;
    name?: string | null;
    slug?: string | null;
    paidPlan?: Types.PaidPlan | null;
  } | null;
};

export const CreateProjectDocument = gql`
  mutation CreateProject($name: String!) {
    createProject(name: $name) {
      id
      name
      slug
      paidPlan
    }
  }
`;

export function useCreateProjectMutation() {
  return Urql.useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument);
}
