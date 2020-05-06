import PropTypes from 'prop-types';
import Box from 'topo/Atom/Box';
import { withProps } from 'recompose';

const StatusDot = withProps((props) => ({
  width: props.size || 3,
  height: props.size || 3,
  display: 'inline-block',
  bg: (props.online && 'green.500') || ((props.away || props.pending) && 'orange.400') || 'red.600',
  borderRadius: 'full',
  title: (props.online && 'online') || (props.away && 'away') || (props.pending && 'pending') || 'offline',
}))(Box);

StatusDot.displayName = 'StatusDot';
StatusDot.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  online: PropTypes.bool,
  away: PropTypes.bool,
  pending: PropTypes.bool,
  offline: PropTypes.bool,
};
StatusDot.defaultProps = {
  size: null,
  online: false,
  away: false,
  pending: false,
  offline: false,
};
export default StatusDot;
