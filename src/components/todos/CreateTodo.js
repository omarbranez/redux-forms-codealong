import React, { Component } from 'react';
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor(){
    super()
    this.state = {
      text: "",
    }
  }
//   render() {
//     return(
//       <div>
//         <input type="text" placeholder="add todo"/>
//         <input type="submit" />
//       </div>
//     )
//   }
// }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
 
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
    // or
    // this.props.dispatch({ type: "ADD_TODO", payload: this.state})
    // since dispatch is returned by connect by default if it has no arguments
    // would also require export default connect()(createTodo) on bottom
  }
  render() {
    return(
      <div>
        {/* <form> */}
        <form onSubmit={this.handleSubmit}>
          {/* <input type="text" placeholder="add todo" onChange={( event ) => this.handleChange(event)} /> */}
          <p>
            <input type="text" placeholder="add todo" onChange={this.handleChange} value={this.state.text} /> 
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => {
      dispatch({ type: "ADD_TODO", payload: formData})
    }
  }
}
export default connect(null, mapDispatchToProps)(CreateTodo);
