import {
  Resolver as GraphCacheResolver,
  UpdateResolver as GraphCacheUpdateResolver,
  OptimisticMutationResolver as GraphCacheOptimisticMutationResolver,
  StorageAdapter as GraphCacheStorageAdapter,
} from "@urql/exchange-graphcache";
import { IntrospectionData } from "@urql/exchange-graphcache/dist/types/ast";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  createProject?: Maybe<Project>;
  createStripeCheckoutBillingPortalUrl?: Maybe<Scalars["String"]>;
  createStripeCheckoutSession?: Maybe<Scalars["String"]>;
  inviteToProject?: Maybe<Scalars["Boolean"]>;
  removeUserFromProject?: Maybe<Project>;
  updateUser?: Maybe<User>;
};

export type MutationCreateProjectArgs = {
  name: Scalars["String"];
  slug?: InputMaybe<Scalars["String"]>;
};

export type MutationCreateStripeCheckoutBillingPortalUrlArgs = {
  projectId: Scalars["String"];
};

export type MutationCreateStripeCheckoutSessionArgs = {
  plan: PaidPlan;
  projectId: Scalars["String"];
};

export type MutationInviteToProjectArgs = {
  email: Scalars["String"];
  projectId: Scalars["String"];
};

export type MutationRemoveUserFromProjectArgs = {
  projectId: Scalars["String"];
  userId: Scalars["String"];
};

export type MutationUpdateUserArgs = {
  name?: InputMaybe<Scalars["String"]>;
  userId: Scalars["String"];
};

/** PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: "PageInfo";
  /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
  endCursor?: Maybe<Scalars["String"]>;
  /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars["Boolean"];
  /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
  hasPreviousPage: Scalars["Boolean"];
  /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
  startCursor?: Maybe<Scalars["String"]>;
};

export enum PaidPlan {
  Pro = "pro",
}

export type Project = {
  __typename?: "Project";
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  paidPlan?: Maybe<PaidPlan>;
  slug?: Maybe<Scalars["String"]>;
  users?: Maybe<UserConnection>;
};

export type ProjectUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first: Scalars["Int"];
};

export type ProjectConnection = {
  __typename?: "ProjectConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<ProjectEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type ProjectEdge = {
  __typename?: "ProjectEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Project>;
};

export type Query = {
  __typename?: "Query";
  currentUser?: Maybe<User>;
  project?: Maybe<Project>;
};

export type QueryProjectArgs = {
  id?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  projects?: Maybe<ProjectConnection>;
};

export type UserProjectsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  first: Scalars["Int"];
};

export type UserConnection = {
  __typename?: "UserConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: "UserEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<User>;
};

export type WithTypename<T extends { __typename?: any }> = {
  [K in Exclude<keyof T, "__typename">]?: T[K];
} & { __typename: NonNullable<T["__typename"]> };

export type GraphCacheKeysConfig = {
  PageInfo?: (data: WithTypename<PageInfo>) => null | string;
  Project?: (data: WithTypename<Project>) => null | string;
  ProjectConnection?: (data: WithTypename<ProjectConnection>) => null | string;
  ProjectEdge?: (data: WithTypename<ProjectEdge>) => null | string;
  User?: (data: WithTypename<User>) => null | string;
  UserConnection?: (data: WithTypename<UserConnection>) => null | string;
  UserEdge?: (data: WithTypename<UserEdge>) => null | string;
};

export type GraphCacheResolvers = {
  Query?: {
    currentUser?: GraphCacheResolver<
      WithTypename<Query>,
      Record<string, never>,
      WithTypename<User> | string
    >;
    project?: GraphCacheResolver<
      WithTypename<Query>,
      QueryProjectArgs,
      WithTypename<Project> | string
    >;
  };
  PageInfo?: {
    endCursor?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    hasNextPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    hasPreviousPage?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars["Boolean"] | string
    >;
    startCursor?: GraphCacheResolver<
      WithTypename<PageInfo>,
      Record<string, never>,
      Scalars["String"] | string
    >;
  };
  Project?: {
    id?: GraphCacheResolver<
      WithTypename<Project>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<Project>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    paidPlan?: GraphCacheResolver<
      WithTypename<Project>,
      Record<string, never>,
      PaidPlan | string
    >;
    slug?: GraphCacheResolver<
      WithTypename<Project>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    users?: GraphCacheResolver<
      WithTypename<Project>,
      ProjectUsersArgs,
      WithTypename<UserConnection> | string
    >;
  };
  ProjectConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<ProjectConnection>,
      Record<string, never>,
      Array<WithTypename<ProjectEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<ProjectConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  ProjectEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<ProjectEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<ProjectEdge>,
      Record<string, never>,
      WithTypename<Project> | string
    >;
  };
  User?: {
    email?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    id?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    name?: GraphCacheResolver<
      WithTypename<User>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    projects?: GraphCacheResolver<
      WithTypename<User>,
      UserProjectsArgs,
      WithTypename<ProjectConnection> | string
    >;
  };
  UserConnection?: {
    edges?: GraphCacheResolver<
      WithTypename<UserConnection>,
      Record<string, never>,
      Array<WithTypename<UserEdge> | string>
    >;
    pageInfo?: GraphCacheResolver<
      WithTypename<UserConnection>,
      Record<string, never>,
      WithTypename<PageInfo> | string
    >;
  };
  UserEdge?: {
    cursor?: GraphCacheResolver<
      WithTypename<UserEdge>,
      Record<string, never>,
      Scalars["String"] | string
    >;
    node?: GraphCacheResolver<
      WithTypename<UserEdge>,
      Record<string, never>,
      WithTypename<User> | string
    >;
  };
};

export type GraphCacheOptimisticUpdaters = {
  createProject?: GraphCacheOptimisticMutationResolver<
    MutationCreateProjectArgs,
    Maybe<WithTypename<Project>>
  >;
  createStripeCheckoutBillingPortalUrl?: GraphCacheOptimisticMutationResolver<
    MutationCreateStripeCheckoutBillingPortalUrlArgs,
    Maybe<Scalars["String"]>
  >;
  createStripeCheckoutSession?: GraphCacheOptimisticMutationResolver<
    MutationCreateStripeCheckoutSessionArgs,
    Maybe<Scalars["String"]>
  >;
  inviteToProject?: GraphCacheOptimisticMutationResolver<
    MutationInviteToProjectArgs,
    Maybe<Scalars["Boolean"]>
  >;
  removeUserFromProject?: GraphCacheOptimisticMutationResolver<
    MutationRemoveUserFromProjectArgs,
    Maybe<WithTypename<Project>>
  >;
  updateUser?: GraphCacheOptimisticMutationResolver<
    MutationUpdateUserArgs,
    Maybe<WithTypename<User>>
  >;
};

export type GraphCacheUpdaters = {
  Mutation?: {
    createProject?: GraphCacheUpdateResolver<
      { createProject: Maybe<WithTypename<Project>> },
      MutationCreateProjectArgs
    >;
    createStripeCheckoutBillingPortalUrl?: GraphCacheUpdateResolver<
      { createStripeCheckoutBillingPortalUrl: Maybe<Scalars["String"]> },
      MutationCreateStripeCheckoutBillingPortalUrlArgs
    >;
    createStripeCheckoutSession?: GraphCacheUpdateResolver<
      { createStripeCheckoutSession: Maybe<Scalars["String"]> },
      MutationCreateStripeCheckoutSessionArgs
    >;
    inviteToProject?: GraphCacheUpdateResolver<
      { inviteToProject: Maybe<Scalars["Boolean"]> },
      MutationInviteToProjectArgs
    >;
    removeUserFromProject?: GraphCacheUpdateResolver<
      { removeUserFromProject: Maybe<WithTypename<Project>> },
      MutationRemoveUserFromProjectArgs
    >;
    updateUser?: GraphCacheUpdateResolver<
      { updateUser: Maybe<WithTypename<User>> },
      MutationUpdateUserArgs
    >;
  };
  Subscription?: {};
};

export type GraphCacheConfig = {
  schema?: IntrospectionData;
  updates?: GraphCacheUpdaters;
  keys?: GraphCacheKeysConfig;
  optimistic?: GraphCacheOptimisticUpdaters;
  resolvers?: GraphCacheResolvers;
  storage?: GraphCacheStorageAdapter;
};
