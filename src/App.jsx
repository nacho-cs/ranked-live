import { Navbar } from "./components/Navbar";
import { Container, Flex } from "@radix-ui/themes";
import { Leaderboard } from "./components/PlayerLeaderboard";
import { TwitchPlayer } from "./components/TwitchPlayer";
import { useAtom } from "jotai";
import { selectedPlayerAtom } from "./utils";

export function App() {
  const [selectedPlayer] = useAtom(selectedPlayerAtom);

  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <Container>
        <Flex justify="between" width="100%">
          <Leaderboard />
          {selectedPlayer !== "" ? (
            <Flex direction="column" gapY="5" align="end">
              <TwitchPlayer user={selectedPlayer} />
            </Flex>
          ) : null}
        </Flex>
      </Container>
    </>
  );
}
