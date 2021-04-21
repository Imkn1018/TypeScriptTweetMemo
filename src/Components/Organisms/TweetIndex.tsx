import { VFC, memo, useEffect } from 'react';

import {
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Heading,
} from '@chakra-ui/react';

import { tweetList } from '../../types/tweetLists';
import { ModalDetailTweet } from '../Molecules/ModalDetailTweet';
import { useSelectTweet } from '../../hooks/useSelectTweet';

type Props = {
  tweetLists: Array<tweetList>;
};
export const TweetIndex: VFC<Props> = memo((props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { tweetLists } = props;
  const { onSelectTweet, selectedTweet } = useSelectTweet();

  const onClickSelectTweet = (id: number) =>
    onSelectTweet({ tweetLists, id, onOpen });
  return (
    <>
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md"　overflowWrap="break-word" >
        <Heading as="h1" w="sm" p={4}>
          This is TweetIndex
        </Heading>
        <Table w="sm" py={2} px={3}>
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>Tweet</Th>
              <Th>Category</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tweetLists.map((tweetList) => {
              return (
                <Tr
                  key={tweetList.id}
                  _hover={{ cursor: 'pointer', opacity:'0.8' }}
                  onClick={() => onClickSelectTweet(tweetList.id)}
                  
                >
                  <Td>{tweetList.id}</Td>
                  <Td>{tweetList.tweet}</Td>
                  <Td>{tweetList.category}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <ModalDetailTweet
            selectedTweet={selectedTweet}
            isOpen={isOpen}
            onClose={onClose}
          />
        </Table>
      </Box>
    </>
  );
});
