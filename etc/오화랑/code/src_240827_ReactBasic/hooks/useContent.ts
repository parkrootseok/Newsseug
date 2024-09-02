import { useState, useEffect } from 'react';
import { Content } from '../types/content';
import { dummyData } from '../data/info';

// 이는 Component가 아니기에, Pascal Case를 적용하지 않는다.
export default function useContents() {
  /**
   * IMP : 다양한 Function을 더 깔끔하게 관리하는 방법은 존재하긴 함
   * * 1. React의 useState()에서 Tuple을 받아온다.
   * * 1.1 TS에서 dummyData에서 contents의 Type을 추론함 ( 명시할 수도 있음 )
   * * 1.2 contents -> Content[], setContents -> Function
   */
  const [contents, setContents] = useState<Content[]>(() => {
    const savedContents: Content[] = JSON.parse(localStorage.getItem('Contents') ?? '[]');
    return savedContents.length > 0 ? savedContents : dummyData;
  });

  /**
   * IMP : React Hook =>  useEffect()
   * IMP : [] 안에 있는 요소의 변화를 감지하여, 그 변화에 따라 Rendering을 해주는 것
   * IMP : [] 안에 아무것도 들어가 있지 않다면 => Component가 처음 Render되는 그 순간을 의미함
   * * 외부 System과 Component를 동기화하는 React Hook
   * * useEffect(setup, dependencies?)
   */
  useEffect(() => {
    localStorage.setItem('Contents', JSON.stringify(contents));
  }, [contents]);

  /**
   * IMP : React는 Vue의 'emit' 대신 Props로 CallBack 구현체를 넘겨준다.
   * IMP : 자식 Component는 CallBack을 받아서, 활용해서 State를 Update한다.
   * * 1. ContentList의 각 Row의 Check 상태를 바꿔내는 CallBack
   * @param _id
   * @param isMade
   */
  function setContentMade(_id: number, isMade: boolean) {
    // setContents => Directive or Arrow Function Using
    // 이를 통해, prevContents
    setContents((prevContents) =>
      prevContents.map((content) => (content._id === _id ? { ...content, isMade } : content))
    );
  }

  /**
   * @param contentTitle
   * * 2. ContentList에 새로운 Content를 추가하는 CallBack
   */
  function addContent(contentTitle: string) {
    setContents((prevContents) => [
      {
        _id: Date.now(),
        contentTitle,
        description: '규칙을 설정하세요',
        duration: 30,
        isMade: false,
      },
      ...prevContents,
    ]);
  }

  /**
   * IMP : 주로 무엇인가 삭제를 진행할 때는 Filter 함수를 이용함.
   */
  function deleteContent(_id: number) {
    setContents((prevContents) => prevContents.filter((content) => content._id !== _id));
  }

  /**
   * IMP : Delete All
   */
  function deleteMadeContent() {
    setContents((prevContents) => prevContents.filter((content) => !content.isMade));
  }

  return {
    contents,
    setContentMade,
    addContent,
    deleteContent,
    deleteMadeContent,
  };
}
