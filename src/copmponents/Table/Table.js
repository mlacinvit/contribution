
import Months from '../UI/Months/Months';
import './Table.css';

function Table({ data }) {

    return (
      <div className='tableBlock'>
        <Months data={data}/>
      </div>
    );
  }
  
  export default Table;
  
