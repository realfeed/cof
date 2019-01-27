/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateConversationMutationVariables = {|
  createdAt?: ?string,
  name: string,
|};

export type CreateConversationMutation = {|
  // Create a Conversation. Use some of the cooked in template functions for UUID and DateTime.
  createConversation: ? {|
    __typename: "Conversation",
    // The originating author of the conversation.
    origin: ? {|
      __typename: string,
      // A unique identifier for the user.
      cognitoId: string,
      // Generated id for a user. read-only
      userId: string,
      // The username
      username: string,
      // The type of user - either app or admin
      userType: string,
      // An admin user's registered properties
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      // An app user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    // The Conversation's timestamp.
    createdAt: ?string,
    // A unique identifier for the Conversation.
    ConversationId: string,
    // The Conversation's messages.
    messages: ? {|
      __typename: string,
      messages: ? Array<? {|
        __typename: string,
        // The message content.
        content: string,
        // The id of the Conversation this message belongs to. This is the table primary key.
        conversationId: string,
        // The message timestamp. This is also the table sort key.
        createdAt: ?string,
        // Generated id for a message -- read-only
        messageId: string,
        // Flag denoting if this message has been accepted by the server or not.
        isSent: ?boolean,
        sender: ?string,
      |} >,
      nextToken: ?string,
    |},
    // The Conversation's name = initiating feedback.
    name: ?string,
    // The sentiment score for the initial feedback provided.
    sentiment: ?number,
    // The topic classification for the initial feedback provided.
    classification: ?string,
    // The iBeacon "major" and "minor" attributes for strongest signal to the initial feedback.
    major: ?number,
    minor: ?number,
    // Latitude of iBeacon for strongest signal to the initial feedback.
    latitude: ?number,
    // Longitude of iBeacon for strongest signal to the initial feedback.
    longitude: ?number,
    // Property address to the initial feedback.
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
  // Create a message in a Conversation.
  createMessage: ? {|
    __typename: "Message",
    // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
    author: ? {|
      __typename: string,
      // A unique identifier for the user.
      cognitoId: string,
      // Generated id for a user. read-only
      userId: string,
      // The username
      username: string,
      // The type of user - either app or admin
      userType: string,
      // An admin user's registered properties
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      // An app user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    // The message content.
    content: string,
    // The id of the Conversation this message belongs to. This is the table primary key.
    conversationId: string,
    // The message timestamp. This is also the table sort key.
    createdAt: ?string,
    // Generated id for a message -- read-only
    messageId: string,
    // Flag denoting if this message has been accepted by the server or not.
    isSent: ?boolean,
    recipient: ? {|
      __typename: string,
      // A unique identifier for the user.
      cognitoId: string,
      // Generated id for a user. read-only
      userId: string,
      // The username
      username: string,
      // The type of user - either app or admin
      userType: string,
      // An admin user's registered properties
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      // An app user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
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
  // Put a single value of type 'User'. If an item does not exist with the same key the item will be created. If there exists an item at that key already, it will be updated.
  createUser: ? {|
    __typename: "User",
    // A unique identifier for the user.
    cognitoId: string,
    // Generated id for a user. read-only
    userId: string,
    // The username
    username: string,
    // The type of user - either app or admin
    userType: string,
    // An admin user's registered properties
    properties: ? {|
      __typename: string,
      nextToken: ?string,
      userProperties: ? Array<? {|
        __typename: string,
        propertyId: string,
        userId: string,
      |} >,
    |},
    // An app user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
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
  // Put a single value of type 'UserConversations'. If an item does not exist with the same key the item will be created. If there exists an item at that key already, it will be updated.
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
        // The Conversation's timestamp.
        createdAt: ?string,
        // A unique identifier for the Conversation.
        ConversationId: string,
        // The Conversation's name = initiating feedback.
        name: ?string,
        // The sentiment score for the initial feedback provided.
        sentiment: ?number,
        // The topic classification for the initial feedback provided.
        classification: ?string,
        // The iBeacon "major" and "minor" attributes for strongest signal to the initial feedback.
        major: ?number,
        minor: ?number,
        // Latitude of iBeacon for strongest signal to the initial feedback.
        latitude: ?number,
        // Longitude of iBeacon for strongest signal to the initial feedback.
        longitude: ?number,
        // Property address to the initial feedback.
        PropertyId: ?string,
      |},
      conversationId: string,
      user: ? {|
        __typename: string,
        // A unique identifier for the user.
        cognitoId: string,
        // Generated id for a user. read-only
        userId: string,
        // The username
        username: string,
        // The type of user - either app or admin
        userType: string,
      |},
      userId: string,
    |} >,
    conversation: ? {|
      __typename: string,
      // The originating author of the conversation.
      origin: ? {|
        __typename: string,
        // A unique identifier for the user.
        cognitoId: string,
        // Generated id for a user. read-only
        userId: string,
        // The username
        username: string,
        // The type of user - either app or admin
        userType: string,
      |},
      // The Conversation's timestamp.
      createdAt: ?string,
      // A unique identifier for the Conversation.
      ConversationId: string,
      // The Conversation's messages.
      messages: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      // The Conversation's name = initiating feedback.
      name: ?string,
      // The sentiment score for the initial feedback provided.
      sentiment: ?number,
      // The topic classification for the initial feedback provided.
      classification: ?string,
      // The iBeacon "major" and "minor" attributes for strongest signal to the initial feedback.
      major: ?number,
      minor: ?number,
      // Latitude of iBeacon for strongest signal to the initial feedback.
      latitude: ?number,
      // Longitude of iBeacon for strongest signal to the initial feedback.
      longitude: ?number,
      // Property address to the initial feedback.
      PropertyId: ?string,
    |},
    conversationId: string,
    user: ? {|
      __typename: string,
      // A unique identifier for the user.
      cognitoId: string,
      // Generated id for a user. read-only
      userId: string,
      // The username
      username: string,
      // The type of user - either app or admin
      userType: string,
      // An admin user's registered properties
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      // An app user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    userId: string,
  |},
|};

export type CreatePropertyMutationVariables = {|
  propertyId: string,
  name: string,
|};

export type CreatePropertyMutation = {|
  // create a property
  createProperty: ? {|
    __typename: "Property",
    // The unique identifier for the Property. This will be the geoAddr
    propertyId: string,
    // Human-readable name of the property
    name: string,
    // Summary performance indicators.
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
  // Scan through all values of type 'Message'. Use the 'after' and 'before' arguments with the 'nextToken' returned by the 'MessageConnection' result to fetch pages.
  allMessage: ? Array<? {|
    __typename: "Message",
    // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
    author: ? {|
      __typename: string,
      // A unique identifier for the user.
      cognitoId: string,
      // Generated id for a user. read-only
      userId: string,
      // The username
      username: string,
      // The type of user - either app or admin
      userType: string,
      // An admin user's registered properties
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      // An app user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    // The message content.
    content: string,
    // The id of the Conversation this message belongs to. This is the table primary key.
    conversationId: string,
    // The message timestamp. This is also the table sort key.
    createdAt: ?string,
    // Generated id for a message -- read-only
    messageId: string,
    // Flag denoting if this message has been accepted by the server or not.
    isSent: ?boolean,
    recipient: ? {|
      __typename: string,
      // A unique identifier for the user.
      cognitoId: string,
      // Generated id for a user. read-only
      userId: string,
      // The username
      username: string,
      // The type of user - either app or admin
      userType: string,
      // An admin user's registered properties
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      // An app user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
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
  // Scan through all values of type 'MessageConnection'. Use the 'after' and 'before' arguments with the 'nextToken' returned by the 'MessageConnectionConnection' result to fetch pages.
  allMessageConnection: ? {|
    __typename: "MessageConnection",
    messages: ? Array<? {|
      __typename: string,
      // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
      author: ? {|
        __typename: string,
        // A unique identifier for the user.
        cognitoId: string,
        // Generated id for a user. read-only
        userId: string,
        // The username
        username: string,
        // The type of user - either app or admin
        userType: string,
      |},
      // The message content.
      content: string,
      // The id of the Conversation this message belongs to. This is the table primary key.
      conversationId: string,
      // The message timestamp. This is also the table sort key.
      createdAt: ?string,
      // Generated id for a message -- read-only
      messageId: string,
      // Flag denoting if this message has been accepted by the server or not.
      isSent: ?boolean,
      recipient: ? {|
        __typename: string,
        // A unique identifier for the user.
        cognitoId: string,
        // Generated id for a user. read-only
        userId: string,
        // The username
        username: string,
        // The type of user - either app or admin
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
    // The author object. Note: `authorId` is only available because we list it in `extraAttributes` in `Conversation.messages`
    author: ? {|
      __typename: string,
      // A unique identifier for the user.
      cognitoId: string,
      // Generated id for a user. read-only
      userId: string,
      // The username
      username: string,
      // The type of user - either app or admin
      userType: string,
      // An admin user's registered properties
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      // An app user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
      conversations: ? {|
        __typename: string,
        nextToken: ?string,
      |},
    |},
    // The message content.
    content: string,
    // The id of the Conversation this message belongs to. This is the table primary key.
    conversationId: string,
    // The message timestamp. This is also the table sort key.
    createdAt: ?string,
    // Generated id for a message -- read-only
    messageId: string,
    // Flag denoting if this message has been accepted by the server or not.
    isSent: ?boolean,
    recipient: ? {|
      __typename: string,
      // A unique identifier for the user.
      cognitoId: string,
      // Generated id for a user. read-only
      userId: string,
      // The username
      username: string,
      // The type of user - either app or admin
      userType: string,
      // An admin user's registered properties
      properties: ? {|
        __typename: string,
        nextToken: ?string,
      |},
      // An app user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
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
  // Scan through all values of type 'User'. Use the 'after' and 'before' arguments with the 'nextToken' returned by the 'UserConnection' result to fetch pages.
  allUser: ? Array<? {|
    __typename: "User",
    // A unique identifier for the user.
    cognitoId: string,
    // Generated id for a user. read-only
    userId: string,
    // The username
    username: string,
    // The type of user - either app or admin
    userType: string,
    // An admin user's registered properties
    properties: ? {|
      __typename: string,
      nextToken: ?string,
      userProperties: ? Array<? {|
        __typename: string,
        propertyId: string,
        userId: string,
      |} >,
    |},
    // An app user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
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
  // Get my user.
  me: ? {|
    __typename: "User",
    // A unique identifier for the user.
    cognitoId: string,
    // Generated id for a user. read-only
    userId: string,
    // The username
    username: string,
    // The type of user - either app or admin
    userType: string,
    // An admin user's registered properties
    properties: ? {|
      __typename: string,
      nextToken: ?string,
      userProperties: ? Array<? {|
        __typename: string,
        propertyId: string,
        userId: string,
      |} >,
    |},
    // An app user's enrolled Conversations. This is an interesting case. This is an interesting pagination case.
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
    // The unique identifier for the Property. This will be the geoAddr
    propertyId: string,
    // Human-readable name of the property
    name: string,
    // Summary performance indicators.
    averageNoise: ?number,
    averageLighting: ?number,
    averageComfort: ?number,
    averageHealth: ?number,
    averageProductivity: ?number,
  |} >,
|};