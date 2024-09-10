import InputSection from '../components/search/InputSection';
import SubLayout from '../components/common/SubLayout';

function Search() {
  return (
    <SubLayout isSearch={true}>
      <InputSection />
    </SubLayout>
  );
}

export default Search;
