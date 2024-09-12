import { InputSectionProps } from '@/types/userInput';
import styled from 'styled-components';
import InputTitle from './InputTitle';
import InputBox from './InputBox';

function InputSection({
  title,
  input,
  backGroundColor,
  canEdit,
  onChange,
}: Readonly<InputSectionProps>) {
  return (
    <InputSectionContainerStyle>
      <InputTitle title={title} />
      <InputBox
        input={input}
        backGroundColor={backGroundColor}
        canEdit={canEdit}
        onChange={onChange}
      />
    </InputSectionContainerStyle>
  );
}

export default InputSection;

const InputSectionContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 24px;
`;
