import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

import { tweetList } from '../types/tweetLists';

export type isTweetableContextType = {
  isTweetable: boolean;
  setIsTweetable: Dispatch<SetStateAction<boolean>>;
};

export const IsTweetableContext = createContext({} as isTweetableContextType);

export const TweetProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isTweetable, setIsTweetable] = useState(true);
  return (
    <IsTweetableContext.Provider value={{ isTweetable, setIsTweetable }}>
      {children}
    </IsTweetableContext.Provider>
  );
};
