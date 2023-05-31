import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'next-i18next';
import * as S from './styles';
import Login from '@components/molecules/Login';

export const LoginPage = (): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <S.Container>
      <Head>
        <title>{t('h1')}</title>
      </Head>
      <Login />
    </S.Container>
  );
};
