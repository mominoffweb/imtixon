import React, { useState } from 'react'
import Black from './components/Black';
import Page from './components/Page';


function Home({countris,setSkip,btns}) {
  const[skipw,setSkipw] = useState(setSkip)
console.log(skipw);
  return (
    <div className='container'>
      <ul className='wrap'>
      {countris?.data?.map((item) => {
          return <Black key={item._id} data={item} />;
      })}
      </ul>
     <Page setSkip={setSkip}  btns={btns} ></Page>
    </div>
  )
}

export default Home
