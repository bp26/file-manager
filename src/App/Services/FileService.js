import { createReadStream, createWriteStream } from 'fs';
import Model from '../Model.js';
import { transformPath } from '../../utils/funcs/transformPath.js';
import fs from 'fs/promises';
import { pipeline } from 'stream/promises';

class FileService {
  async readFile(path) {
    return new Promise((resolve) => {
      const rs = createReadStream(transformPath(Model.directory, path));
      let data = '';
      rs.on('data', (chunk) => {
        data += chunk.toString();
      });
      rs.on('end', () => {
        console.log(data);
        resolve();
      });
    });
  }

  async createFile(path) {
    await fs.writeFile(transformPath(Model.directory, path), '');
  }

  async renameFile(path, name) {
    const filepath = transformPath(Model.directory, path);
    const newFilepath = [
      filepath.split('\\').slice(0, -1).join('\\'),
      name,
    ].join('\\');
    await fs.rename(filepath, newFilepath);
  }

  async copyFile(filepath, dirPath) {
    const newFilepath = transformPath(
      Model.directory,
      [dirPath, filepath.split('\\').at(-1)].join('\\')
    );
    const rs = createReadStream(transformPath(Model.directory, filepath));
    const ws = createWriteStream(newFilepath);
    await pipeline(rs, ws);
  }

  async removeFile(filepath) {
    await fs.rm(transformPath(Model.directory, filepath));
  }

  async moveFile(filepath, dirPath) {
    await this.copyFile(filepath, dirPath);
    await this.removeFile(filepath);
  }
}

export default new FileService();
