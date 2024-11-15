import { useState } from 'react'
import AppHeader from './assets/components/AppHeader.jsx'
import AppMain from './assets/components/AppMain.jsx'




function App() {



  return (
    <>
      <AppHeader />
      
      
    </>
  )
}

export default App

{/*function App() {
  const [active, setActive] = useState(0)



function handleClick(e){

  console.log(e.target);
  const newActive = Number(e.target.getAttribute('data-index'))
  console.log(newActive);
  setActive(newActive)
  
  

}


  return (
    <>
    <div className="container">
    <div className="accordion">


      {accordions.map((item, index)=>(      
        <div className="accordion-item" key={item.id}>
            <h2 onClick={handleClick} data-index={index}>{item.title}</h2>
            <div className={active === index ? 'active' : 'hide'}>
              {item.content}
            </div>
                  
        </div>
      ))}
    </div>
    </div>
     
    </>
  )
}*/}