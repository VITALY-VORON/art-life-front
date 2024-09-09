import { create } from 'zustand';

interface UserState {
  id: string;
  name: string;
  email: string;
  setUserData: (id: string, name: string, email: string) => void;
}

const useUserStore = create<UserState>((set) => ({
  id: '',
  name: '',
  email: '',
  setUserData: (id, name, email) => set({ id, name, email }),
}));

export default useUserStore;
