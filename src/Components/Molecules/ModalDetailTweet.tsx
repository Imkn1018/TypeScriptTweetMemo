import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Stack,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useState, useEffect, ChangeEvent, VFC } from 'react';

import { tweetList } from '../../types/tweetLists';

type Props = {
  selectedTweet: tweetList | null;
  isOpen: boolean;
  onClose: () => void;
};

export const ModalDetailTweet: VFC<Props> = (props) => {
  const { selectedTweet, isOpen, onClose } = props;
  const [editTweet, setEditTweet] = useState('');
  const [editCategory, setEditCategory] = useState('');
  useEffect(() => {
    setEditTweet(selectedTweet?.tweet ?? '');
    setEditCategory(selectedTweet?.category ?? '');
  }, [selectedTweet]);

  const onChangeEditTweet = (e: ChangeEvent<HTMLInputElement>) =>
    setEditTweet(e.target.value);
  const onChangeEditCategory = (e: ChangeEvent<HTMLInputElement>) =>
    setEditCategory(e.target.value);
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale">
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Tweet Edit</ModalHeader>
          <ModalBody>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Tweet</FormLabel>
                <Input value={editTweet} onChange={onChangeEditTweet} />
              </FormControl>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Input value={editCategory} onChange={onChangeEditCategory} />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Back</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
