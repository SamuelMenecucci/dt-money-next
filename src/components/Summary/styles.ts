import styled from "styled-components";

export const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  margin-top: -64px;

  display: flex;
  column-gap: 2rem;
  justify-content: space-around;
`;

export const SummaryItem = styled.div`
  width: 20rem;
  background-color: white;
  padding: 20px 20px;
  border-radius: 8px;

  &:last-child {
    background-color: #33cc95;
  }
`;

export const SummaryItemHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SummaryItemValue = styled.header`
  font-size: 36px;
`;
