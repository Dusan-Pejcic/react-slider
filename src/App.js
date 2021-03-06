import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import Review from './Review';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    // to make sure that index doesn't get outside of the size of the people array
    if(index < 0){
      setIndex(people.length -1);
    }
    if(index > people.length -1) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(()=> {
    // to set auto-slider
    let slider = setInterval(()=> {
      setIndex(index + 1);
    }, 3000);
    return ()=> clearInterval(slider); // cleanup function
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
        <div className="section-center">
          { people.map((person, personIndex)=> {
            
            return  <Review key={person.id} index={index} people={people} person={person} personIndex={personIndex}/>
          })};
        
        <button className="prev" onClick={()=> setIndex(index -1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={()=> setIndex(index +1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
