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

export type CreateConversationInput = {|
  createdAt: number,
  ConversationId: string,
  name?: ?string,
  sentiment?: ?number,
  classification?: ?string,
  major?: ?number,
  minor?: ?number,
  latitude?: ?number,
  longitude?: ?number,
  PropertyId: string,
|};

export type UpdateConversationInput = {|
  createdAt?: ?number,
  ConversationId: string,
  name?: ?string,
  sentiment?: ?number,
  classification?: ?string,
  major?: ?number,
  minor?: ?number,
  latitude?: ?number,
  longitude?: ?number,
  PropertyId?: ?string,
|};

export type DeleteConversationInput = {|
  createdAt: number,
  ConversationId: string,
|};

export type CreateUserInput = {|
  cognitoId: string,
  userId: string,
  username?: ?string,
  userType?: ?string,
|};

export type UpdateUserInput = {|
  cognitoId?: ?string,
  userId: string,
  username?: ?string,
  userType?: ?string,
|};

export type DeleteUserInput = {|
  userId: string,
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

export type TableConversationFilterInput = {|
  createdAt?: ?TableStringFilterInput,
  ConversationId?: ?TableIDFilterInput,
  name?: ?TableStringFilterInput,
  sentiment?: ?TableFloatFilterInput,
  classification?: ?TableStringFilterInput,
  major?: ?TableIntFilterInput,
  minor?: ?TableIntFilterInput,
  latitude?: ?TableFloatFilterInput,
  longitude?: ?TableFloatFilterInput,
  PropertyId?: ?TableStringFilterInput,
|};

export type TableIDFilterInput = {|
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

export type TableIntFilterInput = {|
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

export type TableUserFilterInput = {|
  cognitoId?: ?TableIDFilterInput,
  userId?: ?TableIDFilterInput,
  username?: ?TableStringFilterInput,
  userType?: ?TableStringFilterInput,
|};

export type CreateMessageMutationVariables = {|
  content?: ?string,
  conversationId: string,
  createdAt: number,
  messageId: string,
|};

export type CreateMessageMutation = {|
  createMessage: ? {|
    __typename: "Message",
    author: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: ?string,
      userType: ?string,
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
    createdAt: number,
    messageId: string,
    isSent: ?boolean,
    recipient: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: ?string,
      userType: ?string,
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
        createdAt: number,
        ConversationId: string,
        name: ?string,
        sentiment: ?number,
        classification: ?string,
        major: ?number,
        minor: ?number,
        latitude: ?number,
        longitude: ?number,
        PropertyId: string,
      |},
      conversationId: string,
      user: ? {|
        __typename: string,
        cognitoId: string,
        userId: string,
        username: ?string,
        userType: ?string,
      |},
      userId: string,
    |} >,
    conversation: ? {|
      __typename: string,
      origin: ? {|
        __typename: string,
        cognitoId: string,
        userId: string,
        username: ?string,
        userType: ?string,
      |},
      createdAt: number,
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
      PropertyId: string,
    |},
    conversationId: string,
    user: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: ?string,
      userType: ?string,
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

export type CreateConversationMutationVariables = {|
  input: CreateConversationInput,
|};

export type CreateConversationMutation = {|
  createConversation: ? {|
    __typename: "Conversation",
    origin: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: ?string,
      userType: ?string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    createdAt: number,
    ConversationId: string,
    messages: ? {|
      __typename: string,
      messages: ? Array<? {|
        __typename: string,
        content: string,
        conversationId: string,
        createdAt: number,
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
    PropertyId: string,
  |},
|};

export type UpdateConversationMutationVariables = {|
  input: UpdateConversationInput,
|};

export type UpdateConversationMutation = {|
  updateConversation: ? {|
    __typename: "Conversation",
    origin: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: ?string,
      userType: ?string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    createdAt: number,
    ConversationId: string,
    messages: ? {|
      __typename: string,
      messages: ? Array<? {|
        __typename: string,
        content: string,
        conversationId: string,
        createdAt: number,
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
    PropertyId: string,
  |},
|};

export type DeleteConversationMutationVariables = {|
  input: DeleteConversationInput,
|};

export type DeleteConversationMutation = {|
  deleteConversation: ? {|
    __typename: "Conversation",
    origin: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: ?string,
      userType: ?string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    createdAt: number,
    ConversationId: string,
    messages: ? {|
      __typename: string,
      messages: ? Array<? {|
        __typename: string,
        content: string,
        conversationId: string,
        createdAt: number,
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
    PropertyId: string,
  |},
|};

export type CreateUserMutationVariables = {|
  input: CreateUserInput,
|};

export type CreateUserMutation = {|
  createUser: ? {|
    __typename: "User",
    cognitoId: string,
    userId: string,
    username: ?string,
    userType: ?string,
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

export type UpdateUserMutationVariables = {|
  input: UpdateUserInput,
|};

export type UpdateUserMutation = {|
  updateUser: ? {|
    __typename: "User",
    cognitoId: string,
    userId: string,
    username: ?string,
    userType: ?string,
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

export type DeleteUserMutationVariables = {|
  input: DeleteUserInput,
|};

export type DeleteUserMutation = {|
  deleteUser: ? {|
    __typename: "User",
    cognitoId: string,
    userId: string,
    username: ?string,
    userType: ?string,
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
      username: ?string,
      userType: ?string,
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
    createdAt: number,
    messageId: string,
    isSent: ?boolean,
    recipient: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: ?string,
      userType: ?string,
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
        username: ?string,
        userType: ?string,
      |},
      content: string,
      conversationId: string,
      createdAt: number,
      messageId: string,
      isSent: ?boolean,
      recipient: ? {|
        __typename: string,
        cognitoId: string,
        userId: string,
        username: ?string,
        userType: ?string,
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
      username: ?string,
      userType: ?string,
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
    createdAt: number,
    messageId: string,
    isSent: ?boolean,
    recipient: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: ?string,
      userType: ?string,
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
    username: ?string,
    userType: ?string,
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
    username: ?string,
    userType: ?string,
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

export type GetConversationQueryVariables = {|
  ConversationId: string,
  createdAt: number,
|};

export type GetConversationQuery = {|
  getConversation: ? {|
    __typename: "Conversation",
    origin: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: ?string,
      userType: ?string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    createdAt: number,
    ConversationId: string,
    messages: ? {|
      __typename: string,
      messages: ? Array<? {|
        __typename: string,
        content: string,
        conversationId: string,
        createdAt: number,
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
    PropertyId: string,
  |},
|};

export type ListConversationsQueryVariables = {|
  filter?: ?TableConversationFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListConversationsQuery = {|
  listConversations: ? {|
    __typename: "ConversationConnection",
    items: ? Array<? {|
      __typename: string,
      origin: ? {|
        __typename: string,
        cognitoId: string,
        userId: string,
        username: ?string,
        userType: ?string,
      |},
      createdAt: number,
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
      PropertyId: string,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetUserQueryVariables = {|
  userId: string,
|};

export type GetUserQuery = {|
  getUser: ? {|
    __typename: "User",
    cognitoId: string,
    userId: string,
    username: ?string,
    userType: ?string,
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

export type ListUsersQueryVariables = {|
  filter?: ?TableUserFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListUsersQuery = {|
  listUsers: ? {|
    __typename: "UserConnection",
    items: ? Array<? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: ?string,
      userType: ?string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreatePropertySubscriptionVariables = {|
  propertyId: string,
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
  propertyId: string,
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
  propertyId: string,
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

export type OnCreateConversationSubscriptionVariables = {|
  createdAt?: ?number,
  ConversationId: string,
  name?: ?string,
  sentiment?: ?number,
  classification?: ?string,
|};

export type OnCreateConversationSubscription = {|
  onCreateConversation: ? {|
    __typename: "Conversation",
    origin: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: ?string,
      userType: ?string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    createdAt: number,
    ConversationId: string,
    messages: ? {|
      __typename: string,
      messages: ? Array<? {|
        __typename: string,
        content: string,
        conversationId: string,
        createdAt: number,
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
    PropertyId: string,
  |},
|};

export type OnUpdateConversationSubscriptionVariables = {|
  createdAt?: ?number,
  ConversationId: string,
  name?: ?string,
  sentiment?: ?number,
  classification?: ?string,
|};

export type OnUpdateConversationSubscription = {|
  onUpdateConversation: ? {|
    __typename: "Conversation",
    origin: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: ?string,
      userType: ?string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    createdAt: number,
    ConversationId: string,
    messages: ? {|
      __typename: string,
      messages: ? Array<? {|
        __typename: string,
        content: string,
        conversationId: string,
        createdAt: number,
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
    PropertyId: string,
  |},
|};

export type OnDeleteConversationSubscriptionVariables = {|
  createdAt?: ?number,
  ConversationId: string,
  name?: ?string,
  sentiment?: ?number,
  classification?: ?string,
|};

export type OnDeleteConversationSubscription = {|
  onDeleteConversation: ? {|
    __typename: "Conversation",
    origin: ? {|
      __typename: string,
      cognitoId: string,
      userId: string,
      username: ?string,
      userType: ?string,
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    createdAt: number,
    ConversationId: string,
    messages: ? {|
      __typename: string,
      messages: ? Array<? {|
        __typename: string,
        content: string,
        conversationId: string,
        createdAt: number,
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
    PropertyId: string,
  |},
|};

export type OnCreateUserSubscriptionVariables = {|
  cognitoId?: ?string,
  userId?: ?string,
  username?: ?string,
  userType?: ?string,
|};

export type OnCreateUserSubscription = {|
  onCreateUser: ? {|
    __typename: "User",
    cognitoId: string,
    userId: string,
    username: ?string,
    userType: ?string,
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

export type OnUpdateUserSubscriptionVariables = {|
  cognitoId?: ?string,
  userId?: ?string,
  username?: ?string,
  userType?: ?string,
|};

export type OnUpdateUserSubscription = {|
  onUpdateUser: ? {|
    __typename: "User",
    cognitoId: string,
    userId: string,
    username: ?string,
    userType: ?string,
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

export type OnDeleteUserSubscriptionVariables = {|
  cognitoId?: ?string,
  userId?: ?string,
  username?: ?string,
  userType?: ?string,
|};

export type OnDeleteUserSubscription = {|
  onDeleteUser: ? {|
    __typename: "User",
    cognitoId: string,
    userId: string,
    username: ?string,
    userType: ?string,
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