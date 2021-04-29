import { useContext } from 'react';
import {
  IsTweetableContext,
  isTweetableContextType,
} from '../providers/IsTweetable';
export const useTweetable = (): isTweetableContextType =>
  useContext(IsTweetableContext);
