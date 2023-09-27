import React from 'react';
import { connect } from 'react-redux'
import { changePage } from '../actions/gameActions';
import '../styles/common.css';

const NameSelection = ({ pageName, changePage }) => {

    const handleKeyPress = (event) => {
        console.log(event.key);
        if (event.key === 'Enter') {
            const choice = event.target.value;
            changePage(pageName, choice);
        }
    };

    return (
        <div>
            <p>What is the first name of the wagon leader? </p>
            <input
                type="text"
                onKeyPress={handleKeyPress}
                placeholder="Enter a number (1-4)"
            />
            <p>What are the first names of the fourother members of your party ?</p>
            <input
                type="text"
                onKeyPress={handleKeyPress}
                placeholder="Enter a number (1-4)"
            />
            <input
                type="text"
                onKeyPress={handleKeyPress}
                placeholder="Enter a number (1-4)"
            />
            <input
                type="text"
                onKeyPress={handleKeyPress}
                placeholder="Enter a number (1-4)"
            />
            <input
                type="text"
                onKeyPress={handleKeyPress}
                placeholder="Enter a number (1-4)"
            />

            <p>(Enter names or press Return)</p>

            <p>Are these names correct?</p>

            <input
                type="text"
                onKeyPress={handleKeyPress}
                placeholder="Enter a number (1-4)"
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