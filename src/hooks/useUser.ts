import { UserContext } from '@/contexts/userContext';
import { useContext } from 'react';

export default function useUser() {
  return useContext(UserContext);
}
