import NavigationService from './Services/NavigationService.js';

class Controller {
  async runCommand(command) {
    switch (command) {
      case 'up':
        break;
      case 'ls':
        await NavigationService.listFiles();
        break;
      default:
        console.log('Invalid input');
        break;
    }
  }
}

export default new Controller();
