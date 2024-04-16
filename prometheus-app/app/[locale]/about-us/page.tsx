import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('AboutUs');
  return <h1>{t('title')}</h1>;
}