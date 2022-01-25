import React from 'react';
import PropTypes from 'prop-types';

import styles from './RadioBox.module.css';

const RadioBox = ({name, selectedItem, onChange}) => {
    const isChecked = name === selectedItem;
    return (
        <div className={`${styles.radioBox}`}>
            <input type="radio" value={name} id={name} name={name} checked={isChecked} onChange={onChange} />
            <label htmlFor={name}>{name}</label>
        </div>
    );
};

RadioBox.propTypes = {
    name: PropTypes.string.isRequired,
    selectedItem: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default RadioBox;
