import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentContainer from './components/Content/ContentContainer';
import Modal from './components/Modal/Modal';
import { connect } from 'react-redux';
import { hideModal } from './store/modalReduser';

class App extends React.Component {

  render() {
    return (
      <div className={'App' + (this.props.modal.isShow ? ' blur' : '') }>
        <Header />
        <ContentContainer />
        <Footer />

        { this.props.modal.data && <Modal {...this.props.modal} hideModal={this.props.hideModal}/>}

      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  peoples: state.peoples,
  modal: state.modal,
})

export default connect(mapStateToProps, { hideModal })(App);