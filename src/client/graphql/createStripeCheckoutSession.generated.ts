import * as Types from "./types.generated";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type CreateStripeCheckoutSessionMutationVariables = Types.Exact<{
  plan: Types.PaidPlan;
  projectId: Types.Scalars["String"];
}>;

export type CreateStripeCheckoutSessionMutation = {
  __typename?: "Mutation";
  createStripeCheckoutSession?: string | null;
};

export const CreateStripeCheckoutSessionDocument = gql`
  mutation CreateStripeCheckoutSession($plan: PaidPlan!, $projectId: String!) {
    createStripeCheckoutSession(plan: $plan, projectId: $projectId)
  }
`;

export function useCreateStripeCheckoutSessionMutation() {
  return Urql.useMutation<
    CreateStripeCheckoutSessionMutation,
    CreateStripeCheckoutSessionMutationVariables
  >(CreateStripeCheckoutSessionDocument);
}
