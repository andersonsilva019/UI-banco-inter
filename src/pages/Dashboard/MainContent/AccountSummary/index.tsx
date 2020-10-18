import React, { useState, useMemo } from 'react';

import { FiFileText, FiCreditCard, FiEye, FiEyeOff } from 'react-icons/fi';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import { useTheme } from 'styled-components';

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
import { DEFAULT_TRANSITION } from '../../../../constants';
import { PlataformaPaiIcon } from '../../../../assets/icons';
import { IlustratorImage } from '../../../../assets/images';
import { dataLine, dataBar } from '../../../../resources';

type ChartValue = number | React.ReactText;

const formatChartData = (number: ChartValue): string => `${number || 0}%`;

const containerAnimation = {
  unMounted: { opacity: 0, y: -50 },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
      delay: 0.5,
    },
  },
};

const cardsAnimation = {
  unMounted: { opacity: 0, y: -25 },
  mounted: { opacity: 1, y: 0 },
};

const AccountSummary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(true);
  const [displayInvestments, setDisplayInvestments] = useState(true);

  const investmentsGrowth = useMemo(() => {
    const [investment] = dataLine;
    const { y } = investment.data[investment.data.length - 1];
    return formatChartData(y);
  }, []);

  const { colors } = useTheme();

  return (
    <Container variants={containerAnimation}>
      <Card
        layout
        key="statments"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
        <Header iconStroke>
          <FiFileText />
          <h3>Extrato</h3>
          <Button
            onClick={() => setDisplayStatement(prevState => !prevState)}
            revision="transparent"
          >
            {displayStatement ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>
        <DataWrapper>
          <LeftData>
            {displayStatement ? (
              <ResponsiveBar
                data={dataBar}
                keys={['outcome', 'income']}
                indexBy="month"
                margin={{ top: 0, right: -8, bottom: 20, left: -8 }}
                padding={0.6}
                borderRadius={2}
                colors={({ id, data }) => data[`${id}Color`]}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisLeft={null}
                axisBottom={{
                  tickSize: 0,
                  tickPadding: 8,
                  tickRotation: 0,
                }}
                tooltip={chart => {
                  const label = chart.id === 'income' ? 'Receita' : 'Despesas';
                  const value = chart.data[chart.id];
                  return (
                    <CustomTooltip>{`${label}: R$${value}`}</CustomTooltip>
                  );
                }}
                theme={{
                  tooltip: {
                    container: {
                      background: 'none',
                      boxShadow: 'none',
                      padding: 0,
                      borderRadius: 0,
                    },
                    chip: {
                      margin: 0,
                    },
                    tableCell: {
                      padding: 0,
                    },
                  },
                }}
                animate
                motionStiffness={90}
                motionDamping={15}
                enableGridY={false}
                enableLabel={false}
              />
            ) : null}
          </LeftData>
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
      <Card
        layout
        key="credit-card"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
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
      <Card
        layout
        key="investments"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
        <Header iconStroke={false}>
          <PlataformaPaiIcon />
          <h3>Plataforma Aberta Inter</h3>
          <Button
            onClick={() => setDisplayInvestments(prevState => !prevState)}
            revision="transparent"
          >
            {displayInvestments ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>
        <DataWrapper>
          <LeftData>
            {displayInvestments ? (
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
            ) : null}
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
