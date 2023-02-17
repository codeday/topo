import { ComponentWithAs } from "@chakra-ui/react";
import { makePureBox } from "topo/_utils";
import {BoxProps} from "topo/Atom";

export const Main: ComponentWithAs<"div", BoxProps> = makePureBox("Main", { role: "main" });
