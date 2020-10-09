import {Language} from '@react3l/react3l/services';
import {DMSGlobalState} from '../config/global';
import {getFontScale} from 'react-native-device-info';
import React from 'reactn';

export class GlobalStateRepository {
  public async initialize() {
    await React.setGlobal<DMSGlobalState>({
      language: Language.vi,
      fallbackLanguage: Language.vi,
      displayStatusbar: true,
      albumLoaded: false,
      unitOfMeasureLoading: {},
      taxTypeLoading: {},
      fontScale: await getFontScale(),
    });
  }

  public async setState(globalState: Partial<DMSGlobalState>) {
    await React.setGlobal<DMSGlobalState>(globalState);
  }
}

export const globalStateRepository: GlobalStateRepository = new GlobalStateRepository();
