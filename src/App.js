import React, { useEffect, useState} from 'react';
import useHttp from './hooks/use-http'
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks,setTasks] = useState([])
  
  const {error, isLoading, sendRequest:fetchData} = useHttp()

  useEffect(() => {
    const process = (data) => {
      const loadedTasks = [];
  
        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
  
        setTasks(loadedTasks);
    }
    const requestConfig = {
      url : 'https://learning-project-9e8c8-default-rtdb.firebaseio.com//tasks.json',
    }
    fetchData(requestConfig,process);
  }, [fetchData]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchData}
      />
    </React.Fragment>
  );
}

export default App;
