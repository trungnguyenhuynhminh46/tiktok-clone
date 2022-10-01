import Header from '~/layouts/components/Header';
import styles from './JustHeader.module.scss';
import PropTypes from 'prop-types';

const JusHeader = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Header></Header>
            <div className={styles.container}>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
};

JusHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default JusHeader;
