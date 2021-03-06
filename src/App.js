import React, { Component } from "react";
import './App.css';
import TOC from './components/TOC'
import Subject from './components/Subject'
import Content from './components/Content'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: { title: 'WEB!', sub: 'world wide web!'},
      welcome: { title: 'Welcome', desc: 'Hello React!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is a information'},
        {id: 2, title: 'CSS', desc: 'CSS is a design'},
        {id: 3, title: 'Javascript', desc: 'Javascript is a interactive'}
      ]
    }
  } 

  render() {
    console.log('App render');
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while ( i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      }
    }
    return (
      <div className="App">
        <Subject 
          title = {this.state.subject.title} 
          sub = {this.state.subject.sub}
          onChangePage = { e => {
            this.setState({ mode: 'welcome' });
          }}/>
          
        <TOC 
          onChangePage = { e => {
            this.setState( {
              mode: 'read'
            });
          }}
          data={this.state.contents}/>
        <Content title={_title} desc={_desc}/>
      </div>
    );
  }
}

export default App;
