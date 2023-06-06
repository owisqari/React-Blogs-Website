import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdGames, MdOutlineConnectWithoutContact } from "react-icons/md";

interface IFeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Features = ({ title, text, icon }: IFeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const Feature = () => {
  return (
    <Box mb={16} p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Features
          icon={<Icon as={MdGames} w={10} h={10} color={"black"} />}
          title={"Explore Games"}
          text={
            "The Explore Games feature allows users to browse through a wide selection of games, both new and old. Users can filter games by genre, platform, release date, and other criteria. They can also read reviews and watch trailers to learn more about the games that interest them."
          }
        />
        <Features
          icon={<Icon as={FaMoneyBillWave} w={10} h={10} color={"black"} />}
          title={"Buy Games"}
          text={
            "The Buy Games feature allows users to purchase games directly from the game hub website. Users can pay with a credit card, PayPal, or other supported payment method. Once a game has been purchased, it can be downloaded and installed on the user's computer or gaming console."
          }
        />
        <Features
          icon={
            <Icon
              as={MdOutlineConnectWithoutContact}
              w={10}
              h={10}
              color={"black"}
            />
          }
          title={"Connect With Gamers"}
          text={
            "The Connect to Gamers feature allows users to connect with other gamers who share their interests. Users can create a profile, join groups, and chat with other gamers. They can also participate in online tournaments and events."
          }
        />
      </SimpleGrid>
    </Box>
  );
};

export default Feature;
