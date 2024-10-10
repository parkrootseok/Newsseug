import SubscribeHeader from 'components/subscribe/SubscribeHeader';
import SubLayout from 'components/common/SubLayout';
import PressCardList from 'components/subscribe/PressCardList';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { PressBasic } from 'types/api/press';
import { getAllPressList, getSubscribedPressList } from 'apis/subscribe';

function AllSubscribes() {
  const [subscribePressList, setSubscribePressList] = useState<PressBasic[]>(
    [],
  ); // 구독된 언론사 리스트 상태
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    [key: number]: boolean;
  }>({});

  // 모든 언론사 리스트 가져오기
  const { data: allPressList } = useQuery<PressBasic[]>(
    ['allPressList'],
    getAllPressList,
  );

  // 구독된 언론사 리스트 가져오기
  const { data: initialSubscribedPressList } = useQuery<PressBasic[]>(
    ['subscribedPressList'],
    getSubscribedPressList,
  );

  // 구독 상태 초기화
  useEffect(() => {
    if (allPressList && initialSubscribedPressList) {
      const statusMap = allPressList.reduce(
        (acc, press) => {
          acc[press.id] = initialSubscribedPressList.some(
            (subscribed) => subscribed.id === press.id,
          );
          return acc;
        },
        {} as { [key: number]: boolean },
      );
      setSubscriptionStatus(statusMap);
      setSubscribePressList(initialSubscribedPressList); // 초기 구독 리스트 설정
    }
  }, [allPressList, initialSubscribedPressList]);

  // 구독 상태 토글 함수
  const toggleSubscribe = (press: PressBasic) => {
    const isSubscribed = subscriptionStatus[press.id];
    setSubscriptionStatus((prevStatus) => ({
      ...prevStatus,
      [press.id]: !isSubscribed,
    }));
    setSubscribePressList((prevList) => {
      if (isSubscribed) {
        return prevList.filter((subscribed) => subscribed.id !== press.id); // 구독 취소
      } else {
        return [...prevList, press]; // 구독 추가
      }
    });
  };

  return (
    <SubLayout>
      <div>내 구독 목록</div>
      <div>
        <SubscribeHeader
          title="구독한 언론사"
          subscribeNumber={subscribePressList.length}
          variant="all"
        />
        <PressCardList
          pressList={subscribePressList}
          subscriptionStatus={subscriptionStatus}
          toggleSubscribe={toggleSubscribe}
          isAll={false}
        />
        <SubscribeHeader title="전체 언론사" variant="all" />
        <PressCardList
          pressList={allPressList || []}
          subscriptionStatus={subscriptionStatus}
          toggleSubscribe={toggleSubscribe}
          isAll={true}
        />
      </div>
    </SubLayout>
  );
}

export default AllSubscribes;
