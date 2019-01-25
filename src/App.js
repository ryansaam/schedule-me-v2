import React, { Component } from 'react';

import colorTheme from './calendar.colors.js'
import Scheduler from './components/Scheduler.js'
import MyForm from './components/Form.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scheduler
          width={200}
          date={new Date()}
          colors={colorTheme.redflat}
          form={<MyForm />}
        />
      </div>
    );
  }
}

export default App;
