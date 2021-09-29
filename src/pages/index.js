import * as React from "react";
import 'semantic-ui-css/semantic.css';
import { Header, Container, Button, Grid, Segment, Form, Select, List, Label, Modal, Icon } from 'semantic-ui-react';

import Task from '../components/Task';
import NewTaskForm from '../components/NewTaskForm';
import EditTaskForm from '../components/EditTaskForm';

const HomePage = () => {
  const initialNewTask = {
    name: '',
    description: '',
    color: ''
  }

  const [newTaskOpen, setNewTaskOpen] = React.useState(false);
  const [editTaskOpen, setEditTaskOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState(initialNewTask);
  const [newEditTask, setNewEditTask] = React.useState(initialNewTask);
  const [list, setList] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false)

  function openNewTask() {
    setNewTaskOpen(true);
  }
  function closeNewTask() {
    setNewTaskOpen(false);
  }
  function openEditTask() {
    setEditTaskOpen(true);
  }
  function closeEditTask() {
    setEditTaskOpen(false);
  }


  function addNewTask() {
    const listClone = [ ...list ];
    listClone.push(newTask);
    setList(listClone);
    setNewTask(initialNewTask);
    closeNewTask();
  }
/*
  const taskList = [];

  list.forEach((task, index) => {
    taskList.push(
      <Task key={`${task.name}-${index}`} name={task.name} color={task.color}></Task>
    );
  });
*/

  
  function editTask(index){       //Will not update class
    console.log("edit", index);
    const newList = list.map((task, i) => {

      if (i !== index) { return task; }
      
        //const listClone = [ ...list ];
        //listClone.push(newEditTask);
        //setList(listClone);
      return {
        name: `Edit ${task.name}: ${task.description}`,
        color: task.color
      }
    });
    setList(newList);
    setNewEditTask(initialNewTask);
    closeEditTask();
  }

  function deleteTask(index) { // deletes ALL items!!!
    console.log("delete", index);
    const newList = list.map((task, i) => {
      setList(list.filter(task => index !== i)); //how to make only delete one???
    });
  }

  const taskList = list.map((task, index) => {
    return ( <Task 
      key={`${task.name}-${index}`} 
      name={task.name} 
      description={task.description} 
      color={task.color} 
      editTask={editTask} 
      deleteTask={deleteTask}
      openEditTask={openEditTask}
      index={index}>
      </Task> );
  });

  
  


  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Grid.Column width='2'>
          <Button icon='bars'></Button>
          </Grid.Column>
          <Grid.Column width='6'> 
          <Header textAlign='center' as='h1'>To Do List</Header>
          </Grid.Column>

          <Grid.Column width='5'> 
          <Modal 
              centered={false}           /* The Modal with instructions on how to use the App */
              open={openModal}
              onClose={() => setOpenModal(false)}
              onOpen={() => setOpenModal(true)}
              trigger={<Button>Instructions</Button>}
            >
              <Modal.Header>How to:</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  Use the + symbol to add a Task. When you are done submit, and you can view edit or delete a specific task using the buttons next to the specific task.
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => setOpenModal(false)}>OK</Button>
              </Modal.Actions>
            </Modal>
          </Grid.Column>

          <Grid.Column textAlign='right' width='3'>
          <Button icon='plus' color='green' onClick={openNewTask}></Button>
          </Grid.Column>
        </Grid>

        {newTaskOpen ? (
          <NewTaskForm 
            closeNewTask={closeNewTask} 
            newTask={newTask} 
            setNewTask={setNewTask}
            addNewTask={addNewTask}
          />
        ) : null}

        {editTaskOpen ? (
          <EditTaskForm 
            closeNewTask={closeEditTask} 
            newTask={newEditTask} 
            setNewEditTask={setNewEditTask}
            editTask={editTask}
          />
        ) : null}
       
        <List>
          {taskList}
        </List>


        <Label>
          <Icon name='angle double right' />This marks the end of the list.
        </Label>
      </Container>
      
      
    </React.Fragment>
  );
};

export default HomePage;
