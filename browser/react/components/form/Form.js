import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form className="form-group" onSubmit={event => event.preventDefault()}>
        <label htmlFor="post"> Search for Artists </label>
        <input className="form-control" name="post" type="text" onChange={event => console.log(event.target.value)} />
      </form>
    )
  }
}

export default Form;
