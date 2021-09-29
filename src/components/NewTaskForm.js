import React from 'react';
import { Segment, Header, Form, Button, Select, Input } from 'semantic-ui-react';

const NewTaskForm = ({closeNewTask, newTask, setNewTask, addNewTask}) => {

    function changeNewTask(e, {value, name}) {
      const newTaskClone = { ...newTask };
      newTaskClone[name] = value;
      setNewTask(newTaskClone);

      //console.log(e, name, value);

    }

    return (
        <React.Fragment>
          <Segment>
          <Header as='h2'>New Task</Header>
          <Form>
            <Form.Field 
            control={Input}
            label='Task Name'
            placeholder='Enter Task Name...'
            value={newTask.name}
            onChange={changeNewTask}
            name='name'
            inline
            />
            <Form.Field 
            control={Input}
            label='Task Description'
            placeholder='Enter Description...'
            value={newTask.description}
            onChange={changeNewTask}
            name='description'
            inline
            />
            <Form.Field 
            control={Select}
            label='Task Color'
            placeholder='Choose Color...'
            inline
            options={[
              {text: 'Red', value: 'red'},
              {text: 'Yellow', value: 'yellow'},
              {text: 'Green', value: 'green'},
            ]}
            value={newTask.color}
            onChange={changeNewTask}
            name='color'
            />
            <Button.Group fluid>
            <Button color='red' onClick={closeNewTask}>Cancel</Button>
            <Button.Or/>
            <Button color='green' onClick={addNewTask}>Add Task</Button>
            </Button.Group>
          </Form>
          </Segment>
            
        </React.Fragment>
  );
};

export default NewTaskForm;