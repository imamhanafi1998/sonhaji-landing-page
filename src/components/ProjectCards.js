import React from "react";
import {
  Flex,
  Text,
  Image,
  LinkOverlay,
  LinkBox,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons";

const ProjectCards = ({ title, tags, desc, image, link, clickEvent }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <LinkBox
        mt="5"
        pt="4"
        as="article"
        bg="gray.600"
        borderRadius="md"
        alignContent="center"
        flexDirection="column"
        position="relative"
        top="0"
        transition="top ease 0.5s"
        _hover={{ top: "-12px", bg: "gray.500", cursor: "pointer" }}
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          align="center"
          color="yellow.400"
        >
          <LinkOverlay
            onClick={onOpen}
            _hover={{ textDecoration: "underline" }}
          >
            {title}
          </LinkOverlay>
        </Text>
        <Text fontSize="md" align="center" mb="5" mx="2rem">
          {tags}
        </Text>
        <Flex alignItems="center" flexDir="column">
          <Image
            flex="1"
            loading="lazy"
            boxSize="80%"
            objectFit="cover"
            src={image}
            boxShadow="dark-lg"
            alt="{title}"
          />
        </Flex>
      </LinkBox>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text color="yellow.400" fontSize="2xl" fontWeight="bold">
              {title}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="lg">{desc}</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => window.open(`${image}`, "_blank")}
              variant="solid"
              color="yellow.400"
              rightIcon={<ArrowForwardIcon />}
            >
              View screenshot
            </Button>
            {link && (
              <Button
                onClick={() => window.open(`${link}`, "_blank")}
                variant="solid"
                color="yellow.400"
                ml={4}
                rightIcon={<ArrowForwardIcon />}
              >
                Visit demo
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProjectCards;
