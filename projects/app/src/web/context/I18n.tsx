import { createContext, useContextSelector } from 'use-context-selector';
import { useTranslation } from 'next-i18next';
import { TFunction } from 'i18next';

type I18nContextType = {
  commonT: TFunction<['common'], undefined>;
  appT: TFunction<['app'], undefined>;
  datasetT: TFunction<['dataset'], undefined>;
};

export const I18nContext = createContext<I18nContextType>({
  // @ts-ignore
  commonT: undefined
});

const I18nContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { t: commonT } = useTranslation('common');
  const { t: appT } = useTranslation('app');
  const { t: datasetT } = useTranslation('dataset');

  return (
    <I18nContext.Provider
      value={{
        commonT,
        appT,
        datasetT
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export default I18nContextProvider;

export const useI18n = () => {
  return useContextSelector(I18nContext, (ctx) => ctx);
};
