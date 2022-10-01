// Library
import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Assets
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = ({ src, alt, className: inputClassName, fallback: inputFallback = images.default_img, ...props }) => {
    const [fallback, setFallback] = useState('');
    function handleError(e) {
        setFallback(inputFallback);
    }
    const className = classNames(styles.wrapper, inputClassName);
    return <img className={className} src={fallback || src} alt={alt} onError={handleError} {...props} />;
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
