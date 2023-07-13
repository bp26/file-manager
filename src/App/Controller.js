import Model from './Model.js';
import NavigationService from './Services/NavigationService.js';

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
          await NavigationService.goToDirectory(arr[1]);
          break;
        default:
          console.log('Invalid input');
          break;
      }
    } catch (error) {
      //console.log('Operation failed');
      console.log(error);
    } finally {
      console.log(Model.directory);
    }
  }
}

export default new Controller();
