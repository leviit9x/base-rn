import RNRestart from 'react-native-restart';
import { MMKV } from 'react-native-mmkv';
import { SchemaThemeVariant, themeSchema, TypeofTheme } from '../../core';
import { API_CONFIG } from '../../core/api';

export class SystemService implements IService {
  private inited = false;
  private _storage: MMKV = new MMKV();
  private srcTheme!: TypeofTheme;

  init = async (): PVoid => {
    if (!this.inited) {
      // some code init
      this.initialThemeConfig();
      this.inited = true;
    }
  };

  private initialThemeConfig() {
    const themeKey = this.getThemeKeyStorage();
    this.srcTheme = themeSchema[themeKey];
  }

  private getThemeKeyStorage() {
    return (
      (this._storage.getString(
        API_CONFIG.STORAGE_THEME_KEY,
      ) as SchemaThemeVariant) || 'default'
    );
  }

  public setThemeMode(mode: SchemaThemeVariant) {
    const themePeek = themeSchema[mode];

    if (!themePeek) {
      throw new Error('Invalid key theme ' + mode);
    }
    this._storage.set(API_CONFIG.STORAGE_THEME_KEY, mode);
    this.srcTheme = themePeek;
    this.restartApp();
  }

  public restartApp() {
    RNRestart.Restart();
  }

  public getSourceTheme(): TypeofTheme {
    return this.srcTheme;
  }

  public getModeVariants(): SchemaThemeVariant[] {
    return ['default', 'light'];
  }
}
