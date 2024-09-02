import { Content } from '../types/content';

export const dummyData: Content[] = [
  {
    _id: 1,
    contentTitle: '진실 혹은 거짓',
    description: '⭐ 하얀 거짓말을 통해 구성원을 속여보세요!',
    duration: 20,
    isMade: true,
  },
  {
    _id: 2,
    contentTitle: '이미지 자기 소개',
    description: '⭐ 생성된 이미지로 구성원들에게 자기를 소개하세요!',
    duration: 20,
    isMade: false,
  },
  {
    _id: 3,
    contentTitle: '버섯 키우기',
    description: '⭐ 팀과 소통하며 버섯을 제일 크게 키우세요!',
    duration: 10,
    isMade: true,
  },
  {
    _id: 4,
    contentTitle: '동시에 버튼 누르기',
    description: '⭐ 믿음을 갖고 정해진 시간에 버튼을 누르세요',
    duration: 10,
    isMade: false,
  },
  {
    _id: 5,
    contentTitle: 'O/X 게임',
    description: '⭐ 주어진 상식을 끝까지 맞춰 최후의 1인이 되세요',
    duration: 20,
    isMade: false,
  },
  {
    _id: 6,
    contentTitle: '억지 토론 밸런스 게임',
    description: '⭐ 구성원들과 협의하여 토론을 통해 상대를 설득하세요',
    duration: 20,
    isMade: false,
  },
  {
    _id: 7,
    contentTitle: '독버섯 상식 퀴즈',
    description: '⭐ 랜덤 상식 퀴즈를 맞추고 구성원에게 폭탄을 넘기세요',
    duration: 15,
    isMade: false,
  },
  {
    _id: 8,
    contentTitle: '숫자숨바꼭질',
    description: '⭐ AI처럼 움직여 술래를 속이세요!',
    duration: 15,
    isMade: true,
  },
];

export const fetchContents = async (query = ''): Promise<Content[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('fetched contents');
  const filteredContents = dummyData.filter((content) =>
    content.contentTitle.toLowerCase().includes(query.toLowerCase())
  );
  return [...filteredContents];
};

export const addContents = async (content: Pick<Content, 'contentTitle'>): Promise<Content> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('add contents');
  const newContent = {
    _id: dummyData.length + 1,
    contentTitle: content.contentTitle,
    description: 'Hello World!',
    duration: 10,
    isMade: false,
  };
  dummyData.push(newContent);
  return newContent;
};
