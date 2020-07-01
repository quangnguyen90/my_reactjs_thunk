import React from 'react';

import { connect } from 'react-redux';
import { fetchData } from './actions';

let styles;

const App = (props) => {
  const {container, text, button, buttonText} = styles

  return (
    <div style={container}>
      <div style={text}>Redux Examples</div>
      <div style={button} onClick={() => props.fetchData()}>
        <div style={buttonText}>
          {
            props.appData.isFetching && <div>Loading</div>
          }
          {
            props.appData.data.length ? (
              props.appData.data.map((person, i) => {
                return <div key={i}>
                  <div>Name: {person.name} - Age: {person.age}</div>
                </div>
              })
            ) : 'Load data'
          }
        </div>
      </div>
    </div>
  )
}

styles = {
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    display: 'flex',
    minHeight: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)