import styled from 'styled-components';
import PressCard from './PressCard';
import { useState } from 'react';

function PressCardList() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const onClick = () => {
    setIsSubscribed(!isSubscribed);
  };
  return (
    <Container>
      <PressCard
        imgUrl="https://s3-alpha-sig.figma.com/img/b4d5/3d0f/103a4efd4d2d73d5579df2ae68bfb62a?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bCibBHL8VpVT6D0cQDK-s5mShPEQxJrmPYVEGYUwM0160nZDIHP5TDFvgPBFe1~c53SQh0vEuVS7~2-bub5kE1cANrBDF1oUWqU7SqhPzJ3dTu3e26sZHj0zTtYtBCQV~9qfFABBfqgN0bHR3o10MBEjhjlfB52hK-24hk0PnEmbj0CDL29TXV9gs-UWiozl8rUIsH2u-TelgPka98eARIsL9gfQ7p7e-jiNMV-dwSSH3arpOSaIPFQ5jBj8uSKUrbbiD1ODv7gg7ZhqZP6o~PvmkIaVNQLh4GtY5boTqU1rtyuv2ZWiO188Kwz-tThj77V8-X4GHx8kXPArB3oFPg__"
        pressName="YTN"
        isSubscribed={isSubscribed}
        onClick={onClick}
      />
    </Container>
  );
}

export default PressCardList;

const Container = styled.div`
  width: 100%;
  display: flex;
`;
