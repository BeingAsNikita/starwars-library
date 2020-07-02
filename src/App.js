import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentContainer from './components/Content/ContentContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <ContentContainer />
        <Footer />
      </div>
    );
  }

}

export default App;
