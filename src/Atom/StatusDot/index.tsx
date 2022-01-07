import PropTypes from "prop-types";
import { Box, BoxProps } from "topo/Atom";
import { withProps } from "recompose";

interface StatusDotProps {
  size?: number | string;
  online?: boolean;
  away?: boolean;
  pending?: boolean;
  offline?: boolean;
}

const StatusDot = withProps<any, StatusDotProps>((props: StatusDotProps) => ({
  width: props.size || 3,
  height: props.size || 3,
  display: "inline-block",
  bg:
    (props.online && "green.500") ||
    ((props.away || props.pending) && "orange.400") ||
    "red.600",
  borderRadius: "full",
  title:
    (props.online && "online") ||
    (props.away && "away") ||
    (props.pending && "pending") ||
    "offline",
}))(Box);

StatusDot.displayName = "StatusDot";

export { StatusDot, StatusDotProps };
