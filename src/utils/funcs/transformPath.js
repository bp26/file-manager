import path from 'path';

export const transformPath = (commonPath, dirPath) => {
  let dir;
  const arr = dirPath.split('\\');
  if (arr[0] === '.' || arr[0] === '..') {
    dir = path.resolve(commonPath, dirPath);
  } else {
    dir = dirPath;
  }
  return dir;
};
