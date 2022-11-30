export class OnStartService implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      // some code init
      this.inited = true;
    }
  };
}
