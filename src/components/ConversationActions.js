import { CONVERSATION_UPDATE } from './types';

export const updateConversation = conversationId => (
  {
    type: CONVERSATION_UPDATE,
    payload: conversationId,
  }
);
