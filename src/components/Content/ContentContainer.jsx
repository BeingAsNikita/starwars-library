import React from 'react';
import { connect } from 'react-redux';
import { getPeoples, getDataFromSearching } from '../../store/peoplesReduser';
import { setModalData,setSpeciesThunk } from '../../store/modalReduser';

import Content from '../Content/Content';
import Search from '../Search/Search';


class ContentContainer extends React.Component {
    state = {
        page: 1,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.props.getPeoples(this.state.page)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        if (event.target.body.getBoundingClientRect().bottom < 800) {
            this.handleChangePage()
        }
    }

    handleChangePage = () => {
        if (this.props.maxPages > this.state.page) {
            let nextPage = this.state.page + 1;
            this.setState({ page: nextPage })
            this.props.getPeoples(nextPage)
        }
    }

    render() {
        return (
            <main className="content">
                <Search getDataFromSearching={this.props.getDataFromSearching}/>
                <Content
                    data={this.props.data}
                    isLoading={this.props.isLoading}
                    setModalData={this.props.setModalData}
                    setSpeciesThunk={this.props.setSpeciesThunk}
                />
                {
                    this.props.isLoading &&  <h1>IS LOADING...</h1>
                }

            </main>

        )
    }

}

let mapStateToProps = (state) => ({
    data: state.peoples.data,
    isLoading: state.peoples.isLoading,
    maxPages: state.peoples.maxPages,
})

export default connect(mapStateToProps, { getPeoples, setModalData, setSpeciesThunk, getDataFromSearching })(ContentContainer);