import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  SlideFade,
  Box,
  Text,
  Link,
  Tooltip,
  List,
  Icon,
  useClipboard,
  Center,
  useToast,
  useMediaQuery
} from "@chakra-ui/react";

import {
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
  AiOutlineInstagram
} from "react-icons/ai";
import { FaTelegramPlane, FaTwitter, FaLine } from "react-icons/fa";

const Contacts = () => {
  const [pL, setPL] = useState(false);
  const [email, setEmail] = React.useState(
    "h.imam1998@gmail.com"
  );
  const { hasCopied, onCopy } = useClipboard(email);
  const [isLarge] = useMediaQuery("(min-width: 480px)");
  const toast = useToast();

  const emailClickHandler = () => {
    toast({
      title: "Copied",
      description: "Email address copied to clipboard",
      status: "success",
      duration: 3000,
      isClosable: true
    });
    onCopy();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setPL(true);
  }, []);

  return (
    <SlideFade in={pL} offsetY="40px">
      <Helmet>
        <title>Contacts – Imam Hanafi</title>
      </Helmet>
      <Center>
        <Box w="6xl" bg="gray.700" px="9" py="9" borderRadius="md">
          <Text fontSize="4xl" fontWeight="bold" mb="3">
            Social Presences
          </Text>
          <Text fontSize="lg" mb="8">
            Get in touch with me on various platforms and social medias.
          </Text>
          <Box mt={12}>
            <List>
              <Text
                fontSize={{ base: "md", sm: "lg" }}
                mb={!isLarge ? "3" : "0"}
              >
                <Icon mb={1} as={AiFillMail} /> Mail
                {!isLarge ? <br /> : " - "}
                <Tooltip
                  label="Click to copy email address"
                  aria-label="Mail"
                  placement="bottom-end"
                >
                  <Link color="yellow.400" onClick={() => emailClickHandler()}>
                    {email}
                  </Link>
                </Tooltip>
              </Text>
              <Text
                fontSize={{ base: "md", sm: "lg" }}
                mb={!isLarge ? "3" : "0"}
              >
                <Icon mb="1" as={AiFillGithub} /> GitHub
                {!isLarge ? <br /> : " - "}
                <Link
                  href="https://github.com/imamhanafi1998"
                  isExternal
                  color="yellow.400"
                >
                  github.com/imamhanafi1998
                </Link>
              </Text>
              <Text
                fontSize={{ base: "md", sm: "lg" }}
                mb={!isLarge ? "3" : "0"}
              >
                <Icon mb="1" as={AiFillLinkedin} /> LinkedIn
                {!isLarge ? <br /> : " - "}
                <Link
                  href="https://www.linkedin.com/in/imam-hanafi/"
                  isExternal
                  color="yellow.400"
                >
                  linkedin.com/in/imam-hanafi
                </Link>
              </Text>
              <Text
                fontSize={{ base: "md", sm: "lg" }}
                mb={!isLarge ? "3" : "0"}
              >
                <Icon mb="1" as={FaTelegramPlane} /> Telegram
                {!isLarge ? <br /> : " - "}
                <Link
                  href="https://t.me/secdet98"
                  isExternal
                  color="yellow.400"
                >
                  t.me/secdet98
                </Link>
              </Text>
              <Text
                fontSize={{ base: "md", sm: "lg" }}
                mb={!isLarge ? "3" : "0"}
              >
                <Icon mb="1" as={FaLine} /> Line{!isLarge ? <br /> : " - "}
                <Link
                  href="https://line.me/ti/p/~h.imam1998"
                  isExternal
                  color="yellow.400"
                >
                  line.me/ti/p/~h.imam1998
                </Link>
              </Text>
            </List>
          </Box>
        </Box>
      </Center>
    </SlideFade>
  );
};

export default Contacts;
