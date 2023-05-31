import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'next-i18next';
import * as S from './styles';

export const HomePage = (): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <S.Container>
      <Head>
        <title>{t('h1')}</title>
      </Head>
      <h1>Home</h1>
    </S.Container>
  );
};
