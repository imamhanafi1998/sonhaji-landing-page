import React, { useEffect } from "react";
import { Router, Route, Switch, Link as ReactLink } from "react-router-dom";

import {
  Text,
  Link,
  HStack,
  Icon,
  Divider,
  Tooltip,
  Flex,
  Box,
  Container
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

import { AiFillGithub } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

import Navbar from "./components/Navbar";
import History from "./components/History";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contacts from "./components/pages/Contacts";

import "./styles.css";

const routes = [
  { path: "/", name: "Home", Component: Home, exact: true },
  { path: "/about", name: "About", Component: About, exact: true },
  { path: "/projects", name: "Projects", Component: Projects, exact: true },
  { path: "/contacts", name: "Contacts", Component: Contacts, exact: true }
];

export default function App() {
  useEffect(() => {
    localStorage.setItem("colorMode", "dark");
  }, []);

  return (
    <Router history={History}>
      <Navbar />
      <Switch>
        {routes.map(({ path, Component, exact }) => (
          <Route key={path} exact={exact} path={path}>
            {({ match }) => <Component />}
          </Route>
        ))}
      </Switch>

      <Container maxW="6xl" px={0}>
        <Divider my="10" />
        <Flex mb="10" px={9} justifyContent="space-between">
          <Box>
            <Text fontSize="md" align="left">
              Made by{" "}
              <Link color="yellow.400" as={ReachLink} to="/">
                Imam Hanafi
              </Link>
              . Design by{" "}
              <Link
                href="https://github.com/grikomsn"
                isExternal
                color="yellow.300"
              >
                Griko Nibras
              </Link>
              {"."}
            </Text>
            <Text fontSize="md" align="left">
              Built using{" "}
              <Link href="https://reactjs.org" isExternal color="yellow.400">
                ReactJS
              </Link>
              {", "}
              <Link href="https://chakra-ui.com" isExternal color="yellow.400">
                Chakra UI
              </Link>
              {" and "}
              <Link
                href="https://codesandbox.io/"
                isExternal
                color="yellow.400"
              >
                CodeSandbox
              </Link>
              {". Hosted on "}
              <Link href="https://vercel.com" isExternal color="yellow.400">
                Vercel
              </Link>
              {"."}
            </Text>
            <Text fontSize="md" align="left" my="4">
              SONHAJI © 2021–present.
            </Text>
            <HStack spacing={1}>
              <Tooltip
                label="t.me/secdet98"
                aria-label="Telegram"
                placement="bottom-end"
              >
                <Link href="https://t.me/secdet98" isExternal mr={4}>
                  <Icon w="1.3rem" h="1.3rem" as={FaTelegramPlane} />
                </Link>
              </Tooltip>
              <Tooltip
                label="github.com/imamhanafi1998"
                aria-label="GitHub"
                placement="bottom-end"
              >
                <Link href="https://github.com/imamhanafi1998" isExternal>
                  <Icon w="1.3rem" h="1.3rem" as={AiFillGithub} />
                </Link>
              </Tooltip>
            </HStack>
          </Box>
          <Box ml={9} d={{ base: "none", md: "block" }}>
            <Text fontSize="md" align="right">
              <Link as={ReactLink} to="/about">
                About
              </Link>
            </Text>
            <Text fontSize="md" align="right" my="2">
              <Link as={ReactLink} to="/projects">
                Projects
              </Link>
            </Text>
            <Text fontSize="md" align="right">
              <Link as={ReactLink} to="/contacts">
                Contacts
              </Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Router>
  );
}
