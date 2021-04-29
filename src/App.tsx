import React, {
  ChangeEvent,
  useState,
  memo,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { ChakraProvider, Wrap, WrapItem } from '@chakra-ui/react';
import { Header } from './Components/Organisms/Header';
import { TweetIndex } from './Components/Organisms/TweetIndex';
import { TweetForm } from './Components/Organisms/TweetForm';
import { tweetList } from './types/tweetLists';
import { useGetTweet } from './hooks/useGetTweet';
import { idText } from 'typescript';
import { useTweetable } from './hooks/useTweetable';
import { IsTweetableContext } from './providers/IsTweetable';
import { TweetProvider } from './providers/IsTweetable';

import {db} from "./firebase"

function App() {
  const [id, setId] = useState(1);
  const [newTweet, setNewTweet] = useState('');
  const [category, setCategory] = useState('');
  const [fireTweet, setFireTweet] = useState<tweetList>({id: "", tweet: "", category: ""})
  const [isTweetable, setIsTweetable] = useState(true);
  // const { isTweetable, setIsTweetable } = useTweetable();
  const [tweetLists, setTweetLists] = useState<tweetList[]>([]);

  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCategory(e.target.value);
  const onChangeTweet = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTweet(e.target.value);
  };


  useEffect(() => {
    // onsnapshotデータベースの変化を取得してくれる
    const unSub = db.collection('tweets').onSnapshot((snapshot) => {
      setNewTweet(
        // doc => ドキュメント
        snapshot.docs.map((doc) => (doc.data().tweet))
      );
    });
    return () => unSub();
  }, []);

  // useEffect(() => {
  //   if (newTweet !== "" && category !== "" && newTweet.length > 10)
  //   return () => {
  //     setIsTweetable(false)
  //   }
  // }, [newTweet ,setNewTweet])

  const onClickTweetAdd = () => {
    setIsTweetable(true);
    if (isTweetable) {
      console.log(isTweetable);
      setId(id + 1);
      setTweetLists([
        ...tweetLists,
        { id: id, tweet: newTweet, category: category },
      ]);
      console.log(tweetLists);
      setNewTweet('');
      setCategory('');
    } else {
      console.log(isTweetable);
      alert('hogehoge');
    }
  };

  return (
    <ChakraProvider>
      <Header></Header>
      <Wrap p={{ base: 4, md: 10 }} justify="center">
        <WrapItem>
          <TweetProvider>
            <TweetForm
              newTweet={newTweet}
              category={category}
              onChangeCategory={onChangeCategory}
              onChangeTweet={onChangeTweet}
              onClick={onClickTweetAdd}
            />
          </TweetProvider>
        </WrapItem>
        <WrapItem>
          <TweetIndex tweetLists={tweetLists} />
        </WrapItem>
      </Wrap>
    </ChakraProvider>
  );
}

export default App;
