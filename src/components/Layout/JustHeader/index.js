import Header from '~/components/Layout/components/Header';

const JusHeader = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default JusHeader;
