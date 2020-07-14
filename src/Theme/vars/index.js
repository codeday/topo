import { request } from 'graphql-request';
import colors from './colors';
import fonts from './fonts';

export default {
  colors,
  fonts,
  cognito: {
    // eslint-disable-next-line no-secrets/no-secrets
    id: '7hYXr3TPxk6yIpJxjqVoFQ',
  },
  api: 'https://graph.codeday.org/',
  apiFetch: (query) => request('https://graph.codeday.org/', query),
};
