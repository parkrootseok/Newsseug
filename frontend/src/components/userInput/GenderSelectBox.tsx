import { GenderSelectBoxProps } from '@/types/userInput';
import styled from 'styled-components';
import InputTitle from './InputTitle';
import GenderBox from './GenderBox';

function GenderSelectBox({
  title,
  genderBoxList,
  onSelect,
}: Readonly<GenderSelectBoxProps>) {
  return (
    <GenderSelectBoxStyle>
      <InputTitle title={title} />
      <GenderBoxListStyle>
        {genderBoxList.map((genderBox, index) => (
          <GenderBox
            key={index}
            icon={genderBox.icon}
            selected={genderBox.selected}
            onClick={() => onSelect(index)}
          />
        ))}
      </GenderBoxListStyle>
    </GenderSelectBoxStyle>
  );
}

export default GenderSelectBox;

const GenderSelectBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 24px;
`;

const GenderBoxListStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
