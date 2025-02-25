import React from "react";
import { Container, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { SiGit, SiCss3, SiHtml5, SiTailwindcss, SiPython, SiFlask, SiMysql, SiFastapi } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

const items = [
  {
    name: "React JS",
    link: "https://reactjs.org",
    icon: <RiReactjsFill size="65" />,
  },
  {
    name: "Python",
    link: "https://www.python.org/",
    icon: <SiPython size="65" />,
  },
  {
    name: "Flask",
    link: "https://flask.palletsprojects.com/en/stable/",
    icon: <SiFlask size="65" />,
  },
  {
    name: "MySql",
    link: "https://www.mysql.com/",
    icon: <SiMysql size="65" />,
  },
  {
    name: "Fastapi",
    link: "https://fastapi.tiangolo.com/",
    icon: <SiFastapi size="65" />,
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com",
    icon: <SiTailwindcss size="65" />,
  },
  {
    name: "Bootstrap",
    link: "https://getbootstrap.com/",
    icon: <FaBootstrap size="65" />,
  },
  { 
    name: "Git", 
    link: "https://git-scm.com", 
    icon: <SiGit size="55" /> ,
  },
  {
    name: "Html5",
    link: "https://www.w3schools.com/html/",
    icon: <SiHtml5 size="65" />,
  },

  {
    name: "CSS3",
    link: "https://www.w3schools.com/css/",
    icon: <SiCss3 size="55" />,
  },
];

const Technologies = () => {
  return (
    <Container maxW="6xl" py="36">
      <Text
        fontSize={{ base: "1.7rem", md: "2.2rem" }}
        maxW="550"
        fontWeight="medium"
      >
        A few technologies I've been working with recently
      </Text>
      <SimpleGrid
        display={{ base: "grid", md: "none" }}
        columns={{ base: 3, md: 6 }}
        spacing="10"
        mt="20"
        textAlign="center"
      >
        {items.map((item, index) => {
          return (
            <Flex
              as="a"
              href={item.link}
              target="_blank"
              key={index}
              title={item.name}
              align="center"
              opacity=".9"
              transform="scale(.9)"
            >
              {item.icon}
            </Flex>
          );
        })}
      </SimpleGrid>
      <VStack
        display={{ base: "none", md: "flex" }}
        spacing="10"
        align="stretch"
        mt="20"
      >
        <Flex direction="row" justify="space-between" align="center">
          {items.slice(0, 6).map((item, index) => (
            <Flex
              as="a"
              href={item.link}
              target="_blank"
              key={index}
              title={item.name}
              opacity=".9"
            >
              {item.icon}
            </Flex>
          ))}
        </Flex>
        <Flex direction="row" justify="space-between" align="center">
          {items.slice(6, 12).map((item, index) => (
            <Flex
              as="a"
              href={item.link}
              target="_blank"
              key={index}
              title={item.name}
              opacity=".9"
            >
              {item.icon}
            </Flex>
          ))}
        </Flex>
      </VStack>
    </Container>
  );
};

export default Technologies;
