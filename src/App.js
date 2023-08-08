import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LessMore from './copmponents/LessMore/LessMore';
import { getContribitionRequest } from './store/actions/contribitionAction';
import './App.css';

function App() {
  const contribitions = useSelector(state => state.contribitions.contribitions);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getContribitionRequest());
  }, [dispatch]);

  console.log(contribitions);
  return (
    <>
      <LessMore/>
    </>
  );
}

export default App;
