import styled from "styled-components";

export const Container = styled.header`
  background-color: #ed1941;
  height: 13.25rem;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  padding: 0.75rem 2rem;
  border: none;
  background-color: #f32874;
  color: white;
  border-radius: 8px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const LogOutButton = styled.button`
  padding: 0.75rem 2rem;
  border: none;
  background-color: red;
  color: white;
  border-radius: 8px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;
