import React from 'react';
import { connect } from 'react-redux';
import { getPeoples } from '../../store/peoplesReduser';
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
        let scrollBottom = event.target.scrollTop +
            event.target.offsetHeight == event.target.scrollHeight;

        console.log(event.target + " " + event.target.offsetHeight + " " + event.target.scrollHeight)
    }

    handleChangePage = () => {
        let nextPage = this.state.page + 1;
        this.setState({ page: nextPage })
        this.props.getPeoples(nextPage)
        console.log(this.state.page)
    }

    render() {
        return (
            <main className="content">
                <Content data={this.props.data} isLoading={this.props.isLoading} />
                <button onClick={this.handleChangePage}>Show more...</button>
            </main>

        )
    }

}

let mapStateToProps = (state) => ({
    data: state.peoples.data,
    isLoading: state.peoples.isLoading
})

export default connect(mapStateToProps, { getPeoples })(ContentContainer);