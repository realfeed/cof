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
