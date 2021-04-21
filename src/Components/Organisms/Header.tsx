import { VFC, memo } from 'react';
import { useDisclosure, Flex, Heading, Box, Link } from '@chakra-ui/react';
import { MenuIconButton } from '../Atoms/Button/MenuButton';
import { MenuDrawer } from '../Molecules/MenuDrawer/MenuDrawer';
export const Header: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onClickTop = () => alert('Top');
  const onClickIndex = () => alert('Index');
  const onClickSetting = () => alert('Setting');

  return (
    <>
      <Flex
        as="nav"
        bg="teal.200"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        mb={10}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading as="h1" fontSize={{ base: 'md', nd: 'lg' }}>
            Tweet Memo App
          </Heading>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
        <MenuDrawer
          onClose={onClose}
          isOpen={isOpen}
          onClickHome={onClickTop}
          onClickUserManagement={onClickIndex}
          onClickSetting={onClickSetting}
        />
      </Flex>
    </>
  );
});
