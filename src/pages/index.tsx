import { useState ,useCallback} from 'react';
import { NextPage } from 'next';
import MyComponent from '../components/templates/MyComponent';
const IndexPage: NextPage = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [sum, setSum] = useState(0);

  const onChangeA = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setValueA(Number(e.target.value));
  },[valueA]);
  const onChangeB = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValueB(Number(e.target.value));
  };

  const handleSum = () => {
    setSum(valueA + valueB);
  };

  return (
    <>
      <MyComponent soA={valueA} soB={valueB} ChangeNumberA={onChangeA} ChangeNumberB={onChangeB} handleSum={handleSum} Sum={sum } />
    </>
  );
};

export default IndexPage;