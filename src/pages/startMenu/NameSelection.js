import React from 'react';
import { connect } from 'react-redux'
import { changePage } from '../../actions/gameActions';
import '../../styles/common.css';
import { addCharacterName } from '../../actions/playerActions';

const NameSelection = ({ pageName, changePage }) => {
    const firstInputRef = React.useRef();
    const secondInputRef = React.useRef();
    const thirdInputRef = React.useRef();
    const fourthInputRef = React.useRef();
    const fifthInputRef = React.useRef();
    const sixthInputRef = React.useRef();

    const handleKeyPress = (event, nextInput) => {
        if (event.key === 'Enter') {
            const value = event.target.value;
            if (!nextInput) {
                changePage(pageName, value);

            } else {
                addCharacterName(value);
                nextInput.focus();
            }

        }
    };

    return (
        <div>
            <p>What are the first names of the five members of your party ?</p>
            <input
                type="text"
                onKeyPress={(event) => handleKeyPress(event, secondInputRef.current)}
                placeholder="Enter a number (1-4)"
                ref={firstInputRef}
            />
            <input
                type="text"
                onKeyPress={(event) => handleKeyPress(event, thirdInputRef.current)}
                placeholder="Enter a number (1-4)"
                ref={secondInputRef}
            />
            <input
                type="text"
                onKeyPress={(event) => handleKeyPress(event, fourthInputRef.current)}
                placeholder="Enter a number (1-4)"
                ref={thirdInputRef}
            />
            <input
                type="text"
                onKeyPress={(event) => handleKeyPress(event, fifthInputRef.current)}
                placeholder="Enter a number (1-4)"
                ref={fourthInputRef}
            />
            <input
                type="text"
                onKeyPress={(event) => handleKeyPress(event, sixthInputRef.current)}
                placeholder="Enter a number (1-4)"
                ref={fifthInputRef}
            />

            <p>(Enter names or press Return)</p>

            <p>Are these names correct?</p>

            <input
                type="text"
                onKeyPress={(event) => handleKeyPress(event, null)}
                placeholder="Enter a number (1-4)"
                ref={sixthInputRef}
            />

        </div>
    );
}

const mapStateToProps = (state) => ({
    pageName: state.game.activePage,
});


const mapDispatchToProps = {
    changePage: changePage
};

export default connect(mapStateToProps, mapDispatchToProps)(NameSelection);