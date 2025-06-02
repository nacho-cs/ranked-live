import { Flex, Box, Heading, Link, Text } from "@radix-ui/themes";

function Navbar() {
  return (
    <Box>
      <Flex align="center" justify="between" py="3">
        <Heading as="h3" weight="regular">
          Ranked Live
        </Heading>
        <Flex justify="between" gap="4">
          <Link href="https://github.com/nacho-cs/ranked-live">
            <Text as="span">Github</Text>
          </Link>
          <Link href="https://mcsrranked.com">MCSR Ranked Website</Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export { Navbar };
