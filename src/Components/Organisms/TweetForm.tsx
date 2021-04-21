import { VFC, memo, ChangeEvent, useState, useCallback, useEffect } from 'react';
import { Input, Textarea, Box, Heading, Button, styled } from '@chakra-ui/react';

import { tweetList } from '../../types/tweetLists';
import { useGetTweet } from '../../hooks/useGetTweet';
type Props = {
  onClick: () => void;
  newTweet: string;
  onChangeCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTweet: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  category: string;
};

export const TweetForm: VFC<Props> = memo((props) => {
  const {onClick, newTweet,category, onChangeCategory,onChangeTweet} = props;
  
  return (
    <>
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" w="sm" p={4}>
          This is TweetForm!
        </Heading>
        <Input
          placeholder="Input Category"
          mt={4}
          mb={2}
          value={category}
          onChange={onChangeCategory}
        ></Input>
        <Textarea
          h={'sm'}
          placeholder="Input Tweet"
          onChange={onChangeTweet}
          value={newTweet}
          style={newTweet.length >10 ? {color:"red"} : {color:"gray"}}
        ></Textarea>
        <Button mx={'auto'} onClick={onClick} >
          Tweet!
        </Button>
      </Box>
    </>
  );
});
