import os from 'os';

class SystemService {
  getEOL() {
    console.log(JSON.stringify(os.EOL));
  }

  getCPU() {
    console.log(os.cpus());
  }

  getHomedir() {
    console.log(os.homedir());
  }

  getSystemUsername() {
    console.log(os.userInfo().username);
  }

  getArchitecture() {
    console.log(os.arch());
  }
}

export default new SystemService();
