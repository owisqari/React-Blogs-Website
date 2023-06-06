import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

const HeroSec = () => {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            GamePivot <br />
            <Text as={"span"} color={"orange.600"}>
              Find out more
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            GamePivot is where you can find approachable video game coverage
            anyone can enjoy. Video game coverage, Gaming News, Jobs for Gamers,
            Gaming
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"orange"}
              bg={"orange.600"}
              color={"white"}
              rounded={"full"}
              px={6}
              as={"a"}
              href={"/games"}
              _hover={{
                bg: "orange.700",
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default HeroSec;
