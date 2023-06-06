import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
const HomeFooter = () => {
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Stack direction={"row"} spacing={6}>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/games"}>Games</Link>
            <Link href={"http://owisbukhari@gmail.com"}>Contact</Link>
          </Stack>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text>© 2022 Owis Bukhari. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Twitter"}
                href={"https://twitter.com/OwisBukhari"}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"Linkedin"}
                href={"https://www.linkedin.com/in/owis-bukhari-6a6b44184/"}
              >
                <FaLinkedin />
              </SocialButton>
              <SocialButton
                label={"FaGithub"}
                href={"https://github.com/owisqari"}
              >
                <FaGithub />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default HomeFooter;
