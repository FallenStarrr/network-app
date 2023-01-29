import question from './question.json'
import './App.css';
import Fuse from 'fuse.js'
import { useState } from 'react'
function App() {
  const [query, setQuery] = useState("")
  

  const fuse = new Fuse(question, {
    keys: [
      'title',
      'tag'
    ]
  })

  
  
  const results = fuse.search(query)
  let characterResult = query ? results.map(result => result.item) : question
 

  function handleTags({ currentTarget = {}}) {  
    const { value } = currentTarget
    setQuery(value)
      
  }

  function handleSearch({ currentTarget = {}}) {
      const { value } = currentTarget
      setQuery(value)
      
  }


  return (
    <div className='container'>
     
     <input className='search' value={query} onChange={handleSearch} type="search" id="search-field" placeholder="Поиск решений"/>
     <br />
     <select name="select" onChange={handleTags} className="tags"> 
        <option value="SQL">SQL</option>
        <option value="Python" selected>Pyhton</option>
        <option value="Golang">Golang</option>
      </select>
   
   
     
     

      <div className='search-box'>
        <div className="container">

        
        <div className='search-headings'>
          <h3>Вопросы:</h3>
          
         
          
        </div>
        <div className="items">
          
        {
          
           characterResult.map(e => {
            return (
              <div className="col">
              <div className="item">
                <p>{e.title}</p>
              </div>
              </div>
            )
          })
        }
        </div>
      </div>
       </div>

          

        
    </div>
    
  );
}

export default App;
