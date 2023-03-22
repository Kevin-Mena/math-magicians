import React from 'react';
import PropTypes from 'prop-types';

const DefaultValue = ({ result }) => <p className="defaultValue">{result}</p>;
DefaultValue.propTypes = { result: PropTypes.string.isRequired };
export default DefaultValue;
