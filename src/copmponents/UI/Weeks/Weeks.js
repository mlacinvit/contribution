import { Square } from '../UI/Square/Square';
import './Weeks.css';

function Weeks({ count }) {
    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    
    let result = [];

    for (let i = 0; i < count; i++) {
        result.push(<Square key={i}/>)
    }
    
    return (
      <div className='monthBlock'>
        <div>
            {console.log(result)}
        </div>
      </div>
    );
  }
  
  export default Weeks;
  
