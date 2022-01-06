// if we want to use this import structure

import * as Organism from "./Organism";
export { Menu as ButtomMenu } from "./Atom";
export * from "./Atom";
export * from "./Molecule";
export * from "./Theme";
export default { ...Organism };
