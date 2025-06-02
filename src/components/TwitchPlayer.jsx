import { PlayerName } from "./PlayerName";
import { Text, Flex } from "@radix-ui/themes";
import Embed from "react-embed";
import { fetcher } from "../utils";
import useSWR from "swr";
import { Loading } from "./Loading";

export function TwitchPlayer({ user }) {
  const { data, isLoading } = useSWR(
    `https://api.mcsrranked.com/users/${user.uuid}`,
    fetcher
  );
  if (isLoading) return <Loading />;

  return (
    <Flex direction="column" gapY="2" align="start">
      <PlayerName user={user} />
      <Embed url={`https://twitch.tv/${data.data.connections.twitch.id}`} />
    </Flex>
  );
}
