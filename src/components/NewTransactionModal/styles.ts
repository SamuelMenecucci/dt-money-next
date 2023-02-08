import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 1.3rem;
  right: 1.3rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.2);
  }
`;

export const Content = styled.div`
  padding: 4rem 3rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  height: 4rem;
  background-color: #e7e9ee;
  border: 1px solid rgba(215, 215, 215, 1);
  border-radius: 0.5rem;

  & + & {
    margin-top: 1rem;
  }
`;

export const TransactionType = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 8px;
  margin: 1rem auto;
`;

export const TransactionTypeButton = styled.button`
  width: 100%;
  border: 1px solid #969cb2;
  background: transparent;
  height: 4rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(0.9);
  }

  img {
    margin-right: 0.5rem;
    width: 20px;
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  border: none;
  background: #33cc95;
  height: 4rem;
  border-radius: 5px;
  color: white;
  letter-spacing: 2px;
  transition: filter 0.2s;
  margin-top: 1rem;

  &:hover {
    filter: brightness(0.9);
  }
`;
