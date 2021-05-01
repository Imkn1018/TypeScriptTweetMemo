import { useCallback, useState } from 'react';
import { tweetList } from '../types/tweetLists';

type Props = {
  id: string;
  tweetLists: Array<tweetList>;
  onOpen: () => void;
};

export const useSelectTweet = () => {
  const [selectedTweet, setSelectedTweet] = useState<tweetList | null>(null);
  const onSelectTweet = useCallback((props: Props) => {
    const { id, tweetLists, onOpen } = props;
    const targetTweet = tweetLists.find((tweet) => tweet.id === id);
    setSelectedTweet(targetTweet!);
    onOpen();
  }, []);
  return { onSelectTweet, selectedTweet };
};
