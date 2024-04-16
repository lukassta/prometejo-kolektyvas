import {useTranslations} from 'next-intl';

export default function Header() {
    const t = useTranslations('Header');
  
    return (
        <header>
            <h1>{t('prometheus_collective')}</h1>
            <nav>Nav bar</nav>
        </header>
    );
  }