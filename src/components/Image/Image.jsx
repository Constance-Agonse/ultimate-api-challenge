import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
    return <img src={props.url} alt="" width="200" />;
};

export default Image;

Image.propTypes = {
    url: PropTypes.string.isRequired,
};
