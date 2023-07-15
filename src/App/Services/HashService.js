import fs from 'fs/promises';
import crypto from 'crypto';
import { transformPath } from '../../utils/funcs/transformPath.js';
import Model from '../Model.js';

class HashService {
  async calculateHash(filepath) {
    const file = await fs.readFile(transformPath(Model.directory, filepath));
    const hash = crypto.createHash('sha256');
    hash.update(file);
    const hex = hash.digest('hex');
    console.log(hex);
  }
}

export default new HashService();
