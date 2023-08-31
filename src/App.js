// App.js
import React, { useState, useEffect} from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Task from './components/Task/Task';
import Settings from './components/Settings/Settings';
import Status from './components/Status/Status';
import Projects from './components/Projects/Projects';
import Header from './components/Header/header';
import AddTask from './components/AddTask/AddTask';
import AddProject from './components/AddProject/AddProject';
import EditTask from './components/EditTask/EditTask';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [arrayOfTasks, setArrayOfTasks] = useState(() => {
    const storedTasks = localStorage.getItem('arrayOfTasks');
    if (storedTasks == null || storedTasks === 'undefined') return [];
    return JSON.parse(storedTasks);
  });


  useEffect(() => {
    // Store the array of tasks in local storage whenever it changes
    localStorage.setItem('arrayOfTasks', JSON.stringify(arrayOfTasks));
  }, [arrayOfTasks]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTaskToArray = () => {
    setArrayOfTasks([...arrayOfTasks, inputValue]);
    setInputValue('');
  };

  const deletedItem = index => {
      setArrayOfTasks(    arrayOfTasks.filter((item,key) => {
        return key !== index;
    }))
  }

  //for projects
  const [arrayOfProjectObjects, setArrayOfProjectObjects] = useState(() => {
    const arrayProjects = localStorage.getItem('arrayOfObjects');
    if (arrayProjects == null || arrayProjects === 'undefined') return []
    return JSON.parse(arrayProjects);
    });
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectPriority, setProjectPriority] = useState('');
  const [projectDuration, setProjectDuration] = useState('');
  const [startDate, setStartDate] = useState({
    day: '',
    month: '',
    year: '',
  });

  useEffect(() => {
    localStorage.setItem('arrayOfObjects', JSON.stringify(arrayOfProjectObjects));
  },[arrayOfProjectObjects])

  const handlePriorityChange = (e) => {
    setProjectPriority(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate({
      ...startDate,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  const projectObject = {
    name: projectName,
    description: projectDescription,
    priority: projectPriority,
    duration: projectDuration,
    startDate: {
      day: startDate.day,
      month: startDate.month,
      year: startDate.year,
    },
  };

      
    setArrayOfProjectObjects([...arrayOfProjectObjects, projectObject]);

    setProjectName('');
    setProjectDescription('');
    setProjectPriority('');
    setProjectDuration('');
    setStartDate({
      day: '',
      month: '',
      year: '',
    });
};
  
     const deleteProject = index => {
        setArrayOfProjectObjects(arrayOfProjectObjects.filter((item, indez) => {
            return indez !== index;
        }));
       console.log(arrayOfProjectObjects)
    }
    
  return (
    <div className="wrapper">
      <Sidebar />
      <Routes>
        <Route path='/' element={
          <>
            <div className='mainContent'>
              <Header />
              <Task inputValue={ inputValue} arrayOfTasks={arrayOfTasks} deleteItem={deletedItem}/>
            </div> 
          </>
        } />
        <Route path='/addtask' element={
          <>
            <div className='mainContent'>
              <Header />
              <AddTask inputValue={ inputValue} arrayOfTasks={arrayOfTasks} handleInputChange={handleInputChange} addTaskToArray={addTaskToArray} />
            </div> 
          </>
        } />
        <Route path='/addproject' element={
          <>
            <div className='mainContent'>
              <Header />
              <AddProject handleSubmit={handleSubmit} setProjectDescription={setProjectDescription} setProjectDuration={setProjectDuration} setProjectName={setProjectName} handleStartDateChange={handleStartDateChange} startDate={startDate} handlePriorityChange={handlePriorityChange} projectName={projectName} projectDescription={projectDescription} projectDuration={projectDuration} projectPriority={ projectPriority} />
            </div> 
          </>
        } />
        <Route path='/projects' element={
        <>
            <div className='mainContent'>
              <Header />
              <Projects deleteProject={deleteProject} arrayOfProjectObjects={arrayOfProjectObjects} setArrayOfProjectObjects={setArrayOfProjectObjects} />
            </div> 
          </>
        } />
        <Route path='/status' element={
        <>
            <div className='mainContent'>
              <Header />
              <Status />
            </div> 
          </>
        } />
        <Route path='/settings' element={
        <>
            <div className='mainContent'>
              <Header />
              <Settings />
            </div> 
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
