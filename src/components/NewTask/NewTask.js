import useHttp from '../../hooks/use-http'
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const { error , isLoading , sendRequest} = useHttp()

  const enterTaskHandler = async (taskText) =>{
    const process = (data)=>{
      const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };
  
        props.onAddTask(createdTask);
    }

    const requestConfig = {
      url : 'https://learning-project-9e8c8-default-rtdb.firebaseio.com//tasks.json',
      method : "POST",
      body : JSON.stringify({ text: taskText }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    sendRequest(requestConfig,process)
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
