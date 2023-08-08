import './Square.css';

export const Square = ({ color }) => {

    const colorConverter = col => {
        if (col <= 0) {
           return 'one' 
        }
        if (col >= 1 && col <= 9) {
            return 'two' 
        }
        if (col >= 9 && col <= 19) {
            return 'three' 
        }
        if (col >= 19 && col <= 29) {
            return 'four' 
        }
        if (col >= 29 ) {
            return 'five' 
        }
    }
    return (
    <div className={`square ${colorConverter(color)}`}></div>
    );
}
