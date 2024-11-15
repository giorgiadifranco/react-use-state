import { useState } from 'react'
import AppHeader from './assets/components/AppHeader.jsx'
//import AppMain from './assets/components/AppMain.jsx'
import languages from './assets/data/languages.js'




function App() {

  const [active, setActive] = useState(-1)

  function handleClick(e){

    console.log(e.target);
    const newActive = Number(e.target.getAttribute('data-index'))
    console.log(newActive);
    setActive(newActive)
    
  }

  return (
    <>
      <AppHeader />
      
      <main>
            <div className="container">

            {languages.map((language, index)=>(
            <div className="accordion" key={language.id}>
                <button className="lang_btn" onClick={handleClick} data-index={index}>
                  {language.title}
                </button>
            

            <div className={active === index ? 'active' : 'hide'}>
            <h2>{language.title}</h2>
            <p>{language.description}</p>
            </div>
        </div>

            
            
))}
            
            </div>
        </main>
      
    </>
  )
}

export default App

