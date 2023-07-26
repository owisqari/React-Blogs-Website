import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import ModalCard from "./ModalCard";

interface IBlogCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  modalDescription: string;
}
const GameCard = (props: IBlogCardProps) => {
  return (
    <Wrap spacing="30px" marginTop="5">
      <WrapItem width={{ base: "30%", sm: "45%", md: "45%", lg: "100%" }}>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  src={props.image}
                  objectFit={"cover"}
                  w={"16rem"}
                  h={"8rem"}
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(orange.600 1px, transparent 1px)",
                  "radial(orange.300 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                {props.title}
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              {props.description}
            </Text>
          </Box>
          <ModalCard price={props.price} description={props.modalDescription} />
        </Box>
      </WrapItem>
    </Wrap>
  );
};

export default GameCard;
