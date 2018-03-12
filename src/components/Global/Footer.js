// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Footer.css';

class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string
  };

  //Para que reconozca la entidad de html se utiliza el atributo: dangerouslySetInnerHTML={{ __html: prop}}
  render() {
    const { copyright = '&copy; Codejobs 2018' } = this.props;
    return (
      <div className="Footer">
          <p dangerouslySetInnerHTML={{ __html: copyright}} />
      </div>
    );
  }
}

export default Footer;
