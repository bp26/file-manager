import { getUsername } from '../utils/funcs/getUsername.js';
import { homedir } from 'os';

class Model {
  constructor() {
    this.userName = getUsername();
    this.directory = homedir();
  }
}

export default new Model();
