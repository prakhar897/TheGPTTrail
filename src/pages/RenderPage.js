import MainMenu from './MainMenu';
import Occupation from './Occupation';
import { connect } from 'react-redux';
import '../styles/common.css';
import NameSelection from './NameSelection';


const RenderPage = ({ pageName }) => {
    console.log("Rendering Page:", pageName);
    switch (pageName) {
        case 'mainMenu':
            return <MainMenu />;
        case 'occupation':
            return <Occupation />;
        case 'nameSelection':
            return <NameSelection />;

        default:
            return null;
    }
};

const mapStateToProps = (state) => ({
    pageName: state.game.activePage,
});



export default connect(mapStateToProps, null)(RenderPage);