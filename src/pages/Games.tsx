import NavBar from "../component/NavBar";
import GameCard from "../component/GameCard";
import HomeFooter from "../component/HomeFooter";
import { useState, useEffect } from "react";
import { Container, Heading, Divider, Flex, Text } from "@chakra-ui/react";

interface IGameCardProps {
  imgUrl: string;
  title: string;
  reviewSummary: string;
  price: string;
  released: string;
}
const Games = () => {
  const [game, setGames] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const getGames = async () => {
    setIsLoading(true);
    const url = import.meta.env.VITE_API_KEY;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_X_RAPIDAPI_HOST,
      },
    };

    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setGames(data);
      });
  };
  useEffect(() => {
    getGames();
  }, []);
  return (
    <>
      <NavBar />
      <Container maxW={"7xl"} p="12">
        <Heading as="h2" marginTop="5">
          Latest{" "}
          <Text as={"span"} color={"orange.600"}>
            Games
          </Text>
        </Heading>
        <Divider marginTop="5" />

        <Flex
          justifyContent={{ base: "center", md: "center", lg: "center" }}
          flexDirection={{ base: "column", md: "column", lg: "column" }}
          alignItems={{ base: "center", md: "center", lg: "center" }}
          width="100%"
        >
          {isLoading && <div>Loading...</div>}
          {game.map((game: IGameCardProps) => {
            return (
              <GameCard
                image={game.imgUrl}
                title={game.title}
                description={game.reviewSummary}
                price={game.price}
                modalDescription={game.released}
              />
            );
          })}
        </Flex>
      </Container>
      <HomeFooter />
    </>
  );
};
export default Games;
