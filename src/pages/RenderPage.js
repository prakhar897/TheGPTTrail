import { connect } from 'react-redux';
import '../styles/common.css';

import MainMenu from './startMenu/MainMenu';
import Occupation from './startMenu/Occupation';
import NameSelection from './startMenu/NameSelection';
import Travel from './Travel';
import SizeUp from './SizeUp';
import Supplies from './gameActions/Supplies';


const RenderPage = ({ pageName }) => {
    console.log("Rendering Page:", pageName);
    switch (pageName) {
        case 'mainMenu':
            return <MainMenu />;
        case 'occupation':
            return <Occupation />;
        case 'nameSelection':
            return <NameSelection />;
        case 'travel':
            return <Travel />;
        case 'sizeUp':
            return <SizeUp />;
        case 'supplies':
            return <Supplies />;

        default:
            return null;
    }
};

const mapStateToProps = (state) => ({
    pageName: state.game.activePage,
});



export default connect(mapStateToProps, null)(RenderPage);