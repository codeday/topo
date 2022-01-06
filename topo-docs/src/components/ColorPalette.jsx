import React from "react";
import { Box } from "@codeday/topo/Atom";
import { useTheme } from "@codeday/topo/utils";

const ColorPalette = ({ color }) => {
  const { colors } = useTheme();
  return Object.keys(colors[color]).map((shade, index) => {
    if (isNaN(shade)) return <></>;
    return (
      <Box
        bg={`${color}.${shade}`}
        color={shade >= 500 ? "white" : "black"}
        fontSize="xl"
        textAlign="center"
        key={index}
      >
        {color}.{shade}&thinsp;&mdash;&thinsp;{colors[color][shade]}
      </Box>
    );
  });
};

export default ColorPalette;
