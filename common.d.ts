import { DocumentReference } from 'firebase/firestore';

export interface TransactionType {
  id: string;
  category: DocumentReference;
  title: string;
  amount: number;
  userId: string;
  createdAt: number;
}

export type MessageType = {
  type: null | 'error' | 'success' | 'warning';
  text: string;
};
