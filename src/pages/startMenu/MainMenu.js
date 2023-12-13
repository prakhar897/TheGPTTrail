import { connect } from 'react-redux';
import { changePage } from '../../actions/gameActions';
import '../../styles/common.css';
import { useFocusInput } from '../../helpers/pageHelpers';

const MainMenu = ({ pageName, changePage }) => {
    // Makes sure that the text field doesn't go out of focus ever.
    const inputRef = useFocusInput();

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const choice = event.target.value;
            changePage(pageName, choice);
        }
    };

    return (
        <div>
            <h1>The Oregon Trail</h1>


            <p>1. Travel the trail</p>
            <p>2. Learn about the trail</p>
            <p>3. See the Oregon Top Ten</p>
            <p>4. Turn sound off</p>

            <p>What is your choice ?</p>
            <input
                type="text"
                onKeyPress={handleKeyPress}
                placeholder="Enter a number (1-4)"
                ref={inputRef}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    pageName: state.game.activePage,
});

const mapDispatchToProps = {
    changePage: changePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
