import { defaultUsername } from '../constants.js';

export const getUsername = () => {
  const args = process.argv.slice(2);

  if (args[0] !== '--') {
    return defaultUsername;
  }

  const splitArg = args[1].split('=');

  if (splitArg[0] !== '--user') {
    return defaultUsername;
  }

  return splitArg[1];
};
