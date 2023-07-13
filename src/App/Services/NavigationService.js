import Model from '../Model.js';
import fs from 'fs/promises';
import path from 'path';
import { transformPath } from '../../utils/funcs/transformPath.js';

class NavigationService {
  async listFiles() {
    const files = await fs.readdir(Model.directory);
    const formatedFiles = await Promise.all(
      files.map(async (file) => {
        const filepath = path.join(Model.directory, file);
        const isFile = (await fs.stat(filepath)).isFile();
        return {
          Name: file,
          Type: isFile ? 'file' : 'directory',
        };
      })
    );
    console.table(formatedFiles);
  }

  exitDirectory() {
    if (Model.directory.split('\\').length !== 1) {
      const dir = path.normalize(
        Model.directory.split('\\').slice(0, -1).join('\\')
      );
      Model.directory = dir;
    }
  }

  async goToDirectory(path) {
    const dir = transformPath(Model.directory, path);
    await fs.readdir(dir);
    Model.directory = dir;
  }
}

export default new NavigationService();
