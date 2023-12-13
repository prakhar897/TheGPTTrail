import React from 'react';
import { connect } from 'react-redux';
import '../../styles/common.css';
import { changePage } from '../../actions/gameActions';
import { useFocusInput } from '../../helpers/pageHelpers';
import { addMoney } from '../../actions/playerActions';

const OccupationPage = ({ pageName, changePage, addMoney }) => {
    // Makes sure that the text field doesn't go out of focus ever.
    const inputRef = useFocusInput();

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const choice = event.target.value;
            addMoney(choice)

            changePage(pageName, choice);
        }
    };

    return (
        <div>
            <h1>The Oregon Trail</h1>
            <p>Many kinds of people made the trip to Oregon.</p>
            <p>You may:</p>
            <p>1. Be a banker from Boston</p>
            <p>2. Be a carpenter from Ohio</p>
            <p>3. Be a farmer from Illinois</p>
            <p>4. Find out the differences between these choices</p>

            <input
                type="text"
                onKeyPress={handleKeyPress}
                placeholder="Enter a number (1-4)"
                ref={inputRef}
            />
        </div>
    );
};

const mapDispatchToProps = {
    changePage: changePage,
    addMoney: addMoney
};

const mapStateToProps = (state) => ({
    pageName: state.game.activePage,
});

export default connect(mapStateToProps, mapDispatchToProps)(OccupationPage);
