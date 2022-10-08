import { Timestamp } from "firebase/firestore";

export interface Conversation {
  users: string[];
}

export interface AppUser {
  email: string;
  lastSeen: Timestamp;
  photoUrl: string;
}

export interface IMessage {
  id: string;
  conversationId: string;
  text: string;
  sent_at: string;
  user: string;
}
