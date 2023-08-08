import { Square } from '../UI/Square/Square';
import './LessMore.css';

function LessMore() {
    const squers = ['one', 'two', 'three', 'four', 'five'];
    return (
      <div className='allBlock'>
        <p className='text'>Меньше</p> 
            {squers.map((sq, i) => (
                <Square key={i} color={sq} act={'active'}/>
            ))}
        <p className='text'>Больше</p>
      </div>
    );
  }
  
  export default LessMore;
  
