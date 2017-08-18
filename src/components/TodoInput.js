import React from 'react'

class TodoInput extends React.Component{
  render(){
    const inputContainer = {
      border : "2px solid olivedrab",
      minHeight : "100px",
      padding : "28px 16px 28px 0",
      marginLeft : "auto",
      borderRadius : "5px"
    }

    return(
        <div className="row col-xs-12" style={inputContainer}>
          <div className="col-xs-9">
            <input type="text" className="form-control"  ref={(txt) => this.todoInput = txt}/>
          </div>
          <button type="button" className="btn btn-primary col-xs-3" onClick={() => this.props.addItem(this.todoInput)}>
            Add
          </button>
        </div>
    )
  }
}

export default TodoInput;