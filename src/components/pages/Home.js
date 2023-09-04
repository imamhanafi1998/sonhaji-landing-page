import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import qs from "qs";
import querystring from "querystring";
import {
  SlideFade,
  Box,
  Flex,
  Text,
  Image,
  Link,
  SimpleGrid,
  Button,
  Tooltip,
  Icon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  useMediaQuery,
  Center,
  Progress,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { GiSecretDoor } from "react-icons/gi";

import cat from "../images/cat.gif";
import Avatar from "../images/avatar.png";
import AvatarMasked from "../images/avatarMasked.png";
// import avatarWMusic from "src/components/images/avatarWMusic.gif";
// const avatarWMusic = require("src/components/images/avatarWMusic.gif");
// const AvatarWMusic = "https://i.imgur.com/6wY4xkg.gif";
import AvatarWMusic from "../images/avatarWMusic.gif";
import MamentApp from "../images/mament.png";
import Sigud from "../images/sigud.png";
import FD_Sifo from "../images/fd-sifo.png"
import CardApp from "../images/card.png"

import ProjectCards from "../ProjectCards";

import SpotifyWebApi from "spotify-web-api-js";
let spotify = new SpotifyWebApi();

const Home = () => {
  const [pL, setPL] = useState(false);
  const [isLarger] = useMediaQuery("(min-width: 62em)");
  const [player, setPlayer] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    setPL(true);
    // x();
    // getAccessToken();
    // getNowPlaying();
    // getPlayerInfo();
    getPlayerInfo();
    let repeat = setInterval(() => {
      getPlayerInfo();
    }, 6000);
    // console.log("abc");
    return () => {
      clearInterval(repeat);
    };
    // console.log("aaaaaa");
  }, []);

  const repeat = async () => {
    setInterval(() => {
      getPlayerInfo();
    }, 10000);
  };

  // const x = async () => {
  //   const token = await getTokenFromApi();
  //   y(token);
  // };

  const [track, setTrack] = useState({
    SPOTIFY_CLIENT_ID: "c13e50cd23ec47d7945c7e8836a7758d",
    SPOTIFY_CLIENT_SECRET: "08e9733750c5401ca34bdd32c349ff38",
    SPOTIFY_REFRESH_TOKEN:
      "AQAkUe1--68_MPonGM-sFhSf5ZZ5hgDD6bWIzUCDYIGZFR007SpX-Fm2qVcfTfIaElDLVjWc1WH8kjvVtHQWo14tlNSrsw2IqGnrcQH6_FOWk3ja02ozA8Lf0YibgdFvN7Q",
  });

  const basic = Buffer.from(
    `${track.SPOTIFY_CLIENT_ID}:${track.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  const getAccessToken = async () => {
    // try {
    //   const { data } = await axios.post(
    //     TOKEN_ENDPOINT,
    //     {},
    //     {
    //       headers: {
    //         Authorization: `Basic ${basic}`,
    //         "Content-Type": "application/x-www-form-urlencoded",
    //       },
    //       body: querystring.stringify({
    //         grant_type: "refresh_token",
    //         refresh_token: track.SPOTIFY_REFRESH_TOKEN,
    //       }),
    //     }
    //   );
    //   // console.log(data[0].token);
    //   // setToken(data[0].token);
    //   // return data[0].token;
    //   console.log(data);
    // } catch (error) {
    //   console.error(error);
    // }
    // return;

    try {
      const params = new URLSearchParams();
      params.append("grant_type", "refresh_token");
      params.append("refresh_token", track.SPOTIFY_REFRESH_TOKEN);
      // let bodyFormData = new FormData();
      // bodyFormData.append("grant_type", "refresh_token");
      // bodyFormData.append("refresh_token", track.SPOTIFY_REFRESH_TOKEN);
      // console.log(bodyFormData);
      axios.defaults.headers = {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      };
      // const response = await axios.post(TOKEN_ENDPOINT, bodyFormData);
      const response = await axios.post(TOKEN_ENDPOINT, params);
      console.log(response);
      return response.data;
      // const response = await fetch(TOKEN_ENDPOINT, {
      //   method: "POST",
      //   headers: {
      //     Authorization: `Basic ${basic}`,
      //     "Content-Type": "application/x-www-form-urlencoded",
      //   },
      //   body: querystring.stringify({
      //     grant_type: "refresh_token",
      //     refresh_token: track.SPOTIFY_REFRESH_TOKEN,
      //   }),
      // });
      // return response.json();
    } catch (e) {
      console.error(e);
      return {};
    }
  };

  const getNowPlaying = async () => {
    try {
      const { access_token } = await getAccessToken();
      axios.defaults.headers = {
        Authorization: `Bearer ${access_token}`,
      };
      // const response = await fetch(NOW_PLAYING_ENDPOINT, {
      //   headers: {
      //     Authorization: `Bearer ${access_token}`,
      //   },
      // });
      const response = await axios.get(NOW_PLAYING_ENDPOINT);
      // console.log(response);
      // return response.json();
      return response.data;
    } catch (e) {
      return {};
    }
    // console.log(response.status);
  };

  const getPlayerInfo = async (_, res) => {
    // const response = await getNowPlaying();
    const response = await getNowPlaying();
    // console.log(response);
    // const songData = response.json();
    // // const status = response;
    // // const data = response.json();
    // console.log(response);
    // console.log(response.json());
    // return;

    if (response.hasOwnProperty("currently_playing_type")) {
      if (response.currently_playing_type === "track") {
        console.log("benar");
        const player = {
          isPlaying: response.is_playing,
          title: response.item.name,
          album: response.item.album.name,
          artist: response.item.album.artists
            .map((artist) => artist.name)
            .join(", "),
          albumImageUrl: response.item.album.images[0].url,
          songUrl: response.item.external_urls.spotify,
          progress: (response.progress_ms / response.item.duration_ms) * 100,
        };
        console.log(player);
        setPlayer(player);
      } else {
        console.log("salah");
        setPlayer({});
      }
    } else {
      console.log("salah");
      setPlayer({});
    }
    // return;

    // if (
    //   // response.status === 204 ||
    //   // response.status > 400 ||
    //   response.currently_playing_type !== "track"
    // ) {
    //   return res.status(200).json({ isPlaying: false });
    // }

    // const dataPlayer = {
    //   isPlaying: response.data.is_playing,
    //   title: response.data.item.name,
    //   album: response.data.item.album.name,
    //   artist: response.data.item.album.artists
    //     .map((artist) => artist.name)
    //     .join(", "),
    //   albumImageUrl: response.data.item.album.images[0].url,
    //   songUrl: response.data.item.external_urls.spotify,
    // };

    // res.status(200).json(dataPlayer);
  };

  const y = (token) => {
    // setInterval(async () => {
    //   getCurPlayer(token);
    // }, 10000);
  };

  const getTokenFromApi = async () => {
    try {
      const { data } = await axios.get(
        "https://spotify-token.netlify.app/.netlify/functions/api/token"
      );
      // console.log(data[0].token);
      // setToken(data[0].token);
      return data[0].token;
    } catch (error) {
      console.error(error);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const getCurPlayer = (token) => {
    spotify.setAccessToken(token);
    spotify.getMyCurrentPlayingTrack().then(
      function (data) {
        // console.log("User playlists", data);
        if (data.item.artists !== undefined) {
          let artists;
          data.item.artists.map((item, index) => {
            artists = index === 0 ? item.name : `${artists}, ${item.name}`;
          });
          setPlayer({
            albumImage: data.item.album.images[1].url,
            title: data.item.name,
            artists: artists,
            progressMs: data.progress_ms,
            duration_ms: data.item.duration_ms,
            value: (data.progress_ms / data.item.duration_ms) * 100,
            external_urls: data.item.external_urls.spotify,
          });
        } else {
          setPlayer({});
        }
      },
      function (err) {
        // console.error(err);
        setPlayer({});
      }
    );
  };

  return (
    <SlideFade in={pL} offsetY="40px">
      <Helmet>
        <title>Imam Hanafi</title>
      </Helmet>
      <Center>
        <Box
          d="flex"
          maxW="6xl"
          px={9}
          flexDir={{ base: "column-reverse", lg: "row" }}
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            flexDir="column"
            alignItems="flex-start"
            justifyContent="center"
            mr={{ base: 0, lg: 4 }}
            mb={{ base: 9, lg: 6 }}
          >
            <Text fontSize="5xl" fontWeight="bold">
              Hello there, I am Imam Hanafi
            </Text>
            <Text fontSize="xl" align="left" my="6">
              You can call me Imam. I am a Software Engineer, especially on Web
              things. Doing{" "}
              <Link as={ReactLink} to="/projects" color="yellow.400">
                some projects
              </Link>{" "}
              in the past until now. The ex-vice president of the internal
              learning community in the Information System Department named{" "}
              <Tooltip
                placement="bottom-start"
                label="Information System Community"
                aria-label="ISCOM"
              >
                <Link href="http://iscommu.com" isExternal color="yellow.400">
                  ISCOM
                </Link>
              </Tooltip>
              {"."}
            </Text>
            {player.title !== undefined && (
              <Box w={isLarger ? "50%" : "100%"} py={2} mb={2} mt={-4}>
                <Text mb={1}>I am currently listening to :</Text>
                <Tooltip
                  label={`Listen ${player.title} by ${player.artist} on Spotify`}
                  aria-label="Spotify"
                  gutter={16}
                  placement={isLarger ? "right" : "top-end"}
                >
                  <Flex
                    h="6rem"
                    p={2}
                    bg="gray.700"
                    borderRadius="md"
                    _hover={{ bg: "gray.600", cursor: "pointer" }}
                    onClick={() => window.open(player.songUrl)}
                  >
                    <Image
                      loading="lazy"
                      // objectFit="cover"
                      boxSize="5rem"
                      src={player.albumImageUrl}
                      alt="Imam Hanafi's avatar"
                    />
                    <Box w="100%" mx="1rem">
                      <Text fontWeight="bold" noOfLines={1}>
                        {player.title}
                      </Text>
                      <Text noOfLines={1}>{player.artist}</Text>
                      <Progress
                        mt={"1rem"}
                        value={player.progress}
                        colorScheme="yellow"
                        isAnimated={true}
                        hasStripe={true}
                      />
                    </Box>
                  </Flex>
                </Tooltip>
              </Box>
            )}

            <Text fontSize="xl" align="left">
              Maybe you want to know more about me? You can go{" "}
              <Link as={ReactLink} to="/about" color="yellow.400">
                here
              </Link>
              .
            </Text>
            <Text fontSize="xl" align="left">
              Or ask anything else? Get in touch with me on the{" "}
              <Link as={ReactLink} to="/contacts" color="yellow.400">
                contacts page
              </Link>
              {". "}
              <Icon
                color="gray.800"
                h="30px"
                w="30px"
                as={GiSecretDoor}
                _hover={{ color: "white", cursor: "pointer" }}
                onClick={() => onOpen()}
              />
            </Text>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Tooltip
              label="It's me, there is something hidden in this page"
              aria-label="Avatar"
              hasArrow
            >
              {false ? (
                <Image
                  loading="lazy"
                  objectFit="cover"
                  src={Avatar}
                  alt="Imam Hanafi's avatar"
                />
              ) : (
                <Image
                  my={9}
                  loading="lazy"
                  borderRadius="full"
                  maxW={{ base: "2xs", sm: "xs" }}
                  src={player.title !== undefined ? AvatarWMusic : AvatarMasked}
                  alt="Imam Hanafi's avatar"
                />
              )}
            </Tooltip>
          </Flex>
        </Box>
      </Center>

      <Center>
        <Box maxW="6xl" bg="gray.700" px="9" py="9" borderRadius="md">
          <Text fontSize="4xl" fontWeight="bold" mb="3">
            My Projects
          </Text>
          <Text fontSize="lg" mb="8">
            Here are my projects I have done at the past.
          </Text>
          <SimpleGrid columns={{ base: "1", md: "2" }} spacing={10}>
            <ProjectCards
              title="Forum Discussion App"
              tags="MERN, Serverless, PWA, Push Notification"
              desc={`FD-SIFO is my final project website in order to obtain my S.Kom. title. Built using MongoDB Atlas as database, ExpressJS and NodeJS as backend, ReactJS (can be installed as PWA) as frontend and supports real-time push notification using OneSignal helper. It took around 1 year to finish.`}
              image={FD_Sifo}
              link="https://fd-sifo.vercel.app"
            />
            <ProjectCards
              title="Simple Card App"
              tags="ReactJS, ExpressJS, MongoDB Atlas, Serverless, React-Spring"
              desc={`Simple Card App is a custom CRUD MERN app built with React-Spring in my spare time. Built using MongoDB Atlas as database, ExpressJS and NodeJS as backend, and ReactJS as frontend. This website stores some cards used for greeting people, your loved ones, or something else. It supports custom background, color, text, highlight and many more.`}
              image={CardApp}
              link="https://card-from-imamhanafi.vercel.app"
            />
          </SimpleGrid>
          <Flex justifyContent="flex-end" mt="10">
            <Button
              as={ReactLink}
              to="/projects"
              rightIcon={<ArrowForwardIcon />}
              colorScheme="gray"
              variant="solid"
            >
              <Text fontWeight="bold">View all projects</Text>
            </Button>
          </Flex>
        </Box>
      </Center>

      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <Helmet>
          <title>Secret – Imam Hanafi</title>
        </Helmet>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              You're trapped 😆 , refresh the page to leave or press 'Esc'
            </DrawerHeader>
            <DrawerBody>
              <Center>
                <Tooltip
                  placement="bottom"
                  hasArrow
                  label="Shht, there was lots of my owner's secrets on his Simple Note App. Go check for it..."
                  aria-label="CAT"
                >
                  <Image src={cat} loading="lazy" alt="Imam Hanafi's cat" />
                </Tooltip>
              </Center>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </SlideFade>
  );
};

export default Home;
