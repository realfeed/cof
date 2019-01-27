// @flow
// this is an auto generated file. This will be overwritten

export const createConversation = `mutation CreateConversation($createdAt: String, $name: String!) {
  createConversation(createdAt: $createdAt, name: $name) {
    origin {
      cognitoId
      userId
      username
      userType
      properties {
        nextToken
      }
      conversations {
        nextToken
      }
    }
    createdAt
    ConversationId
    messages {
      messages {
        content
        conversationId
        createdAt
        messageId
        isSent
        sender
      }
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
export const createMessage = `mutation CreateMessage(
  $content: String
  $conversationId: ID!
  $createdAt: String!
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
      properties {
        nextToken
      }
      conversations {
        nextToken
      }
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
      properties {
        nextToken
      }
      conversations {
        nextToken
      }
    }
    sender
  }
}
`;
export const createUser = `mutation CreateUser($username: String!, $userType: String!) {
  createUser(username: $username, userType: $userType) {
    cognitoId
    userId
    username
    userType
    properties {
      nextToken
      userProperties {
        propertyId
        userId
      }
    }
    conversations {
      nextToken
      userConversations {
        conversationId
        userId
      }
    }
  }
}
`;
export const createUserConversations = `mutation CreateUserConversations(
  $conversationId: ID!
  $userId: ID!
  $propertyId: String!
) {
  createUserConversations(
    conversationId: $conversationId
    userId: $userId
    propertyId: $propertyId
  ) {
    associated {
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
      }
      userId
    }
    conversation {
      origin {
        cognitoId
        userId
        username
        userType
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
    conversationId
    user {
      cognitoId
      userId
      username
      userType
      properties {
        nextToken
      }
      conversations {
        nextToken
      }
    }
    userId
  }
}
`;
export const createProperty = `mutation CreateProperty($propertyId: String!, $name: String!) {
  createProperty(propertyId: $propertyId, name: $name) {
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
