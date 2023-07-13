import { createInterface } from 'readline';
import { stdin, stdout } from 'process';
import { getUsername } from './utils/funcs/getUsername.js';
import Model from './App/Model.js';
import Controller from './App/Controller.js';

const init = () => {
  console.log(`Welcome to the File Manager, ${Model.userName}!`);
  console.log(Model.directory);

  const rl = createInterface(stdin, stdout);

  rl.on('line', async (input) => {
    rl.pause();
    await Controller.runCommand(input);
    rl.resume();
  });
};

init();
