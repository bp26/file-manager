import { createInterface } from 'readline';
import { stdin, stdout } from 'process';
import Model from './App/Model.js';
import Controller from './App/Controller.js';

const init = () => {
  console.log(`Welcome to the File Manager, ${Model.username}!`);
  console.log(`You are currently in ${Model.directory}`);

  const rl = createInterface(stdin, stdout);

  rl.on('line', async (input) => {
    if (input === '.exit') {
      process.exit();
    }
    rl.pause();
    await Controller.runCommand(input);
    rl.resume();
  });

  process.on('SIGINT', () => {
    process.exit();
  });

  process.on('exit', () => {
    console.log(
      `Thank you for using File Manager, ${Model.username}, goodbye!`
    );
  });
};

init();
