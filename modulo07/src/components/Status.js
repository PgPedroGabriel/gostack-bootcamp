import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code;
        }
        return children;
      }}
    />
  );
}

Status.propTypes = {
  code: PropTypes.number,
  children: PropTypes.shape(),
};
Status.defaultProps = {
  code: 404,
  children: '',
};
