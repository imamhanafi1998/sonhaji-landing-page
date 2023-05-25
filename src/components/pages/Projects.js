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
            Here are my projects I have done at the past.
          </Text>
          <SimpleGrid columns={{ base: "1", md: "2" }} spacing={10}>
            <ProjectCards
              title="MamentApp"
              tags="ASP.NET, C#, MVC5, EF6, Razor, SQL Server"
              desc={`MaMentApp (Matrix Management App) is a Knowledge Management System I've built for my internship program in PT PERTAMINA MOR V. Built using C# in ASP.NET, MVC5 as MVC framework, EF6 for model mapper and Razor View Engine for view.`}
              image={MamentApp}
            />
            <ProjectCards
              title="SIGUD"
              tags="ADMINLTE 3, PHP, jQuery, AJAX, MySQL"
              desc={`SIGUD (Sistem Informasi Pergudangan) is a Simple Warehouse Management System, built using AdminLTE 3 framework and jQuery for client-side and php native for server-side as demo for fulfilling my college course "Human-Computer Interaction".`}
              image={Sigud}
            />
            <ProjectCards
              title="Taman Zakat"
              tags="ADMINLTE 2, PHP, jQuery, AJAX, MySQL"
              desc={`Taman Zakat is Complex Donation and Payroll System that I've built as my first real project between my team and client. Built using php native, AdminLTE 2 framework and so many JavaScript library inside it. My team has 3 members, my friend and I are contributing as Programmer and my lecturer is contributing as Project Manager. But for some reasons, me and my friend decided to resign, so this project is going to be abandoned, maybe....`}
              image={TamanZakat}
            />
            <ProjectCards
              title="Simple Note"
              tags="ReactJS, ExpressJS, MongoDB Atlas, Serverless"
              desc={`Simple Note is my first MERN stack website. Build using MongoDB Atlas as database, ExpressJS and NodeJS as backend and ReactJS as frontend. This website stores some notes. I got tired for transfering long text from my phone into my PC, and the reverse is just as true. So I've built this website for simplifying that.`}
              image={Note}
              link="https://note-fe.vercel.app"
            />
            <ProjectCards
              title="Forum Discussion App"
              tags="MERN, Serverless, PWA, Push Notification"
              desc={`FD-SIFO is my final project website in order to obtain my S.Kom. title. Build using MongoDB Atlas as database, ExpressJS and NodeJS as backend, ReactJS (can be installed as PWA) as frontend and supports realtime push notification using OneSignal helper. Btw it tooks around 1 year to finish.`}
              image={FD_Sifo}
              link="https://fd-sifo.vercel.app"
            />
            <ProjectCards
              title="Simple Card App"
              tags="ReactJS, ExpressJS, MongoDB Atlas, Serverless, React-Spring"
              desc={`Simple Card App is customized CRUD MERN app with React-Spring built in my spare time. Build using MongoDB Atlas as database, ExpressJS and NodeJS as backend and ReactJS as frontend. This website stores some cards used for greeting peoples you loved one, or something else. It supports custom background, color, text, highlight and many more.`}
              image={CardApp}
              link="https://card-from-imam-hanafi.vercel.app"
            />
          </SimpleGrid>
        </Box>
      </Center>
    </SlideFade>
  );
};

export default Projects;
