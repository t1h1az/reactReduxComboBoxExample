import React, { Component } from 'react'
import { connect } from 'react-redux'
import ComboBox from './containers/ComboBox'
import './App.css'

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <ComboBox />
          <p>
            Here is your {this.props.comboBoxItem}
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    comboBoxItem: state.comboBoxItem
  }
}
export default connect(mapStateToProps)(App)
