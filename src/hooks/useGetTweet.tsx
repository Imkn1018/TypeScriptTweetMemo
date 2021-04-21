import {useCallback, useState} from "react"

import { tweetList } from "../types/tweetLists"

export const useGetTweet = () => {
  
  const [newTweet, setNewTweet] = useState('');
  const [category, setCategory] = useState('');

  const [tweetLists, setTweetList] = useState<tweetList>();
  
  
  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCategory(e.target.value);
  const onChangeTweet = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setNewTweet(e.target.value);

  const getTweet = useCallback((id: number) => {
    if (newTweet === '' && category === "")
      return (
        setTweetList({
          id: id,
          tweet: newTweet,
          category: category,
        }),
        setNewTweet(''),
        setCategory('')
      );
  },[]);
  return {onChangeCategory, onChangeTweet, tweetLists ,getTweet, newTweet, category}

}

