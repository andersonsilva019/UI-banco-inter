import React from 'react';

import { FiShoppingCart, FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { useTheme } from 'styled-components';
import { darken } from 'polished';

import Button from '../../../../components/Button';
import {
  Container,
  ShoppingButton,
  EquityButton,
  LoandButton,
  Products,
  ProductsCards,
} from './styles';
import { bankNavigation } from '../../../../resources';

const BankProducts: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <div>
        <ShoppingButton background={colors.lightGrey}>
          <FiShoppingCart size={32} />
          <div>
            <h3>Shopping</h3>
            Aproveite os produtos com cashback!
          </div>
          <FiArrowRight size={24} />
        </ShoppingButton>
        <Products>
          {Object.entries(bankNavigation).map(([key, value]) => (
            <ProductsCards key={`card-${key}`}>
              <div>{value.icon}</div>
              {key}
            </ProductsCards>
          ))}
        </Products>
      </div>
      <div>
        <EquityButton background={colors.primaryDark}>
          <h3>Home Equity Banco Inter</h3>
          <div>
            <ul>
              <li>
                <FiChevronRight color={colors.yellow} />
                Taxa Pré-Fixada 1%
              </li>
              <li>
                <FiChevronRight color={colors.yellow} />
                Até <strong>84 meses</strong> para pagar
              </li>
            </ul>
            <Button
              background={colors.yellow}
              color={darken(0.25, colors.yellow)}
            >
              Solicitar agora
            </Button>
          </div>
        </EquityButton>
        <LoandButton background={colors.secondary}>
          <h3>
            <span>Quer ficar fora dos juros ?</span>
            Emprestimos consignados, <br /> crédito para o momento
          </h3>
          <div>
            <ul>
              <li>
                <FiChevronRight color={colors.yellow} />
                <span>
                  Taxas a partir de <strong>1,36%</strong> ao ano
                </span>
              </li>
            </ul>
            <Button
              background={colors.yellow}
              color={darken(0.25, colors.yellow)}
            >
              Solicitar agora
            </Button>
          </div>
        </LoandButton>
      </div>
    </Container>
  );
};

export default BankProducts;