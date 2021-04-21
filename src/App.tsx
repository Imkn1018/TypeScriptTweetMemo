import React, { ChangeEvent, useState, memo, useCallback } from 'react';
import { ChakraProvider, Wrap, WrapItem } from '@chakra-ui/react';
import { Header } from './Components/Organisms/Header';
import { TweetIndex } from './Components/Organisms/TweetIndex';
import { TweetForm } from './Components/Organisms/TweetForm';
import { tweetList } from './types/tweetLists';
import { useGetTweet } from './hooks/useGetTweet';
import { idText } from 'typescript';

function App() {
  const [id, setId] = useState(1);
  const [newTweet, setNewTweet] = useState('');
  const [category, setCategory] = useState('');
  const [isTweetable, setIsTweetable] = useState(true);
  const [tweetLists, setTweetLists] = useState<tweetList[]>([]);

  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCategory(e.target.value);
  const onChangeTweet = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setNewTweet(e.target.value);

  const onClickTweetAdd = () => {
    newTweet.length > 10 && setIsTweetable(false);
    if (newTweet === '' && category === '' && isTweetable) {
      setId(id + 1);
      setTweetLists([
        ...tweetLists,
        { id: id, tweet: newTweet, category: category },
      ]);
      console.log(tweetLists);
      setNewTweet('');
      setCategory('');
    }
  };

  return (
    <ChakraProvider>
      <Header></Header>
      <Wrap p={{ base: 4, md: 10 }} justify="center">
        <WrapItem>
          <TweetForm
            newTweet={newTweet}
            category={category}
            onChangeCategory={onChangeCategory}
            onChangeTweet={onChangeTweet}
            onClick={onClickTweetAdd}
          />
        </WrapItem>
        <WrapItem>
          <TweetIndex tweetLists={tweetLists} />
        </WrapItem>
      </Wrap>
    </ChakraProvider>
  );
}

export default App;
