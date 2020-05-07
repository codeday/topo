/* eslint-disable global-require */
export default (...args) => [
  require('./header'),
  require('./buttons'),
  require('./titles'),
  require('./text'),
  require('./fields'),
  require('./layout'),
].map((f) => f.default(...args)).join(' ').replace(/\n/g, ' ');
