// @flow
// this is an auto generated file. This will be overwritten

export const allMessage = `query AllMessage($after: String, $conversationId: ID!, $first: Int) {
  allMessage(after: $after, conversationId: $conversationId, first: $first) {
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
export const allMessageConnection = `query AllMessageConnection($after: String, $conversationId: ID!, $first: Int) {
  allMessageConnection(
    after: $after
    conversationId: $conversationId
    first: $first
  ) {
    messages {
      author {
        cognitoId
        userId
        username
        userType
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
      }
      sender
    }
    nextToken
  }
}
`;
export const allMessageFrom = `query AllMessageFrom(
  $after: String
  $conversationId: ID!
  $first: Int
  $sender: String!
) {
  allMessageFrom(
    after: $after
    conversationId: $conversationId
    first: $first
    sender: $sender
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
export const allUser = `query AllUser($after: String, $first: Int) {
  allUser(after: $after, first: $first) {
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
export const me = `query Me {
  me {
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
export const allProperty = `query AllProperty($userId: ID!, $userType: String!) {
  allProperty(userId: $userId, userType: $userType) {
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
export const getProperty = `query GetProperty($propertyId: String!) {
  getProperty(propertyId: $propertyId) {
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
export const listProperties = `query ListProperties(
  $filter: TablePropertyFilterInput
  $limit: Int
  $nextToken: String
) {
  listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      propertyId
      name
      averageNoise
      averageLighting
      averageComfort
      averageHealth
      averageProductivity
    }
    nextToken
  }
}
`;
export const getConversation = `query GetConversation($ConversationId: ID!, $createdAt: Int!) {
  getConversation(ConversationId: $ConversationId, createdAt: $createdAt) {
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
export const listConversations = `query ListConversations(
  $filter: TableConversationFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
