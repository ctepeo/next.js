import { EnAppNavigation } from './app/navigation/en.navigation.lang';
import { EnAppCommon } from './app/common/en.common.lang';
import { EnApp } from './app/en.app.lang';
export const messages: Record<string, unknown> = {
  app: {
    ...EnApp,
    common: EnAppCommon,
    navigation: EnAppNavigation,
  },
};
