# This is an example of how to use Redux in a basics.
The application is a "To-do list".
The apps allow you to:
1. Create a To-do item
2. Mark 'as complete' a To-do item
3. Delete a 'To-do' item


## Redux Store
In Redux, Store is the Once Central Global State.
```
file: src\store.js
```

## Redux Actions
A Redux Action is an JSon object that Consist in two things:
* An Action Type, an string naming the action
* An a Payload of additional data

The purpose of Redux Action is explecity define the different events that can occur in our applications
```
file: src\todos\actions.js
```

## Redux Reducers
Reducers are the Redux's way of specifying what should happen to our Redux Store when a given action occurs
```
file: src\todos\reducers.js
```

This example was taken for the course of Linkedin Learning - Building Modern Projects with React, and was uploaded only for "community-learning-purposes"
