import { Square } from "../Square/Square";
import './Months.css'

function Months({ data }) {

    const monthConverter = mon => {
        switch (mon) {
            case '01': return 'Январь'
            case '02': return 'Февраль';
            case '03': return 'Март';
            case '04': return 'Апрель';
            case '05': return 'Май';
            case '06': return 'Июнь';
            case '07': return 'Июль';
            case '08': return 'Август';
            case '09': return 'Сентябрь';
            case '10': return 'Октябрь';
            case '11': return 'Ноябрь';
            case '12': return 'Декабрь';
        }
    };

const years022 = data.filter(ye => ye.years === '2022');
const years023 = data.filter(ye => ye.years === '2023');


    return (
        <div className='monthBlock'>
            {years022.map((da, i) => (
                <div key={i} >
                    {monthConverter(da.month)}
                  <Square color={da.count}/> 
                </div>
            ))}
            {years023.map((da, i) => (
                <div key={i} >
                   {monthConverter(da.month)}
                  <Square color={da.count}/> 
                </div>
            ))}

        </div>
    );
}

export default Months;

