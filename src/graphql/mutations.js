// @flow
// this is an auto generated file. This will be overwritten

export const createMessage = `mutation CreateMessage(
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
export const createUserConversations = `mutation CreateUserConversations(
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
export const createProperty = `mutation CreateProperty($input: CreatePropertyInput!) {
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
export const updateProperty = `mutation UpdateProperty($input: UpdatePropertyInput!) {
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
export const deleteProperty = `mutation DeleteProperty($input: DeletePropertyInput!) {
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
export const createConversation = `mutation CreateConversation($input: CreateConversationInput!) {
  createConversation(input: $input) {
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
export const updateConversation = `mutation UpdateConversation($input: UpdateConversationInput!) {
  updateConversation(input: $input) {
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
export const deleteConversation = `mutation DeleteConversation($input: DeleteConversationInput!) {
  deleteConversation(input: $input) {
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
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
