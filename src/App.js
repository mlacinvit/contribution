import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContribitionRequest } from './store/actions/contribitionAction';
import Table from './copmponents/Table/Table';
import LessMore from './copmponents/LessMore/LessMore';
import './App.css';

function App() {
  const contribitions = useSelector(state => state.contribitions.contribitions);
  const dispatch = useDispatch();
  const allDate = [];
  let objectDate = null;
  useEffect(() => {
    dispatch(getContribitionRequest());
  }, [dispatch]);
 

  if (contribitions !== null) {
    Object.entries(contribitions).map(data => {
      objectDate = {
        years: data[0][0] + data[0][1] + data[0][2] + data[0][3], 
        months: data[0][5] + data[0][6], 
        day: data[0][8] + data[0][9], 
        count: data[1]
      };
      
      allDate.push(objectDate);
    });
  }

  return (
    <>
    
      <Table data={allDate} />
      {/* <LessMore/> */}
    </>
  );
};

export default App;
