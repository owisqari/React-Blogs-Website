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
            Blogs <br />
            <Text as={"span"} color={"orange.400"}>
              Find out more
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            A blog, short for weblog, is a frequently updated web page used for
            personal commentary or business content. Blogs are often interactive
            and include sections at the bottom of individual blog posts where
            readers can leave comments.
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
              bg={"orange.400"}
              rounded={"full"}
              px={6}
              as={"a"}
              href={"/blogs"}
              _hover={{
                bg: "orange.500",
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
