// @flow
// this is an auto generated file. This will be overwritten

export const onCreateProperty = `subscription OnCreateProperty(
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
export const onUpdateProperty = `subscription OnUpdateProperty(
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
export const onDeleteProperty = `subscription OnDeleteProperty(
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
export const onCreateConversation = `subscription OnCreateConversation(
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
export const onUpdateConversation = `subscription OnUpdateConversation(
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
export const onDeleteConversation = `subscription OnDeleteConversation(
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
export const onCreateUser = `subscription OnCreateUser(
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
export const onUpdateUser = `subscription OnUpdateUser(
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
export const onDeleteUser = `subscription OnDeleteUser(
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
