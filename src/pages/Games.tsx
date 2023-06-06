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
    const url = "https://steam2.p.rapidapi.com/search/Counter/page/2";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fffd559ce7msh64ef6fcb382e2a2p1b682ejsn21e409321a98",
        "X-RapidAPI-Host": "steam2.p.rapidapi.com",
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
