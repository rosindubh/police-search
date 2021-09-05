// link: https://www.youtube.com/watch?v=0ZJgIjIuY7U watched up to 9:00
import React, {useState, useEffect} from 'react';
import './App.css'
export default function App () {
  const [resourseType, setResourseType] = useState('')
  const [items, setItems] = useState([])


  useEffect(() => {
    fetch(`https://data.police.uk/api/${resourseType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    }, [resourseType])

  return (
    <>
      <div>
        <div className="buttons">
        <button onClick={() => setResourseType('forces')}>forces</button>
        <button onClick={() => setResourseType('crimes-street-dates')}>crimes-street-dates</button>
        <button onClick={() => setResourseType('greater-manchester/neighbourhoods')}>GMP Neighbourhoods</button>
        <button onClick={() => setResourseType('/greater-manchester/MC18/priorities')}>Sale Priorities</button>
        <button onClick={() => setResourseType('/greater-manchester/MC19/priorities')}>Sale Moor North Priorities</button>
        <button onClick={() => setResourseType('/greater-manchester/MC20/priorities')}>Sale Moor South Priorities</button>
        <button onClick={() => setResourseType('/greater-manchester/MC21/priorities')}>Sale Town Centre Priorities</button>  
        </div>
      </div>
      <h1>{resourseType}</h1>
      {items.map(item => {
        return <pre className="output">{JSON.stringify(item)} </pre>
      })}
    </>
  )
}



// export default App;
