import styled from 'styled-components';
import SearchIconSvg from '../../assets/searchIcon.svg';

function InputSection() {
  return (
    <>
      <SearchIcon src={SearchIconSvg} />
      <TextInput placeholder="검색어를 입력해 주세요." />
    </>
  );
}

export default InputSection;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const TextInput = styled.input`
  color: ${({ theme }) => theme.relaxColor.dark};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.35px;
  width: 100%;
  border: none;
  flex-grow: 1;
  &:focus {
    border: none;
    outline: none;
  }
`;
