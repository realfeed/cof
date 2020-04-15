/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $content: String
    $conversationId: ID!
    $createdAt: Int!
    $messageId: ID!
  ) {
    createMessage(
      content: $content
      conversationId: $conversationId
      createdAt: $createdAt
      messageId: $messageId
    ) {
      author {
        cognitoId
        userId
        username
        userType
        currentLocationID
        currentConversationID
      }
      content
      conversationId
      createdAt
      messageId
      isSent
      recipient {
        cognitoId
        userId
        username
        userType
        currentLocationID
        currentConversationID
      }
      sender
    }
  }
`;
export const createUserConversations = /* GraphQL */ `
  mutation CreateUserConversations(
    $conversationId: ID!
    $userId: ID!
    $propertyId: ID!
  ) {
    createUserConversations(
      conversationId: $conversationId
      userId: $userId
      propertyId: $propertyId
    ) {
      associated {
        conversationId
        userId
      }
      conversation {
        createdAt
        ConversationId
        name
        sentiment
        classification
        major
        minor
        latitude
        longitude
        PropertyId
      }
      conversationId
      user {
        cognitoId
        userId
        username
        userType
        currentLocationID
        currentConversationID
      }
      userId
    }
  }
`;
export const createProperty = /* GraphQL */ `
  mutation CreateProperty($input: CreatePropertyInput!) {
    createProperty(input: $input) {
      propertyId
      name
      averageNoise
      averageLighting
      averageComfort
      averageHealth
      averageProductivity
    }
  }
`;
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty($input: UpdatePropertyInput!) {
    updateProperty(input: $input) {
      propertyId
      name
      averageNoise
      averageLighting
      averageComfort
      averageHealth
      averageProductivity
    }
  }
`;
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty($input: DeletePropertyInput!) {
    deleteProperty(input: $input) {
      propertyId
      name
      averageNoise
      averageLighting
      averageComfort
      averageHealth
      averageProductivity
    }
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation($input: CreateConversationInput!) {
    createConversation(input: $input) {
      origin {
        cognitoId
        userId
        username
        userType
        currentLocationID
        currentConversationID
      }
      createdAt
      ConversationId
      messages {
        nextToken
      }
      name
      sentiment
      classification
      major
      minor
      latitude
      longitude
      PropertyId
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation($input: UpdateConversationInput!) {
    updateConversation(input: $input) {
      origin {
        cognitoId
        userId
        username
        userType
        currentLocationID
        currentConversationID
      }
      createdAt
      ConversationId
      messages {
        nextToken
      }
      name
      sentiment
      classification
      major
      minor
      latitude
      longitude
      PropertyId
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation($input: DeleteConversationInput!) {
    deleteConversation(input: $input) {
      origin {
        cognitoId
        userId
        username
        userType
        currentLocationID
        currentConversationID
      }
      createdAt
      ConversationId
      messages {
        nextToken
      }
      name
      sentiment
      classification
      major
      minor
      latitude
      longitude
      PropertyId
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      cognitoId
      userId
      username
      userType
      currentLocationID
      currentConversationID
      properties {
        nextToken
      }
      conversations {
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      cognitoId
      userId
      username
      userType
      currentLocationID
      currentConversationID
      properties {
        nextToken
      }
      conversations {
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      cognitoId
      userId
      username
      userType
      currentLocationID
      currentConversationID
      properties {
        nextToken
      }
      conversations {
        nextToken
      }
    }
  }
`;
