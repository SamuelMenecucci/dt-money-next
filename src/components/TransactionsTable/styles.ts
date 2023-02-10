import styled from "styled-components";

export const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    thead {
      text-align: left;
      tr {
        th {
          padding: 0.9rem 2rem;
          color: #969cb2;
          font-weight: 400;
        }
      }
    }

    tbody {
      tr {
        background-color: white;

        td {
          padding: 1rem 2rem;
          color: #969cb2;

          &.income {
            color: #33cc95;
          }

          &.withdraw {
            color: #e52e4d;
          }

          &:first-child {
            color: #363f5f;
          }

          &.category {
            display: flex;
            align-items: center;
            column-gap: 5px;
          }
        }
      }
    }
  }
`;
