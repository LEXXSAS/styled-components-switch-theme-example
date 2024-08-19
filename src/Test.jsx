import React, { useEffect, useState } from 'react'

const Test = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('dark-theme', theme)
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div>
      <h1>Test</h1>
      <button style={{padding: '5px 10px', border: '0', fontSize: '1em'}} onClick={toggleTheme}>Switch theme</button>
    </div>
  )
}

export default Test