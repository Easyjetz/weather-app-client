import { FaSearch } from "react-icons/fa";
import styled from 'styled-components';

export const StyledSearch = styled.div`
    display: block;
    text-align: center;
    margin: 0 auto;
    padding-top: 20px;
    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const InputBlock = styled.div`
  display: inline;
  position: relative;
`;


export const Input = styled.input`
    padding: 9px 50px;
    width: 324px;
    font-size: 16px;
    border-radius: 20px;
    display: inline;
    border: none;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    :focus {
        outline: none;
    }
    @media (max-width: 600px) {
        width: 65%;
    }
    @media (max-width: 448px) {
        width: 80%;
    }
    @media (max-width: 378px) {
        width: 100%;
    }

`;

export const IconFaSearch = styled(FaSearch)`
    position: absolute;
    font-size: 14px;
    color: #888;
    top: 2px;
    left: 19px;
`;


export const StyledSearchButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #111;
  display: inline;
  margin-left: 16px;
  color: #fff;
  padding: 10px 18px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 448px) {
        display: block;
        margin: 10px auto 0;
        width: 30%;
    }
`;

