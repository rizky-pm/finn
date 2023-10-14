import { create } from 'zustand';

type TimeFilterProps = {
  filter: 'daily' | 'weekly' | 'monthly' | 'yearly';
  setFilter: (filter: 'daily' | 'weekly' | 'monthly' | 'yearly') => void;
};

export const useTimeFilterStore = create<TimeFilterProps>((set) => ({
  filter: 'daily',
  setFilter: (newFilter) => set({ filter: newFilter }),
}));
