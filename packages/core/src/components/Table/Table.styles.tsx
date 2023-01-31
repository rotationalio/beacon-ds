import styled from 'styled-components';
import { rgba } from 'polished';

const StyledBase = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #686f7a;
  tbody:before {
    content: '-';
    display: block;
    line-height: 0.6em;
    color: transparent;
  }
`;

const StyledTh = styled.th`
  text-align: ${(props) => (props.align ? props.align : 'left')};
  font-size: 18px;
  color: #686f7a;
  font-weight: 700;
  opacity: 0.65;
`;

const StyledTd = styled.td`
  text-align: ${(props) => (props.align ? props.align : 'left')};
`;

const StyledTr = styled.tr`
  border-bottom: 2px solid ${rgba(150, 150, 150, 0.5)};
`;

export { StyledBase, StyledTable, StyledTh, StyledTd, StyledTr };
