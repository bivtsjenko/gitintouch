import * as Types from "./types.generated";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type CreateStripeCheckoutBillingPortalUrlMutationVariables =
  Types.Exact<{
    projectId: Types.Scalars["String"];
  }>;

export type CreateStripeCheckoutBillingPortalUrlMutation = {
  __typename?: "Mutation";
  createStripeCheckoutBillingPortalUrl?: string | null;
};

export const CreateStripeCheckoutBillingPortalUrlDocument = gql`
  mutation CreateStripeCheckoutBillingPortalUrl($projectId: String!) {
    createStripeCheckoutBillingPortalUrl(projectId: $projectId)
  }
`;

export function useCreateStripeCheckoutBillingPortalUrlMutation() {
  return Urql.useMutation<
    CreateStripeCheckoutBillingPortalUrlMutation,
    CreateStripeCheckoutBillingPortalUrlMutationVariables
  >(CreateStripeCheckoutBillingPortalUrlDocument);
}
