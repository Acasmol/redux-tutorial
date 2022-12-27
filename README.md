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

## Persisting Redux over browser refresh
* Installing redux-persist
* Need to import persisReducer from redux-persist into store.js
* Need to import storage from 'redux-persis/lib/storage'
* Need to import autoMergeLevel2 from 'redux-persis/lib/stateReconciler/autoMergeLevel2'

Then, wrap our root reducer into persistReducer

Also, index.js needs to be updated:
* Need to import persistStore from redux-persist 
* Need to import PersistGate from 'redux-persis/lib/integration/react'



## Redux Best Practices
* Export connected and unconnected version of a component
   1. The unconnected version could be used for testing
* Keep redux actions and async operations (such as fetching data from the network) out of your reducers
   1. The reducers are specifically mean to take the current state of the Redux store and combine it with an action to get the updated state
* Think carefully about connecting components
   1. Connecting a component can, in practice, make it less reusable




This example was taken for the course of Linkedin Learning - Building Modern Projects with React, and was uploaded only for "community-learning-purposes"
