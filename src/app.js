import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



class TodoList extends React.Component{

  render(){
    const todoStyle = {
      border : "2px solid palegoldenrod",
      minHeight : "100px",
      padding : "28px 16px 28px 0",
      margin : "0 0 10px auto",
      borderRadius : "5px"
    }

    return (
      <section>
        {
          this.props.list.map((task, id) =>
            <div style={todoStyle} className="row col-xs-12" key={id}>
              <div className="col-xs-9">
                {task}
              </div>
              <button type="button" className="btn btn-danger col-xs-3" onClick={() => this.props.removeItem(id)}>
                Remove
              </button>
            </div>
          )
        }
      </section>
    )
  }
}



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list : []
    }
  }

  addList() {
    let listItem = this.todoInput.value //this.refs.inputValue
    // let newList = _.cloneDeep(this.state.list).slice(0);     // cloning the existing array
    // newList.push(listItem);   // pushing the new element

    //let newArrayList = this.state.list.concat(listItem.value);
    this.setState({
      list : [...this.state.list, listItem]
    }, () => this.todoInput.value = "")
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
    const todoContainer = {
      border : "2px solid olivedrab",
      minHeight : "1000px",
      marginTop : "125px",
      borderRadius : "5px",
      padding : "10px"
    }

    const inputContainer = {
      border : "2px solid olivedrab",
      minHeight : "100px",
      padding : "28px 16px 28px 0",
      marginLeft : "auto",
      borderRadius : "5px"
    }

    return (
      <section className="container">
        <h1 className="text-center">Todo List</h1>
        <div className="row col-xs-12" style={inputContainer}>
          <div className="col-xs-9">
            <input type="text" className="form-control"  ref={(txt) => this.todoInput = txt}/>
          </div>
          <button type="button" className="btn btn-primary col-xs-3" onClick={() => this.addList()}>
            Add
          </button>
        </div>
        <div style={todoContainer}>
          <TodoList list={this.state.list}  removeItem={(id) => this.remove(id)}/>
        </div>
      </section>
    )
  }
}

export default App;