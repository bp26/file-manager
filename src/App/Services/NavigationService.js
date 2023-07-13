import Model from '../Model.js';
import fs from 'fs/promises';

class NavigationService {
  async listFiles() {
    const files = await fs.readdir(Model.directory, { withFileTypes: true });
    const formatedFiles = await Promise.all(
      files.map(async (file) => {
        const isFile = (await fs.stat(file.path)).isFile();
        return {
          Name: file.name,
          Type: isFile ? 'file' : 'directory',
        };
      })
    );
    console.table(formatedFiles);
  }

  async 
}

export default new NavigationService();
