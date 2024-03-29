import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  SlideFade,
  Box,
  Flex,
  Text,
  Image,
  Link,
  SimpleGrid,
  Tooltip,
  List,
  Divider,
  Center
} from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";

import ProfilePhoto from "../images/profilePhoto.jpg";

const About = () => {
  const [pL, setPL] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPL(true);
  }, []);

  return (
    <SlideFade in={pL} offsetY="40px">
      <Helmet>
        <title>About – Imam Hanafi</title>
      </Helmet>
      <Center>
        <Box maxW="6xl" bg="gray.700" px="9" py="9" borderRadius="md">
          <Flex
            flexDir={{ base: "column-reverse", lg: "row" }}
            alignItems={{ base: "center", lg: "flex-start" }}
            justifyContent="center"
          >
            <Flex
              flexDir="column"
              alignItems="flex-start"
              justifyContent="center"
              mr={{ base: 0, lg: 4 }}
              mt={{ base: 10, lg: 0 }}
            >
              <Text fontSize="5xl" fontWeight="bold">
                I am Imam Hanafi
              </Text>
              <Text fontSize="lg" align="left" my="6">
                Lives in{" "}
                <Link
                  href="https://surabaya.go.id/"
                  isExternal
                  color="yellow.400"
                >
                  Surabaya, Indonesia
                </Link>
                . Studied{" "}
                <Link
                  href="http://sisfo.upnjatim.ac.id/"
                  isExternal
                  color="yellow.400"
                >
                  Information Systems
                </Link>{" "}
                at{" "}
                <Link
                  href="https://www.upnjatim.ac.id/en/"
                  isExternal
                  color="yellow.400"
                >
                  UPN "Veteran" Jawa Timur
                </Link>
                {" "}and currently working as Full-Stack Dev.
              </Text>
              <Text fontSize="lg" align="left">
                I'm interested in modern web development, 
                especially on the MERN stack. So I decided to learn it slowly, 
                piece by piece, starting with{" "}
                <Link href="https://reactjs.org" isExternal color="yellow.400">
                  ReactJS
                </Link>{" "}
                as this website was made with.
              </Text>
              <Text fontSize="lg" align="left" my={6}>
                In real life I play mobile games or some old video games on my laptop, visit{" "}
                <Tooltip
                  placement="bottom-start"
                  label="Indonesian Meme Site"
                  aria-label="1CAK"
                >
                  <Link href="https://1cak.com" isExternal color="yellow.400">
                    1CAK
                  </Link>
                </Tooltip>{" "}
                and watch{" "}
                <Link href="https://youtube.com" isExternal color="yellow.400">
                  YouTube
                </Link>{" "}
                too.
              </Text>
              <Text fontSize="lg" align="left">
                Somehow my close friends call me{" "}
                <Link
                  as={ReactLink}
                  to="/about"
                  color="yellow.400"
                  fontWeight="bold"
                >
                  Sonhaji
                </Link>{" "}
                and I like that. I like to share some of my personal experiences with them like academics, 
                love, movies, video games and many more. 
                Sometimes I write them on my Instagram. Because writing can speak what I cannot.
              </Text>
            </Flex>
            <Tooltip label="It's me too xD" aria-label="Profile Photo">
              <Image
                mt={4}
                loading="lazy"
                borderRadius="full"
                maxW={{ base: "2xs", sm: "xs" }}
                src={ProfilePhoto}
                alt="Imam Hanafi"
              />
            </Tooltip>
          </Flex>
          <Box mt={14}>
            <Divider mb={12} />
            <Text fontSize="4xl" fontWeight="bold">
              Knowledge Base
            </Text>
            <Text fontSize="lg" mb="14">
              Here are my knowledges I've been using with.
            </Text>
            <SimpleGrid
              columns={{ base: "2", sm: "3", md: "4", lg: "5" }}
              spacing={8}
            >
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  Languanges
                </Text>
                <List>
                  <Text fontSize="lg">PHP</Text>
                  <Text fontSize="lg">JavaScript</Text>
                  <Text fontSize="lg">C#</Text>
                </List>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  FrontEnd Lib.
                </Text>
                <List>
                  <Text fontSize="lg">Bootstrap</Text>
                  <Text fontSize="lg">Materialize</Text>
                  <Text fontSize="lg">Chakra UI</Text>
                </List>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  FrontEnd
                </Text>
                <List>
                  <Text fontSize="lg">HTML & CSS</Text>
                  <Text fontSize="lg">ReactJS</Text>
                  <Text fontSize="lg">Razor View Engine</Text>
                </List>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  BackEnd
                </Text>
                <List>
                  <Text fontSize="lg">Native PHP</Text>
                  <Text fontSize="lg">Laravel</Text>
                  <Text fontSize="lg">ExpressJS</Text>
                  <Text fontSize="lg">MVC5 (ASP.NET)</Text>
                </List>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  Database
                </Text>
                <List>
                  <Text fontSize="lg">MySQL</Text>
                  <Text fontSize="lg">SQL Server</Text>
                  <Text fontSize="lg">MongoDB</Text>
                </List>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  Tools
                </Text>
                <List>
                  <Text fontSize="lg">VS Code</Text>
                  <Text fontSize="lg">Atom</Text>
                  <Text fontSize="lg">Insomnia</Text>
                  <Text fontSize="lg">CodeSandbox</Text>
                </List>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  Infrastructure
                </Text>
                <List>
                  <Text fontSize="lg">GitHub</Text>
                  <Text fontSize="lg">Vercel</Text>
                  <Text fontSize="lg">Netlify</Text>
                  <Text fontSize="lg">MongoDB Atlas</Text>
                </List>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Center>
    </SlideFade>
  );
};

export default About;
