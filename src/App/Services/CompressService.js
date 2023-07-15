import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import { transformPath } from '../../utils/funcs/transformPath.js';
import Model from '../Model.js';

class CompressService {
  async compress(filepath, dirPath) {
    const newFilepath = transformPath(
      Model.directory,
      [dirPath, filepath.split('\\').at(-1)].join('\\')
    );
    await pipeline(
      createReadStream(transformPath(Model.directory, filepath)),
      zlib.createGzip(),
      createWriteStream(newFilepath)
    );
  }

  async decompress(filepath, dirPath) {
    const newFilepath = transformPath(
      Model.directory,
      [dirPath, filepath.split('\\').at(-1)].join('\\')
    );
    await pipeline(
      createReadStream(transformPath(Model.directory, filepath)),
      zlib.createUnzip(),
      createWriteStream(newFilepath)
    );
  }
}

export default new CompressService();
