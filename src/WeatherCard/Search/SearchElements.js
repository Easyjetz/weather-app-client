import { FaSearch } from "react-icons/fa";
import styled from 'styled-components';

export const StyledSearch = styled.div`
    display: flex;
    margin-top: 25px;   
`;

export const InputBlock = styled.div`
    position: relative;
`;

export const Input = styled.input`
    padding: 9px 50px;
    width: 270px;
    font-size: 16px;
    margin-right: 23px;
    border-radius: 20px;
    border: none;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    :focus {
        outline: none;
    }
`;

export const IconFaSearch = styled(FaSearch)`
    position: absolute;
    z-index: 1;
    font-size: 14px;
    color: #888;
    bottom: 10px;
    left: 20px;
`;


export const StyledSearchButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #111;
  color: #fff;
  padding: 1px 16px;
  :hover {
    cursor: pointer;
  }
`;

