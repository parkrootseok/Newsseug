import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { MaleIcon, FemaleIcon } from 'components/userInput/GenderIcons';
import { UserInputProps } from '@/types/userInput';
import Layout from 'components/common/Layout';
import InputSection from 'components/userInput/InputSection';
import GenderSelectBox from 'components/userInput/GenderSelectBox';
import SubmitButton from 'components/userInput/SubmitButton';

/**
 * IMP : nickname은 Server에서 받아와야 한다.
 */
const defaultValues: UserInputProps = {
  nickname: '기쁜 두꺼비',
  birthDate: '',
  gender: '',
};

function UserInput() {
  const { control, handleSubmit, setValue } = useForm<UserInputProps>({
    defaultValues,
  });

  const onSubmit = (data: UserInputProps) => {
    console.log(data);
  };

  const [genderList, setGenderList] = useState([
    {
      icon: <MaleIcon />,
      selected: false,
      value: '남성',
    },
    {
      icon: <FemaleIcon />,
      selected: false,
      value: '여성',
    },
  ]);

  const handleGenderSelect = (index: number) => {
    setGenderList((prev) =>
      prev.map((item, i) => ({
        ...item,
        selected: i === index,
      })),
    );
    setValue('gender', genderList[index].value);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputSection
          title="생성된 닉네임"
          input="기쁜 두꺼비"
          canEdit={false}
        />
        <GenderSelectBox
          title="성별을 선택해주세요"
          genderBoxList={genderList}
          onSelect={handleGenderSelect}
        />
        <Controller
          name="birthDate"
          control={control}
          rules={{
            required: '생년월일을 입력해주세요.',
            pattern: {
              value: /^\d{4}-\d{2}-\d{2}$/,
              message: '생년월일 형식이 올바르지 않습니다. (YYYY-MM-DD)',
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <InputSection
              title="생년월일을 입력해주세요"
              input={field.value}
              backGroundColor="#f4f4f4"
              canEdit={true}
              onChange={field.onChange}
            />
          )}
        />
        <SubmitButton />
      </form>
    </Layout>
  );
}

export default UserInput;
