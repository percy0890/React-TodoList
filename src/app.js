import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list : []
    }
  }

  addItem(todoInput) {
    console.log('hey')
    let listItem = todoInput.value //this.refs.inputValue
    // let newList = _.cloneDeep(this.state.list).slice(0);     // cloning the existing array
    // newList.push(listItem);   // pushing the new element

    //let newArrayList = this.state.list.concat(listItem.value);  //changing the state directly- not recommended
    this.setState({
      list : [...this.state.list, listItem]     // always change state inside setState()
    }, () => todoInput.value = "")
  }

  remove(id){
    // let updatedList = this.props.list.splice( id, 1 );
    let updatedList = this.state.list.slice(0);
    updatedList.splice(id, 1);
    this.setState({
      list : updatedList
    })
  }


  render() {
    return (
      <section className="container">
        <h1 className="text-center">Todo List</h1>
        <TodoInput addItem={(todoInput) => this.addItem(todoInput)} />
        <TodoList list={this.state.list}  removeItem={(id) => this.remove(id)} />
      </section>
    )
  }
}

export default App;