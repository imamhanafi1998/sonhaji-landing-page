import React from "react";
import {
  Flex,
  Button,
  Container,
  Text,
  Tooltip,
  Icon,
  HStack,
  Link,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

import { AiFillGithub } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container maxW="6xl" py="9">
      <Flex
        as="nav"
        h={{ base: "0.8rem", md: "2rem" }}
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 0 }}
      >
        <HStack spacing={5}>
          <Link as={ReachLink} to="/">
            <Button variant="link" color="yellow.400">
              <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold">
                Imam Hanafi
              </Text>
            </Button>
          </Link>

          <Link d={{ base: "none", md: "block" }} as={ReachLink} to="/about">
            <Button variant="link">
              <Text fontSize={{ base: "xl", lg: "2xl" }}>About</Text>
            </Button>
          </Link>
          <Link d={{ base: "none", md: "block" }} as={ReachLink} to="/projects">
            <Button variant="link">
              <Text fontSize={{ base: "xl", lg: "2xl" }}>Projects</Text>
            </Button>
          </Link>
          <Link d={{ base: "none", md: "block" }} as={ReachLink} to="/contacts">
            <Button variant="link">
              <Text fontSize={{ base: "xl", lg: "2xl" }}>Contacts</Text>
            </Button>
          </Link>
        </HStack>
        <HStack spacing={5}>
          <Tooltip
            label="t.me/secdet98"
            aria-label="Telegram"
            placement="bottom-end"
          >
            <Link href="https://t.me/secdet98" isExternal>
              <Icon
                w={{ base: "1.4rem", lg: "1.6rem" }}
                h={{ base: "1.4rem", lg: "1.6rem" }}
                as={FaTelegramPlane}
              />
            </Link>
          </Tooltip>
          <Tooltip
            label="github.com/imamhanafi1998"
            aria-label="GitHub"
            placement="bottom-end"
          >
            <Link href="https://github.com/imamhanafi1998" isExternal>
              <Icon
                w={{ base: "1.4rem", lg: "1.6rem" }}
                h={{ base: "1.4rem", lg: "1.6rem" }}
                as={AiFillGithub}
              />
            </Link>
          </Tooltip>
        </HStack>
      </Flex>
      <IconButton
        zIndex={2}
        d={{ base: "block", md: "none" }}
        pos="fixed"
        bottom={7}
        right={5}
        borderRadius="full"
        aria-label="Menu Icon"
        variant="solid"
        size="lg"
        colorScheme="gray"
        icon={<HamburgerIcon w={7} h={7} />}
        onClick={onOpen}
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay>
          <DrawerContent p={7}>
            <DrawerHeader px={0} py={4}>
              <Link as={ReachLink} to="/">
                <Button
                  // p="3"
                  variant="link"
                  onClick={onClose}
                  color="yellow.400"
                >
                  <Text fontSize={{ base: "2xl" }} fontWeight="bold">
                    Imam Hanafi
                  </Text>
                </Button>
              </Link>
            </DrawerHeader>
            <DrawerBody px={0} py={4}>
              <Flex minH="full" flexDir="column" justifyContent="center">
                <Link as={ReachLink} to="/about">
                  <Button variant="link" onClick={onClose}>
                    <Text fontSize={{ base: "xl" }}>About</Text>
                  </Button>
                </Link>
                <Link my={{ base: 5 }} as={ReachLink} to="/projects">
                  <Button variant="link" onClick={onClose}>
                    <Text fontSize={{ base: "xl" }}>Projects</Text>
                  </Button>
                </Link>
                <Link as={ReachLink} to="/contacts" onClick={onClose}>
                  <Button variant="link">
                    <Text fontSize={{ base: "xl" }}>Contacts</Text>
                  </Button>
                </Link>
              </Flex>
            </DrawerBody>
            <DrawerFooter p={0}>
              <HStack mr="auto" spacing={4} mb={4}>
                <Tooltip
                  label="t.me/secdet98"
                  aria-label="Telegram"
                  placement="bottom-end"
                >
                  <Link href="https://t.me/secdet98" isExternal mx={0}>
                    <Icon
                      w={{ base: "1.6rem" }}
                      h={{ base: "1.6rem" }}
                      as={FaTelegramPlane}
                    />
                  </Link>
                </Tooltip>
                <Tooltip
                  label="github.com/imamhanafi1998"
                  aria-label="GitHub"
                  placement="bottom-end"
                >
                  <Link
                    href="https://github.com/imamhanafi1998"
                    isExternal
                    mx={3}
                  >
                    <Icon
                      w={{ base: "1.6rem" }}
                      h={{ base: "1.6rem" }}
                      as={AiFillGithub}
                    />
                  </Link>
                </Tooltip>
              </HStack>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Container>
  );
};

export default Navbar;
