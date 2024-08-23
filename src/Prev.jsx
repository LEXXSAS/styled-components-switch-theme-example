import React, { useEffect, useRef, useState } from 'react'

const INITIAL_COUNT = 0;

export const Prev = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const prevCountRef = useRef(INITIAL_COUNT);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count])

  return (
    <>
      <h1>Prev</h1>
      <button style={{padding: '5px 10px', border: '0', fontSize: '1em'}} onClick={() => setCount((count) => count + 1)}>Increment count</button>
      <h2>count: {count}</h2>
      <h2>prevCount: {prevCountRef.current}</h2>
    </>
  )
}
