import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Todo from './component/Todo';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import TodoListItem from './component/TodoListItem';

import { shallow, mount } from 'enzyme' //render components witout child

const data = [
  {
    id: '1234554',
    title: 'buy milk',
    description: 'go and buy milk',
    priority: 'low',
    completed: false
  },
  {
    id: '54654656',
    title: 'buy bread',
    description: 'go and buy bread',
    priority: 'high',
    completed: false
  },
  {
    id: '12347565474554',
    title: 'buy water',
    description: 'go and buy water',
    priority: 'low',
    completed: false
  }
]
const todoIetm = {
  id: '12347565474554',
  title: 'buy water',
  description: 'go and buy water',
  priority: 'low',
  completed: false
}


describe('Rendering components', () => {

  it('renders component without crashing', () => {
    shallow(<App />)
  });

  it('renders App component header without crashing', () => {
    const wrapper = shallow(<App />)
    const header = (<h1 id="app-header">My Todo list</h1>)
    expect(wrapper.contains(header)).toEqual(true)
  })

  it('renders Todolist component without crashing', () => {
    shallow(<TodoList />)
  })

  it('renders header', () => {
    const wrapper = mount(<App />)
    const label = wrapper.find("#app-header").text();
    expect(label).toEqual("My Todo list")
  })


  it('renders witout crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    console.log(true)
    ReactDOM.unmountComponentAtNode(div)
  })
})


//test passing props to component

describe('passing props', () => {
  const datawrapper = mount(<TodoList data={data} />)
  const listItemwrapper = mount(<TodoListItem todo={todoIetm} />)


  it('accept todo list data array', () => {
    expect(datawrapper.props().data).toEqual(data)
  })
  it('accept todolistitem data array', () => {
    expect(listItemwrapper.props().todo).toEqual(todoIetm)
  })
})


// describe('test api calls', async () => {
// const response = 

// })