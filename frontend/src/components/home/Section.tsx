import { SectionProps } from '@/types/home';
import styled from 'styled-components';
import SubTitle from './SubTitle';
import ArticleSlideBox from './ArticleSlideBox';

function Section({ subTitle, articleList }: Readonly<SectionProps>) {
  return (
    <SectionStyle>
      <SubTitle subTitle={subTitle} />
      <ArticleSlideBox articleList={articleList} />
    </SectionStyle>
  );
}

export default Section;

const SectionStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
