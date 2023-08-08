
import Months from './Months/Months';
import './Years.css';

function Years ({ data }) {
   const years = data.map(elem => elem.years);
   const newSet = new Set(years);
   const arraYear = Array.from(newSet);


    return (
      <div className='monthBlock'>
       
      </div>
    );
  }
  
  export default Years;