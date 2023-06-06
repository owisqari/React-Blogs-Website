import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  chakra,
  Image,
  useColorModeValue,
  useColorMode,
  Button,
} from "@chakra-ui/react";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
        >
          <HStack spacing={7} direction={"row"}>
            <Box>
              <Image
                boxSize="50px"
                borderRadius="full"
                objectFit="cover"
                src="https://img.freepik.com/premium-vector/orange-wolf-esport-logo-wolf-esport-logo-is-orange_572499-163.jpg"
                alt="blog logo"
              />
            </Box>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <chakra.a href={"/"}>Home</chakra.a>
              <chakra.a href={"/games"}>Games</chakra.a>
              <chakra.a href={"/about"}>About us</chakra.a>
            </HStack>
          </HStack>
          <HStack spacing={7} direction={"row"}>
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"/login"}
            >
              Sign In
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"orange.600"}
              href={"/signup"}
              _hover={{
                bg: "oarnge.700",
              }}
            >
              Sign Up
            </Button>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
