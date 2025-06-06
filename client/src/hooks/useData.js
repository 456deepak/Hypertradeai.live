import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

// Custom hook to use the data context
const useData = () => {
  const context = useContext(DataContext);
  
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  
  return context;
};

export default useData;
