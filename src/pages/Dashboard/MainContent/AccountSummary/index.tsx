import React, { useState } from 'react';

import { FiFileText, FiCreditCard, FiEye, FiEyeOff } from 'react-icons/fi';

import { PlataformaPaiIcon } from '../../../../assets/icons';
import { IlustratorImage } from '../../../../assets/images';
import {
  Container,
  Card,
  DataWrapper,
  Header,
  LeftData,
  RightData,
  DataValue,
} from './styles';
import Button from '../../../../components/Button';

const AccountSummary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(true);
  const [displayInvestments, setDisplayInvestments] = useState(true);

  return (
    <Container>
      <Card>
        <Header iconStroke>
          <FiFileText />
          <h3>Extrato</h3>
          <Button
            onClick={() => setDisplayStatement(prevState => !prevState)}
            variant="transparent"
          >
            {displayStatement ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>
        <DataWrapper>
          <LeftData>Grafico</LeftData>
          <RightData>
            <span>Receita</span>
            <DataValue income>
              {displayStatement ? 'R$ 8.522,22' : '---'}
            </DataValue>
            <span>Despesas</span>
            <DataValue outcome>
              {displayStatement ? 'R$ 7.948,55' : '---'}
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>
      <Card>
        <Header iconStroke>
          <FiCreditCard />
          <h3>MasterCard 8430</h3>
        </Header>
        <DataWrapper>
          <LeftData>
            <img src={IlustratorImage} alt="creditCard" />
          </LeftData>
          <RightData>
            <span>Seu cartão é MasterCard e sem anuidade</span>
          </RightData>
        </DataWrapper>
      </Card>
      <Card>
        <Header iconStroke={false}>
          <PlataformaPaiIcon />
          <h3>Plataforma Aberta Inter</h3>
          <Button
            onClick={() => setDisplayInvestments(prevState => !prevState)}
            variant="transparent"
          >
            {displayInvestments ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>
        <DataWrapper>
          <LeftData>Grafico</LeftData>
          <RightData>
            <span>Total investido</span>
            <DataValue income>
              {displayInvestments ? 'R$ 0,00' : '---'}
            </DataValue>
            <span>Evolução no mês</span>
            <DataValue outcome>
              {displayInvestments ? 'R$ 0,00' : '---'}
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>
    </Container>
  );
};

export default AccountSummary;
