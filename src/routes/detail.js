import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDo }) {
  return (
    <div>
      <h1>{`Detail${toDo?.text}`}</h1>
      <h5>Created at : {toDo?.id}</h5>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((item) => item.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
