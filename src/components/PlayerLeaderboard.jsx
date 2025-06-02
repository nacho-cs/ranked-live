import { Table } from "./Table.jsx";
import { Loading } from "./Loading.jsx";
import { fetcher,  } from "../utils";
import useSWR from "swr";
import uniqBy from "lodash.uniqby";
import sortBy from "lodash.sortby";
import { useAtom } from "jotai";
import { PlayerName } from "./PlayerName.jsx";

export function Leaderboard() {
  const { data, isLoading } = useSWR(
    "https://api.mcsrranked.com/live",
    fetcher
  );

  if (isLoading) return <Loading />;
  const {
    data: { liveMatches },
  } = data;

  let users = liveMatches.reduce((accum, curr) => {
    console.log(accum);
    return accum.concat(curr.players);
  }, []);
  users = uniqBy(sortBy(users, "eloRank"), "uuid");

  return (
    <Table
      headers={["Place", "Player", "Elo"]}
      data={users.map(user => [
        user.eloRank,
        <PlayerName
          user={user}
          isLeaderboard
        />,
        user.eloRate,
      ])}
    />
  );
}
