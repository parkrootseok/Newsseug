import { SectionProps } from '@/types/home';
import styled from 'styled-components';
import SubTitle from './SubTitle';
import ArticleSlideBox from './ArticleSlideBox';

function Section({ subTitle, ArticleList }: Readonly<SectionProps>) {
  return (
    <SectionStyle>
      <SubTitle subTitle={subTitle} />
      <ArticleSlideBox ArticleList={ArticleList} />
    </SectionStyle>
  );
}

export default Section;

const SectionStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
