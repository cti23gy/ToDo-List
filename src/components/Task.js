import React from 'react';
import { List, Grid, Label, Button } from 'semantic-ui-react';

const Task = ({name, description, color, editTask, deleteTask, openEditTask, index}) => {

    function editCurrentTask() {
      openEditTask(index);
    }
    function deleteCurrentTask() {
      deleteTask(index);
    }

    return (
        <React.Fragment>
          
              <List.Item>
                <Grid columns='2'>
                  <Grid.Column>
                    <Label size='huge' color={color}>{name}: {description}</Label>
                    </Grid.Column>
                  <Grid.Column textAlign='right'>
                    <Button 
                    onClick={deleteCurrentTask}
                    icon='trash'
                    color='red'> 
                    </Button>
                    <Button
                    onClick={editCurrentTask} 
                    icon='pencil' 
                    color='orange'>
                    </Button>
                  </Grid.Column>
                </Grid>
              </List.Item>
            
        </React.Fragment>
  );
};

export default Task;
