import React, { useState } from 'react';
import List from './components/List';
import data from './helper/data';

function App() {
  const [startIndex, setStartIndex] = useState(0);

  const nextPage = () => {
    if (startIndex + 5 < data.length) {
      setStartIndex(prevIndex => prevIndex + 5);
    }
  };

  const prevPage = () => {
    if (startIndex > 0) {
      setStartIndex(prevIndex => Math.max(prevIndex - 5, 0));
    }
  };

  return (
    <main>
      <section className="container">
        <h3>Staff Directory</h3>
        <h5>
          (Employees {startIndex + 1} to {Math.min(startIndex + 5, data.length)})
        </h5>
        <List startIndex={startIndex} data={data} /> {/* startIndex ve data prop'larını gecirmekmek icin */}
        <div className='btns'>
          <button onClick={prevPage} disabled={startIndex === 0}>Prev</button>
          <button onClick={nextPage} disabled={startIndex + 5 >= data.length}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
