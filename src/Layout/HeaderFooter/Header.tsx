import React from "react";
import { MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FilterIcon, LightBulbIcon } from "../../styles/icons";

const Header: React.FC = () => {
  const bgColor = useColorModeValue("whitesmoke", "gray.500");
  const { toggleColorMode } = useColorMode();
  const themeIcon = useColorModeValue(<MoonIcon />, <LightBulbIcon />);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box position="fixed" w="100%" zIndex="1" backgroundColor={bgColor}>
      <Container
        maxW={"xl"}
        py={4}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button
          variant={"ghost"}
          fontSize={"xl"}
          onClick={scrollToTop}
        >
          NCERT BOOKS
        </Button>
        <Box>
          <IconButton
            ml={1}
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle theme"
            icon={themeIcon}
          />
          <IconButton
            ml={1}
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle theme"
            icon={themeIcon}
          />
        </Box>
      </Container>
    </Box>
  );
};
export default Header;
