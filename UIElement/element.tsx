import styled from "styled-components";

export const Button = styled.button`
  max-width: 100%;
  outline: none;
  cursor: pointer;
  background: #2f65f8;
  padding: 13px 22px;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.15925);
  border-radius: 3.125px;
  color: white;
  font-size: 14px;
  transition: 0.5s;
  &:hover {
    opacity: 0.7;
    filter: brightness(5)
    transition: 0.5s;
  }
`;

export const ReadButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 3px 0;
  font-size: 12px;
  background-color: transparent;
  color: #3da08f;
  border-bottom: 1px solid #3da08f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  transition: 0.5s;
  &:hover {
    opacity: 0.7;
    filter: brightness(5)
    transition: 0.5s;
  }
`;

export const Input = styled.input`
  max-width: 100%;
  border: 1px solid #07043b;
  padding: 10px 20px;
  border-radius: 3.125px;
  box-shadow: 2px 3px 6px rgba(7, 4, 59, 0.157043);
`;
