import './GlobalStyle.scss';
import PropTypes from 'prop-types';

const GlobalStyle = ({ children }) => {
    return <>{children}</>;
};

GlobalStyle.propTypes = {
    children: PropTypes.node,
};

export default GlobalStyle;
