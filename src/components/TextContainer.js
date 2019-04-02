import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  updateText=(e)=> {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <div className="textContainer" >
        <textarea
          style = {{color: this.props.color, fontSize: `${this.props.fontSize}px`, fontFamily : this.props.fontFamily}}
          onChange={this.updateText}
          value={this.state.text}
          placeholder="Start typing your thoughts here!"
          cols="90"
          rows="30"
        />
      </div>
    );
  }
}
