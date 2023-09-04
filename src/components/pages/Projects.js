import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { SlideFade, Box, Text, SimpleGrid, Center } from "@chakra-ui/react";

import MamentApp from "../images/mament.png";
import Sigud from "../images/sigud.png";
import TamanZakat from "../images/tamanzakat.png";
import Note from "../images/note.png";
import FD_Sifo from "../images/fd-sifo.png"
import CardApp from "../images/card.png"

import ProjectCards from "../ProjectCards";

const Projects = () => {
  const [pL, setPL] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPL(true);
  }, []);

  return (
    <SlideFade in={pL} offsetY="40px">
      <Helmet>
        <title>Projects – Imam Hanafi</title>
      </Helmet>
      <Center>
        <Box maxW="6xl" bg="gray.700" px="9" py="9" borderRadius="md">
          <Text fontSize="4xl" fontWeight="bold" mb="3">
            My Projects
          </Text>
          <Text fontSize="lg" mb="8">
             Here are the projects I have done in the past.
          </Text>
          <SimpleGrid columns={{ base: "1", md: "2" }} spacing={10}>
            <ProjectCards
              title="MamentApp"
              tags="ASP.NET, C#, MVC5, EF6, Razor, SQL Server"
              desc={`MaMentApp (Matrix Management App) is a knowledge management system I built for my internship program in PT PERTAMINA MOR V. Built using C# in ASP.NET, MVC5 as MVC framework, EF6 for model mapper, and Razor View Engine for view.`}
              image={MamentApp}
            />
            <ProjectCards
              title="SIGUD"
              tags="ADMINLTE 3, PHP, jQuery, AJAX, MySQL"
              desc={`SIGUD (Sistem Informasi Pergudangan) is a simple warehouse management system built using AdminLTE 3 framework and jQuery for the client side and php native for the server side as a demo to fulfill my college course "Human-Computer Interaction".`}
              image={Sigud}
            />
            <ProjectCards
              title="Taman Zakat"
              tags="ADMINLTE 2, PHP, jQuery, AJAX, MySQL"
              desc={`Taman Zakat is a complex donation and payroll system that I've built as my first real project between my team and client. Built using php native, AdminLTE 2 framework and so many JavaScript libraries in it. My team has 3 members, my friend and I are contributing as programmers and my lecturer is contributing as project manager.`}
              image={TamanZakat}
            />
            <ProjectCards
              title="Simple Note"
              tags="ReactJS, ExpressJS, MongoDB Atlas, Serverless"
              desc={`Simple Note is my first MERN stack website. Built using MongoDB Atlas as database, ExpressJS and NodeJS as backend, and ReactJS as frontend. This site stores some notes. I got tired of transferring long texts from my phone to my PC and vice versa. So I've built this website to simplify that.`}
              image={Note}
            />
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
        </Box>
      </Center>
    </SlideFade>
  );
};

export default Projects;
