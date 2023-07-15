import Model from './Model.js';
import FileService from './Services/FileService.js';
import NavigationService from './Services/NavigationService.js';
import SystemService from './Services/SystemService.js';
import HashService from './Services/HashService.js';
import CompressService from './Services/CompressService.js';

class Controller {
  async runCommand(command) {
    const arr = command.split(' ');
    const baseCommand = arr[0];
    try {
      switch (baseCommand) {
        case 'up':
          NavigationService.exitDirectory();
          break;

        case 'ls':
          await NavigationService.listFiles();
          break;

        case 'cd':
          if (!arr[1]) {
            this.printInvalid();
            break;
          }
          await NavigationService.goToDirectory(arr[1]);
          break;

        case 'cat':
          if (!arr[1]) {
            this.printInvalid();
            break;
          }
          await FileService.readFile(arr[1]);
          break;

        case 'add':
          if (!arr[1]) {
            this.printInvalid();
            break;
          }
          await FileService.createFile(arr[1]);
          break;

        case 'rn':
          if (!arr[1] || !arr[2]) {
            this.printInvalid();
            break;
          }
          await FileService.renameFile(arr[1], arr[2]);
          break;

        case 'cp':
          if (!arr[1] || !arr[2]) {
            this.printInvalid();
            break;
          }
          await FileService.copyFile(arr[1], arr[2]);
          break;

        case 'mv':
          if (!arr[1] || !arr[2]) {
            this.printInvalid();
            break;
          }
          await FileService.moveFile(arr[1], arr[2]);
          break;

        case 'rm':
          if (!arr[1]) {
            this.printInvalid();
            break;
          }
          await FileService.removeFile(arr[1]);
          break;

        case 'os':
          if (!arr[1]) {
            this.printInvalid();
            break;
          }
          switch (arr[1]) {
            case '--EOL':
              SystemService.getEOL();
              break;
            case '--cpus':
              SystemService.getCPU();
              break;
            case '--homedir':
              SystemService.getHomedir();
              break;
            case '--username':
              SystemService.getSystemUsername();
              break;
            case '--architecture':
              SystemService.getArchitecture();
              break;
            default:
              this.printInvalid();
              break;
          }
          break;

        case 'hash':
          if (!arr[1]) {
            this.printInvalid();
            break;
          }
          await HashService.calculateHash(arr[1]);
          break;

        case 'compress':
          if (!arr[1] || !arr[2]) {
            this.printInvalid();
            break;
          }
          await CompressService.compress(arr[1], arr[2]);
          break;

        case 'decompress':
          if (!arr[1] || !arr[2]) {
            this.printInvalid();
            break;
          }
          await CompressService.decompress(arr[1], arr[2]);
          break;

        default:
          this.printInvalid();
          break;
      }
    } catch (error) {
      console.log('Operation failed');
    } finally {
      console.log(`You are currently in ${Model.directory}`);
    }
  }

  printInvalid() {
    console.log('Invalid input');
  }
}

export default new Controller();
