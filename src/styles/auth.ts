import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 350px;
  border-radius: 8px;
  position: absolute;
  right: 50%;
  transform: translate(50%, 100%);
  background-color: red;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px;
`;

export const Label = styled.label`
  color: white;
  font-size: 20px;
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 8px;
`;

export const AuthOptions = styled.div`
  display: flex;
  justify-content: center;
`;

export const AuthButton = styled.button`
  background-color: white;
  border-radius: 8px;
  padding: 5px;
  border: none;
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

export const LoginButton = styled.button`
  background-color: white;
  border-radius: 8px;
  padding: 5px;
  border: none;
  display: flex;
  justify-content: center;
  font-size: 16px;
`;
