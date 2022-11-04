import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Heart from "../assets/icon/heart.svg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  let [navscroll, setNavscroll] = useState(false);

  let handleScroll = () => {
    if (window.scrollY >= 15) {
      setNavscroll(true);
    } else {
      setNavscroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="3"
        py="1"
        bg="green.500"
        zIndex="40"
        position={navscroll ? "sticky" : "static"}
        top="0"
        w="full"
      >
        <Text color="white" fontSize="lg">
          Jadwal Adzan App
        </Text>
        <Box ref={btnRef} onClick={onOpen}>
          <HamburgerIcon color="white" w={6} h={6} />
        </Box>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <Flex alignItems="center" height="full">
          </Flex>
          <Flex alignItems="end" justifyContent="center" height="full">
            <Flex justifyContent="center" alignItems="center">
              <Text mr="1">
                &copy; {new Date().getFullYear()} created with{" "}
              </Text>
              <Image src={Heart} boxSize="5" />
            </Flex>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
