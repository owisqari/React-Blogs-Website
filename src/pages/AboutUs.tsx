import NavBar from "../component/NavBar";
import HomeFooter from "../component/HomeFooter";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import Feature from "../component/Feature";
const AboutUs = () => {
  return (
    <>
      <NavBar />
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={6}
      >
        <Image
          boxSize="250px"
          borderRadius="20px"
          objectFit="cover"
          w={{ base: "full", md: "auto", lg: "auto" }}
          mb={4}
          src="https://img.freepik.com/premium-vector/orange-wolf-esport-logo-wolf-esport-logo-is-orange_572499-163.jpg"
          alt="blog logo"
        />
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={6}
          mb={6}
        >
          <Heading size="lg" mb={4} color={"orange.500"}>
            About Us
          </Heading>
          <Text
            w={{ base: "100%", md: "75%", lg: "50%" }}
            textAlign="center"
            h={{ base: "auto", md: "auto", lg: "auto" }}
            mb={4}
          >
            GamePivot is a website where gamers can come together to find
            information, share tips, and connect with other gamers. We believe
            that gaming is a great way to connect with people from all over the
            world, and we're committed to providing a platform where gamers can
            do just that.
          </Text>
          <Text>
            I'm a passionate gamers, and i'm always working to improve
            GamePivot. If you have any feedback or suggestions, please don't
            hesitate to reach out.
          </Text>
          <br />
        </Flex>
        <Feature />
      </Flex>
      <HomeFooter />
    </>
  );
};

export default AboutUs;
