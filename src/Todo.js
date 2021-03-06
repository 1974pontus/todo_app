import React, { useState } from 'react'
import { List, ListItem, ListItemText, Modal, Button, Input } from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Todo = ({ todo }) => {
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('');

    const classes = useStyles();

    const updateTodo = () => {
        db.collection('todos').doc(todo.id).set({
            todo: input
        }, { merge: true })
        setOpen(true);
    };

    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <h2>Edit Todo</h2>
                    <Input placeholder={todo.doc} value={input} onChange={e => setInput(e.target.value)} />
                    <Button onClick={updateTodo}>Update todo</Button>
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemText primary={todo.doc} secondary="Daily chores!" />
                </ListItem>
                <button onClick={e => setOpen(true)}>Edit</button>
                <DeleteForeverIcon onClick={e => db.collection('todos').doc(todo.id).delete()} />
            </List>
        </>
    )
}

export default Todo;
