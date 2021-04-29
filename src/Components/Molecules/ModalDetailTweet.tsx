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
  ModalCloseButton,
} from '@chakra-ui/react';
import { useState, useEffect, ChangeEvent, VFC, useContext, memo } from 'react';
import { IsTweetableContext } from '../../providers/IsTweetable';

import { tweetList } from '../../types/tweetLists';

type Props = {
  selectedTweet: tweetList | null;
  isOpen: boolean;
  onClose: () => void;
};

export const ModalDetailTweet: VFC<Props> = memo((props) => {
  const { selectedTweet, isOpen, onClose } = props;
  const [editTweet, setEditTweet] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const {isTweetable, setIsTweetable} = useContext(IsTweetableContext)
  useEffect(() => {
    setEditTweet(selectedTweet?.tweet ?? '');
    setEditCategory(selectedTweet?.category ?? '');
  }, [selectedTweet]);

  const onChangeEditTweet = (e: ChangeEvent<HTMLInputElement>) =>
    setEditTweet(e.target.value);
  const onChangeEditCategory = (e: ChangeEvent<HTMLInputElement>) =>
    setEditCategory(e.target.value);

  const onClickUpdate = () => {
    editTweet.length > 10 && setIsTweetable(false)
    if (editTweet === '' && editCategory === '' && isTweetable) {
      
      alert("fffffff")
    }
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale">
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Tweet Edit</ModalHeader>
          <ModalCloseButton />
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
});
