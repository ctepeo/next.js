import { EnAppNavigation } from './app/navigation/en.navigation.lang';
import { EnAppCommon } from './app/common/en.common.lang';
import { EnApp } from './app/en.app.lang';
import { EnPage404 } from './app/page/en.404.lang';
export const messages: Record<string, unknown> = {
  app: {
    ...EnApp,
    common: EnAppCommon,
    navigation: EnAppNavigation,
    page: {
      404: EnPage404,
    },
  },
};
