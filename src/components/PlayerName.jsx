import { Flex } from "@radix-ui/themes";
import ReactCountryFlag from "react-country-flag";
import { useAtom } from "jotai";
import { selectedPlayerAtom } from "../utils";
import { useState } from "preact/compat";

export function PlayerName({ user, isLeaderboard }) {
  const [, setSelectedPlayer] = useAtom(selectedPlayerAtom);
  const [hovered, setHovered] = useState(false);

  return (
    <Flex
      align="center"
      onMouseEnter={setHovered(true)}
      justify="center"
      gapX="2"
      onClick={
        isLeaderboard
          ? () => {
              setSelectedPlayer(user);
            }
          : null
      }
      style={{ cursor: hovered ? "pointer" : "crosshair" }}>
      {user.country ? (
        <ReactCountryFlag
          countryCode={user.country}
          style={{ width: "1.696969420420rem", height: "1rem" }}
          svg
        />
      ) : null}
      {user.nickname}
    </Flex>
  );
}
