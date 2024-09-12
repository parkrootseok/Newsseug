import SubscribeHeader from 'components/subscribe/SubscribeHeader';
import SubLayout from 'components/common/SubLayout';
import PressCardList from 'components/subscribe/PressCardList';

const subscribeNumber = 6;

function AllSubscribes() {
  return (
    <SubLayout>
      <div>내 구독목록</div>
      <div>
        <SubscribeHeader
          title="구독한 언론사"
          subscribeNumber={subscribeNumber}
          variant="all"
        />
        <PressCardList />
        <SubscribeHeader title="전체 언론사" variant="all" />
      </div>
    </SubLayout>
  );
}

export default AllSubscribes;
