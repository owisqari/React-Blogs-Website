import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcReadingEbook, FcReading, FcShare } from "react-icons/fc";

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
          icon={<Icon as={FcReadingEbook} w={10} h={10} />}
          title={"Writing Blogs"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Features
          icon={<Icon as={FcReading} w={10} h={10} />}
          title={"Reading Blogs"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Features
          icon={<Icon as={FcShare} w={10} h={10} />}
          title={"Sharing Blogs"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
      </SimpleGrid>
    </Box>
  );
};

export default Feature;
