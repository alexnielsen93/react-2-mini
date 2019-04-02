import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor(){
    super()
    this.state =({
      color: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    })
    this.updateColor = this.updateColor.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
  }

  // updateColor
  updateColor = (newColor)=> (
    this.setState({
      color: newColor
    })
  )
  // updateSize
  updateSize = (newSize)=>(
    this.setState({
      fontSize: newSize
    })

  )
  // updateFamily
    updateFamily = (newFamily) => {
      this.setState(
        {fontFamily: newFamily}
      )
    }
  // updateEditStatus
    updateEditStatus = (newStatus)=>{
      this.setState({
        allowEdit: newStatus
      })

    }
  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle updateEditStatus={this.updateEditStatus}/>
          <ColorChanger  updateColor={this.updateColor}
          color = {this.state.color} allowEdit={this.state.allowEdit}/>


          <SizeChanger updateSize={this.updateSize} allowEdit= {this.state.allowEdit} fontSize = {this.state.size}/>

          
          <FamilyChanger updateFamily={this.updateFamily} allowEdit= {this.state.allowEdit}/>
        </div>
        <div className="textArea">{
          <TextContainer
          color={this.state.color}
          fontSize={this.state.fontSize}
          fontFamily={this.state.fontFamily}
          />
        }</div>
      </div>
    );
  }
}

export default App;
