import React from 'react';
import { connect } from 'react-redux';

type PropTypes = {
    reducer: any,
};
const App = (props: PropTypes) => {
    const {
        reducer,
    } = props;

    return (
        <div>
            App
            state: {reducer}
        </div>
    );
};
export default connect(
    state => state,
)(App);
