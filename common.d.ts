import { DocumentReference } from 'firebase/firestore';

export interface TransactionType {
  id: string;
  category: DocumentReference;
  title: string;
  amount: number;
  userId: string;
  createdAt: number;
}

export interface CategoryType {
  name: string;
  type: 'Outcome' | 'Income';
}

export type MessageType = {
  type: null | 'error' | 'success' | 'warning';
  text: string;
};
