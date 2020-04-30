export default ({
  space, colors, fonts, radii,
}) => ({
  hljs: {
    display: 'block',
    overflowX: 'auto',
    padding: space[2],
    background: 'white',
    color: colors.black,
    fontFamily: fonts.mono,
    backgroundColor: colors.gray[50],
    borderRadius: radii.sm,
    borderWidth: '1px',
    borderColor: colors.gray[100],
  },
  'hljs-comment': {
    color: colors.gray[500],
  },
  'hljs-quote': {
    color: colors.green[700],
  },
  'hljs-variable': {
    color: colors.teal[600],
  },
  'hljs-keyword': {
    color: colors.purple[600],
  },
  'hljs-selector-tag': {
    color: colors.indigo[600],
  },
  'hljs-built_in': {
    color: colors.indigo[600],
  },
  'hljs-name': {
    color: colors.indigo[600],
  },
  'hljs-tag': {
    color: colors.indigo[600],
  },
  'hljs-string': {
    color: colors.green[600],
  },
  'hljs-title': {
    color: colors.red[800],
  },
  'hljs-section': {
    color: colors.red[800],
  },
  'hljs-attribute': {
    color: colors.red[800],
  },
  'hljs-literal': {
    color: colors.orange[600],
  },
  'hljs-template-tag': {
    color: colors.orange[600],
  },
  'hljs-template-variable': {
    color: colors.red[800],
  },
  'hljs-type': {
    color: colors.red[800],
  },
  'hljs-addition': {
    color: colors.red[800],
  },
  'hljs-deletion': {
    color: colors.cyan[800],
  },
  'hljs-selector-attr': {
    color: colors.cyan[800],
  },
  'hljs-selector-pseudo': {
    color: colors.cyan[800],
  },
  'hljs-meta': {
    color: colors.cyan[800],
  },
  'hljs-doctag': {
    color: colors.gray[800],
  },
  'hljs-attr': {
    color: colors.red[800],
  },
  'hljs-symbol': {
    color: colors.purple[800],
  },
  'hljs-bullet': {
    color: colors.purple[800],
  },
  'hljs-link': {
    color: colors.blue[500],
  },
  'hljs-emphasis': {
    fontStyle: 'italic',
  },
  'hljs-strong': {
    fontWeight: 'bold',
  },
});
