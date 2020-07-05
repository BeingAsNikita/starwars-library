import React from 'react';
import { connect } from 'react-redux';
import { getPeoples } from '../../store/peoplesReduser';
import { setModalDataSuccess } from '../../store/modalReduser';

import Content from '../Content/Content';


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
        if (this.props.maxPages >= this.state.page) {
            let nextPage = this.state.page + 1;
            this.setState({ page: nextPage })
            this.props.getPeoples(nextPage)
        }
    }

    render() {
        return (
            <main className="content">
                <Content
                    data={this.props.data}
                    isLoading={this.props.isLoading}
                    setModalDataSuccess={this.props.setModalDataSuccess}
                />
                {
                    !this.props.isLoading && <h1>IS LOADING...</h1>
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

export default connect(mapStateToProps, { getPeoples, setModalDataSuccess })(ContentContainer);