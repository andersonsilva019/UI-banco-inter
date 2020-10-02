import React, { useState } from 'react';

import { FiFileText, FiCreditCard, FiEye, FiEyeOff } from 'react-icons/fi';
import { ResponsiveLine } from '@nivo/line';
import { useTheme } from 'styled-components';

import { PlataformaPaiIcon } from '../../../../assets/icons';
import { IlustratorImage } from '../../../../assets/images';
import { dataLine } from '../../../../resources';
import {
  Container,
  Card,
  DataWrapper,
  Header,
  LeftData,
  RightData,
  DataValue,
  CustomTooltip,
} from './styles';
import Button from '../../../../components/Button';

type ChartValue = number | React.ReactText;

const formatChartData = (number: ChartValue): string => `${number || 0}%`;

const AccountSummary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(true);
  const [displayInvestments, setDisplayInvestments] = useState(true);
  const [investmentsGrowth, setInvestmentsGrowth] = useState(() => {
    const [investment] = dataLine;
    const { y } = investment.data[investment.data.length - 1];
    return formatChartData(y);
  });

  const { colors } = useTheme();

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
          <LeftData>Greafico</LeftData>
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
          <LeftData>
            <ResponsiveLine
              data={dataLine}
              enableArea
              enableGridY={false}
              curve="cardinal"
              margin={{ top: 8, right: 8, bottom: 20, left: 8 }}
              xScale={{ type: 'point' }}
              yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false,
              }}
              tooltip={({ point }) => {
                return (
                  <CustomTooltip>
                    {formatChartData(point.data.yFormatted)}
                  </CustomTooltip>
                );
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: 'bottom',
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
              }}
              axisLeft={null}
              colors={colors.success}
              enableCrosshair={false}
              pointSize={8}
              lineWidth={1.5}
              pointColor={colors.success}
              pointBorderColor={{ from: 'serieColor' }}
              pointLabel="y"
              pointLabelYOffset={-12}
              useMesh
            />
          </LeftData>
          <RightData>
            <span>Total investido</span>
            <DataValue income>
              {displayInvestments ? 'R$ 0,00' : '---'}
            </DataValue>
            <span>Evolução no mês</span>
            <DataValue outcome>
              {displayInvestments ? investmentsGrowth : '---'}
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>
    </Container>
  );
};

export default AccountSummary;
