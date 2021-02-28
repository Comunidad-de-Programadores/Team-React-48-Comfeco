import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

function MiddleSection() {
  return (
    <Box bg="blueviolet" h="27rem">
      <Box display="flex">
        <Box>
          <span>Icon</span>
          <span>Perfil</span>
        </Box>
        <Box>
          <span>Icon</span>
          <span>Perfil</span>
        </Box>
        <Box>
          <span>Icon</span>
          <span>Perfil</span>
        </Box>
        <Box>
          <span>Icon</span>
          <span>Perfil</span>
        </Box>
      </Box>
      <Box>
        <p>Actividades recientes:</p>
        <Box>
          <Box>
            <p>19 Febrero, 2021</p>
            <Box display="flex">
              <Text>Te has Unido al evento Community Fest and Code</Text>
              <Button>ver evento</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MiddleSection;
