import path from 'path';

export const transformPath = (commonPath, dirPath) => {
  return path.isAbsolute(dirPath) ? dirPath : path.resolve(commonPath, dirPath);
};
