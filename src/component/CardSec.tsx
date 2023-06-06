import { Stack, Text, Button } from "@chakra-ui/react";
import { FcLock } from "react-icons/fc";

const CardSec = () => {
  return (
    <Stack p="16" boxShadow="lg" mb="16" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Your Privacy</Text>
        <FcLock />
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
          We use cookies and similar technologies to help personalise content,
          tailor and measure ads, and provide a better experience. By clicking
          OK or turning an option on in Cookie Preferences, you agree to this,
          as outlined in our Cookie Policy. To change preferences or withdraw
          consent, please update your Cookie Preferences.
        </Text>
        <Stack direction={{ base: "column", md: "row" }}>
          <Button variant="outline" colorScheme="orange">
            Cookie Preferences
          </Button>
          <Button colorScheme="orange">OK</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardSec;
