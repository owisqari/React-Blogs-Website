import NavBar from "../component/NavBar";
import BlogCard from "../component/BlogCard";
import HomeFooter from "../component/HomeFooter";
import { Container, Heading, Divider, Flex } from "@chakra-ui/react";
const Blogs = () => {
  return (
    <>
      <NavBar />
      <Container maxW={"7xl"} p="12">
        <Heading as="h2" marginTop="5">
          Latest articles
        </Heading>
        <Divider marginTop="5" />

        <Flex
          justifyContent={{ base: "center", md: "center", lg: "center" }}
          flexDirection={{ base: "column", md: "column", lg: "column" }}
          alignItems={{ base: "center", md: "center", lg: "center" }}
          width="100%"
        >
          <BlogCard
            title="Study Abroad Blog"
            description="I bet you’re not looking at this upcoming wild adventure of studying abroad with CEA CAPA and thinking, “Wow! What a great experience to put on my résumé!” I can also guarantee that you’re not thinking about what professional experience you can earn and show off to the world like the brave, competent, and adventurous person you are. But there are some things you should think about moving forward so that you can highlight what you did and learned abroad in future job opportunities.  "
          />
          <BlogCard
            title="Crypto Blog"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae rem harum dignissimos optio numquam eveniet eum consectetur dolor, maiores ea atque autem temporibus tempore ratione, natus quam minus culpa odit."
          />
        </Flex>
      </Container>
      <HomeFooter />
    </>
  );
};
export default Blogs;
