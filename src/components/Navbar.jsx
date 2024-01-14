import { Box, Button, Flex, Image, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import Logo from '../assets/logo.png';
import HistoryModal from './HistoryModal';
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex justifyContent={"space-between"} py={6} alignItems={"center"}>
    <Box position={"relative"} aspectRatio={5 / 3} minHeight={20}>
        <Image src={Logo} fill  w={100} alt='github logo' sx={{ filter: "invert(1)" }}   />
    </Box>
    <Box>
        <Button size='md' colorScheme='whatsapp' onClick={onOpen}>
            Search History
        </Button>
    </Box>

    {isOpen && <HistoryModal isOpen={isOpen} onClose={onClose} />}
</Flex>
  );
};

export default Navbar;
