import React from 'react';


class TodoList extends React.Component{

  render(){
    const todoStyle = {
      border : "2px solid palegoldenrod",
      minHeight : "100px",
      padding : "28px 16px 28px 0",
      margin : "0 0 10px auto",
      borderRadius : "5px"
    }

    const todoContainer = {
      border : "2px solid olivedrab",
      minHeight : "1000px",
      marginTop : "125px",
      borderRadius : "5px",
      padding : "10px"
    }

    return (
      <section style={todoContainer}>
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

export default TodoList;