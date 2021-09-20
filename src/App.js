import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronLeft, FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
        <div className="section-center">
          { people.map((person, personIndex)=> {
            const {id, image, name, title, quote} = person;
            // more to come
              
            return (
              <article key={id}>
                <img src={image} alt={name} className='person-img'/>
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="quote">{quote}</p>
                <FaQuoteRight className='icon'/>
              </article>
            )
              
          })}
        </div>
        <button className="prev">
          <FiChevronLeft />
        </button>
        <button className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
