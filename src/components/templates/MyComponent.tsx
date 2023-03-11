import Link from 'next/link';
import * as React from 'react';
import { useRouter } from 'next/router';


interface MyComponentProps {
  soA: number;
  soB: number;
  handleSum: () => void;
  ChangeNumberA: (numberA : React.ChangeEvent<HTMLInputElement>) => void;
  ChangeNumberB: (numberB: React.ChangeEvent<HTMLInputElement>) => void;
  Sum: number;
}

const MyComponent = (props: MyComponentProps) => {
  const router = useRouter();
  const handlePush = () => {
    router.push({
      pathname: '/about',
    });
  };


  return (
    <div>
      <input type="number" placeholder="so a" value={props.soA} onChange={(numberA) => props.ChangeNumberA(numberA)}/>
      <input type="number" placeholder="so b" value={props.soB} onChange={(numberB) => props.ChangeNumberB(numberB)}/>
      <h1> {props.Sum }</h1>
      <button onClick={props.handleSum}> Tinh tong</button>
      <Link href="/about">
        <button>go to about</button>
      </Link>
      <button className='btn btn-primary' onClick={handlePush}> di chuyen toi about</button>
    </div>
  );
};

export default MyComponent;
