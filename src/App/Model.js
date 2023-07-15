import { getUsername } from '../utils/funcs/getUsername.js';
import { homedir } from 'os';

class Model {
  constructor() {
    this.username = getUsername();
    this.directory = homedir();
  }
}

export default new Model();
