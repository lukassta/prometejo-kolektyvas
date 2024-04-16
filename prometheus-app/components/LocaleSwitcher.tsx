import {useLocale, useTranslations} from 'next-intl';
import {locales} from '../navigation';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('language')}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {`${cur}`}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}