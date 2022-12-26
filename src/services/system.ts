import { restartApp } from '../core/utils/system';
export class SystemService implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      // some code init
      this.inited = true;
    }
  };

  public restartApp() {
    restartApp();
  }
}
