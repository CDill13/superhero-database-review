import React from 'react';
import { connect } from 'react-redux';

function DisplayCount(props) {
    return (
        <div style={{ fontSize: '36px' }}>
            {props.count}
        </div>
    )
}

function mapStateToProps( state ) {
    return {
        count: state.dc.count
    }
}

export default connect( mapStateToProps )(DisplayCount);