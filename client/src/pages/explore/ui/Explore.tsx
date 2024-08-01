import {
  getAssetsByOwner,
  getCurrentEpoch,
  getSolanaSupply,
} from "@shared/api/solana/api";
import Container from "@shared/components/Container";
import SearchBar from "@features/SearchBar/ui/SearchBar";
import { useQuery } from "react-query";
import Hero from "@widgets/Hero/Hero";
import Stats from "@widgets/Stats/Stats";

const Explore = () => {
  return (
    <Container className="flex-grow">
      <Hero />
      <Stats />
    </Container>
  );
};

export default Explore;
