import React from 'react';

import { useTheme } from 'styled-components';

import { Container, FooterSection, Wrapper } from './styles';
import { NortonImage } from '../../assets/images';

const Footer: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <FooterSection as="section">
        <Wrapper>
          <div>
            <h4>Fale conosco</h4>
            Ligue 3003 4070 (Regiões Metropolitanas) ou 0800 940 0007 (Demais
            Regiões) | Horário de Atendimento: 08:00h às 20:00h.
          </div>
          <div>Todos os direitos reservados</div>
        </Wrapper>
      </FooterSection>
      <FooterSection as="section" background={colors.background}>
        <Wrapper>
          <div>
            <span>
              <strong>
                Para reclamações, sugestões ou cancelamento de produtos e
                serviços:
              </strong>
            </span>
            <span>Central de Relacionamento: 3003 4070 / 0800 940 0007</span>
            <span>Deficiente de Fala e Audição:</span>
          </div>
          <img
            src={NortonImage}
            alt="Site totalmente estático, selo meramente ilustrativo"
          />
        </Wrapper>
      </FooterSection>
    </Container>
  );
};

export default Footer;
