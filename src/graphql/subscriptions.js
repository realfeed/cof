/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty(
    $propertyId: ID!
    $name: String
    $averageNoise: Float
    $averageLighting: Float
    $averageComfort: Float
  ) {
    onCreateProperty(
      propertyId: $propertyId
      name: $name
      averageNoise: $averageNoise
      averageLighting: $averageLighting
      averageComfort: $averageComfort
    ) {
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty(
    $propertyId: ID!
    $name: String
    $averageNoise: Float
    $averageLighting: Float
    $averageComfort: Float
  ) {
    onUpdateProperty(
      propertyId: $propertyId
      name: $name
      averageNoise: $averageNoise
      averageLighting: $averageLighting
      averageComfort: $averageComfort
    ) {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty(
    $propertyId: ID!
    $name: String
    $averageNoise: Float
    $averageLighting: Float
    $averageComfort: Float
  ) {
    onDeleteProperty(
      propertyId: $propertyId
      name: $name
      averageNoise: $averageNoise
      averageLighting: $averageLighting
      averageComfort: $averageComfort
    ) {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $createdAt: Int
    $ConversationId: ID!
    $name: String
    $sentiment: Float
    $classification: String
  ) {
    onCreateConversation(
      createdAt: $createdAt
      ConversationId: $ConversationId
      name: $name
      sentiment: $sentiment
      classification: $classification
    ) {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $createdAt: Int
    $ConversationId: ID!
    $name: String
    $sentiment: Float
    $classification: String
  ) {
    onUpdateConversation(
      createdAt: $createdAt
      ConversationId: $ConversationId
      name: $name
      sentiment: $sentiment
      classification: $classification
    ) {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $createdAt: Int
    $ConversationId: ID!
    $name: String
    $sentiment: Float
    $classification: String
  ) {
    onDeleteConversation(
      createdAt: $createdAt
      ConversationId: $ConversationId
      name: $name
      sentiment: $sentiment
      classification: $classification
    ) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $cognitoId: ID
    $userId: ID
    $username: String
    $userType: String
  ) {
    onCreateUser(
      cognitoId: $cognitoId
      userId: $userId
      username: $username
      userType: $userType
    ) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $cognitoId: ID
    $userId: ID
    $username: String
    $userType: String
  ) {
    onUpdateUser(
      cognitoId: $cognitoId
      userId: $userId
      username: $username
      userType: $userType
    ) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $cognitoId: ID
    $userId: ID
    $username: String
    $userType: String
  ) {
    onDeleteUser(
      cognitoId: $cognitoId
      userId: $userId
      username: $username
      userType: $userType
    ) {
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
