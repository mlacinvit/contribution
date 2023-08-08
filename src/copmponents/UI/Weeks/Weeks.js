import { Square } from '../UI/Square/Square';
import './Weeks.css';

function Weeks({ count }) {
    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    
    return (
      <div className='weeksBlock'>
        <div>
            {week.map((sq, i) => (
                <Square key={i} color={sq}/>
            ))}
        </div>
      </div>
    );
  }
  
  export default Weeks;
  
