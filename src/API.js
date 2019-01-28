/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePropertyInput = {|
  propertyId: string,
  name: string,
  averageNoise?: ?number,
  averageLighting?: ?number,
  averageComfort?: ?number,
  averageHealth?: ?number,
  averageProductivity?: ?number,
|};

export type UpdatePropertyInput = {|
  propertyId: string,
  name?: ?string,
  averageNoise?: ?number,
  averageLighting?: ?number,
  averageComfort?: ?number,
  averageHealth?: ?number,
  averageProductivity?: ?number,
|};

export type DeletePropertyInput = {|
  propertyId: string,
|};

export type TablePropertyFilterInput = {|
  propertyId?: ?TableStringFilterInput,
  name?: ?TableStringFilterInput,
  averageNoise?: ?TableFloatFilterInput,
  averageLighting?: ?TableFloatFilterInput,
  averageComfort?: ?TableFloatFilterInput,
  averageHealth?: ?TableFloatFilterInput,
  averageProductivity?: ?TableFloatFilterInput,
|};

export type TableStringFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type TableFloatFilterInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  contains?: ?number,
  notContains?: ?number,
  between?: ?Array< ?number >,
|};

export type CreateConversationMutationVariables = {|
  createdAt?: ?string,
  name: string,
|};

export type CreateConversationMutation = {|
  createConversation: ? {|
    __typename: "Conversation",
    origin: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: string,
      userType: string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    createdAt: ?string,
    ConversationId: string,
    messages: ? {|
      __typename: string,
      messages: ? Array<? {|
        __typename: string,
        content: string,
        conversationId: string,
        createdAt: ?string,
        messageId: string,
        isSent: ?boolean,
        sender: ?string,
      |} >,
      nextToken: ?string,
    |},
    name: ?string,
    sentiment: ?number,
    classification: ?string,
    major: ?number,
    minor: ?number,
    latitude: ?number,
    longitude: ?number,
    PropertyId: ?string,
  |},
|};

export type CreateMessageMutationVariables = {|
  content?: ?string,
  conversationId: string,
  createdAt: string,
  messageId: string,
|};

export type CreateMessageMutation = {|
  createMessage: ? {|
    __typename: "Message",
    author: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: string,
      userType: string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    content: string,
    conversationId: string,
    createdAt: ?string,
    messageId: string,
    isSent: ?boolean,
    recipient: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: string,
      userType: string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    sender: ?string,
  |},
|};

export type CreateUserMutationVariables = {|
  username: string,
  userType: string,
|};

export type CreateUserMutation = {|
  createUser: ? {|
    __typename: "User",
    cognitoId: string,
    userId: string,
    username: string,
    userType: string,
    properties: ? {|
      __typename: string,
      nextToken: ?string,
      userProperties: ? Array<? {|
        __typename: string,
        propertyId: string,
        userId: string,
      |} >,
    |},
    conversations: ? {|
      __typename: string,
      nextToken: ?string,
      userConversations: ? Array<? {|
        __typename: string,
        conversationId: string,
        userId: string,
      |} >,
    |},
  |},
|};

export type CreateUserConversationsMutationVariables = {|
  conversationId: string,
  userId: string,
  propertyId: string,
|};

export type CreateUserConversationsMutation = {|
  createUserConversations: ? {|
    __typename: "UserConversations",
    associated: ? Array<? {|
      __typename: string,
      associated: ? Array<? {|
        __typename: string,
        conversationId: string,
        userId: string,
      |} >,
      conversation: ? {|
        __typename: string,
        createdAt: ?string,
        ConversationId: string,
        name: ?string,
        sentiment: ?number,
        classification: ?string,
        major: ?number,
        minor: ?number,
        latitude: ?number,
        longitude: ?number,
        PropertyId: ?string,
      |},
      conversationId: string,
      user: ? {|
        __typename: string,
        cognitoId: string,
        userId: string,
        username: string,
        userType: string,
      |},
      userId: string,
    |} >,
    conversation: ? {|
      __typename: string,
      origin: ? {|
        __typename: string,
        cognitoId: string,
        userId: string,
        username: string,
        userType: string,
      |},
      createdAt: ?string,
      ConversationId: string,
      messages: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      name: ?string,
      sentiment: ?number,
      classification: ?string,
      major: ?number,
      minor: ?number,
      latitude: ?number,
      longitude: ?number,
      PropertyId: ?string,
    |},
    conversationId: string,
    user: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: string,
      userType: string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    userId: string,
  |},
|};

export type CreatePropertyMutationVariables = {|
  input: CreatePropertyInput,
|};

export type CreatePropertyMutation = {|
  createProperty: ? {|
    __typename: "Property",
    propertyId: string,
    name: string,
    averageNoise: ?number,
    averageLighting: ?number,
    averageComfort: ?number,
    averageHealth: ?number,
    averageProductivity: ?number,
  |},
|};

export type UpdatePropertyMutationVariables = {|
  input: UpdatePropertyInput,
|};

export type UpdatePropertyMutation = {|
  updateProperty: ? {|
    __typename: "Property",
    propertyId: string,
    name: string,
    averageNoise: ?number,
    averageLighting: ?number,
    averageComfort: ?number,
    averageHealth: ?number,
    averageProductivity: ?number,
  |},
|};

export type DeletePropertyMutationVariables = {|
  input: DeletePropertyInput,
|};

export type DeletePropertyMutation = {|
  deleteProperty: ? {|
    __typename: "Property",
    propertyId: string,
    name: string,
    averageNoise: ?number,
    averageLighting: ?number,
    averageComfort: ?number,
    averageHealth: ?number,
    averageProductivity: ?number,
  |},
|};

export type AllMessageQueryVariables = {|
  after?: ?string,
  conversationId: string,
  first?: ?number,
|};

export type AllMessageQuery = {|
  allMessage: ? Array<? {|
    __typename: "Message",
    author: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: string,
      userType: string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    content: string,
    conversationId: string,
    createdAt: ?string,
    messageId: string,
    isSent: ?boolean,
    recipient: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: string,
      userType: string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    sender: ?string,
  |} >,
|};

export type AllMessageConnectionQueryVariables = {|
  after?: ?string,
  conversationId: string,
  first?: ?number,
|};

export type AllMessageConnectionQuery = {|
  allMessageConnection: ? {|
    __typename: "MessageConnection",
    messages: ? Array<? {|
      __typename: string,
      author: ? {|
        __typename: string,
        cognitoId: string,
        userId: string,
        username: string,
        userType: string,
      |},
      content: string,
      conversationId: string,
      createdAt: ?string,
      messageId: string,
      isSent: ?boolean,
      recipient: ? {|
        __typename: string,
        cognitoId: string,
        userId: string,
        username: string,
        userType: string,
      |},
      sender: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type AllMessageFromQueryVariables = {|
  after?: ?string,
  conversationId: string,
  first?: ?number,
  sender: string,
|};

export type AllMessageFromQuery = {|
  allMessageFrom: ? Array<? {|
    __typename: "Message",
    author: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: string,
      userType: string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    content: string,
    conversationId: string,
    createdAt: ?string,
    messageId: string,
    isSent: ?boolean,
    recipient: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: string,
      userType: string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    sender: ?string,
  |} >,
|};

export type AllUserQueryVariables = {|
  after?: ?string,
  first?: ?number,
|};

export type AllUserQuery = {|
  allUser: ? Array<? {|
    __typename: "User",
    cognitoId: string,
    userId: string,
    username: string,
    userType: string,
    properties: ? {|
      __typename: string,
      nextToken: ?string,
      userProperties: ? Array<? {|
        __typename: string,
        propertyId: string,
        userId: string,
      |} >,
    |},
    conversations: ? {|
      __typename: string,
      nextToken: ?string,
      userConversations: ? Array<? {|
        __typename: string,
        conversationId: string,
        userId: string,
      |} >,
    |},
  |} >,
|};

export type MeQuery = {|
  me: ? {|
    __typename: "User",
    cognitoId: string,
    userId: string,
    username: string,
    userType: string,
    properties: ? {|
      __typename: string,
      nextToken: ?string,
      userProperties: ? Array<? {|
        __typename: string,
        propertyId: string,
        userId: string,
      |} >,
    |},
    conversations: ? {|
      __typename: string,
      nextToken: ?string,
      userConversations: ? Array<? {|
        __typename: string,
        conversationId: string,
        userId: string,
      |} >,
    |},
  |},
|};

export type AllPropertyQueryVariables = {|
  userId: string,
  userType: string,
|};

export type AllPropertyQuery = {|
  allProperty: ? Array<? {|
    __typename: "Property",
    propertyId: string,
    name: string,
    averageNoise: ?number,
    averageLighting: ?number,
    averageComfort: ?number,
    averageHealth: ?number,
    averageProductivity: ?number,
  |} >,
|};

export type GetPropertyQueryVariables = {|
  propertyId: string,
|};

export type GetPropertyQuery = {|
  getProperty: ? {|
    __typename: "Property",
    propertyId: string,
    name: string,
    averageNoise: ?number,
    averageLighting: ?number,
    averageComfort: ?number,
    averageHealth: ?number,
    averageProductivity: ?number,
  |},
|};

export type ListPropertiesQueryVariables = {|
  filter?: ?TablePropertyFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListPropertiesQuery = {|
  listProperties: ? {|
    __typename: "PropertyConnection",
    items: ? Array<? {|
      __typename: string,
      propertyId: string,
      name: string,
      averageNoise: ?number,
      averageLighting: ?number,
      averageComfort: ?number,
      averageHealth: ?number,
      averageProductivity: ?number,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreatePropertySubscriptionVariables = {|
  propertyId?: ?string,
  name?: ?string,
  averageNoise?: ?number,
  averageLighting?: ?number,
  averageComfort?: ?number,
|};

export type OnCreatePropertySubscription = {|
  onCreateProperty: ? {|
    __typename: "Property",
    propertyId: string,
    name: string,
    averageNoise: ?number,
    averageLighting: ?number,
    averageComfort: ?number,
    averageHealth: ?number,
    averageProductivity: ?number,
  |},
|};

export type OnUpdatePropertySubscriptionVariables = {|
  propertyId?: ?string,
  name?: ?string,
  averageNoise?: ?number,
  averageLighting?: ?number,
  averageComfort?: ?number,
|};

export type OnUpdatePropertySubscription = {|
  onUpdateProperty: ? {|
    __typename: "Property",
    propertyId: string,
    name: string,
    averageNoise: ?number,
    averageLighting: ?number,
    averageComfort: ?number,
    averageHealth: ?number,
    averageProductivity: ?number,
  |},
|};

export type OnDeletePropertySubscriptionVariables = {|
  propertyId?: ?string,
  name?: ?string,
  averageNoise?: ?number,
  averageLighting?: ?number,
  averageComfort?: ?number,
|};

export type OnDeletePropertySubscription = {|
  onDeleteProperty: ? {|
    __typename: "Property",
    propertyId: string,
    name: string,
    averageNoise: ?number,
    averageLighting: ?number,
    averageComfort: ?number,
    averageHealth: ?number,
    averageProductivity: ?number,
  |},
|};