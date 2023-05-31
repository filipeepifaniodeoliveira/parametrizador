import React from 'react';
import Logo from '../../../../public/images/logo-principal.png';
import { Icon } from '../../atoms/Icon';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import * as S from './styles';

export const FooterGlobal = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.Footer>
          <S.ContainerAddress>
            <h5>Um Site desenvolvido por: Filipe Epifânio</h5>
          </S.ContainerAddress>
        </S.Footer>
      </S.Container>
    </>
  );
};
