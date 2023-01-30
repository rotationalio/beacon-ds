import styled from 'styled-components';

/* Lets guide some custom style to our table */

const StyledTable = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid var(--colors-gray-300);

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    th {
      background: var(--colors-gray-300) d;
      border-bottom: 1px solid var(--colors-gray-300);
      color: white;
      fontweight: bold;
    }
  }
`;

export default StyledTable;
