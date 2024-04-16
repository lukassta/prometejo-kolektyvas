import {useTranslations} from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('NotFound');

  return (
    <p>{t('description')}</p>
  );
}