import { async } from 'q'
import React, {useEffect} from 'react'

function About() {
  let testAbout = '';

  useEffect(()=>{
    testAbout = uploadFromServer();
    console.log('testAbout', testAbout);
  }, [])

  const uploadFromServer = async () => {
    const res = await fetch('http://localhost:8000/about')
    const answer = await res.json();
    console.log('answer', answer.message);
    return answer;
  }

  return (
    <div className='middle-element'>
      <div className='products'>About</div>
    </div>
  )
}

export default About