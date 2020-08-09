import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { wrapper } from './_app';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';

const LandingPage = (props) => {
    useEffect(() => {
        props.fetchPosts();
    }, [props]);

    return <h1>Hello!!</h1>
}
// Fetch data at build time
wrapper.getStaticProps(async ({ store }) => {
    store.dispatch(fetchPosts());
})

const mapDispatchToProps = (dispatch) => {
    return {
        // so that this can be called directly 
        fetchPosts: bindActionCreators(fetchPosts, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(LandingPage);