
import languages from '../data/languages.js'


export default function AppMain(){

    
  const [active, setActive] = useState(-1)

  function handleClick(e){

    console.log(e.target);
    const newActive = Number(e.target.getAttribute('data-index'))
    console.log(newActive);
    setActive(newActive)
    
  }

    return(

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
      


    )

}