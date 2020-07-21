import React from 'react';
import { connect } from 'react-redux';
import { getPeoples, getDataFromSearching, isSearchingToggle } from '../../store/peoplesReduser';
import { setModalData, setSpeciesThunk } from '../../store/modalReduser';

import Content from '../Content/Content';
import Search from '../Search/Search';
import Preloader from '../Preloader/Preloader';
import { setInitializedSuccess } from '../../store/appReduser';


const increasePage = (state) => {
    return { page: state.page + 1 }
}


class ContentContainer extends React.Component {
    state = {
        page: 1,
    }

    componentDidMount() {
        if (!this.props.isSearching) {
            window.addEventListener('scroll', this.handleScroll);
            this.props.getPeoples(this.state.page)          
        }
        this.timerHandle = setTimeout(() => {
            this.props.setInitializedSuccess()
        }, 3000)

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }

    handleScroll = (event) => {
        if (event.target.body.getBoundingClientRect().bottom < 700) {
            console.log(event.target.body.getBoundingClientRect().bottom)
            this.handleChangePage()
        }
    }

    handleChangePage = () => {
        if (this.props.maxPages > this.state.page) {
            this.setState(increasePage)
            this.props.getPeoples(this.state.page)
        }
    }



    render() {
        return (
            <main className="content">
                {(!this.props.isLoading && this.props.initialized)
                    ? <>
                        <Search getDataFromSearching={this.props.getDataFromSearching}
                            getPeoples={this.props.getPeoples}
                            isSearching={this.props.isSearchingToggle} />
                        <Content
                            data={this.props.data}
                            isLoading={this.props.isLoading}
                            setModalData={this.props.setModalData}
                            setSpeciesThunk={this.props.setSpeciesThunk}
                        />
                    </>
                    : <Preloader />
                }

            </main>

        )
    }

}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    data: state.peoples.data,
    isLoading: state.peoples.isLoading,
    maxPages: state.peoples.maxPages,
    isSearching: state.peoples.isSearching,
})

export default connect(mapStateToProps,
    {
        setInitializedSuccess,
        getPeoples,
        setModalData,
        setSpeciesThunk,
        getDataFromSearching,
        isSearchingToggle
    })(ContentContainer);