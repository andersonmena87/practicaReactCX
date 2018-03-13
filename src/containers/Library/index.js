// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Actions 
import * as actions from './actions';

// Utils
import { isFirstRender } from '../../lib/utils/frontend';

class Library extends Component {
  static PropTypes = {
    loadBooks: PropTypes.func.isRequired,
    books: PropTypes.array,
    book: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="Library">
          Librearia
        </div>
    );
  }
}

export default connect(state => ({
  books: state.library.books,
  book: state.library.book
}), actions)(Library);