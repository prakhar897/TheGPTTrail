import React from 'react';
import { connect } from 'react-redux'
import { changePage } from '../actions/gameActions';
import '../styles/common.css';

const MainMenu = ({ pageName, changePage }) => {

    const handleKeyPress = (event) => {
        console.log(event.key);
        if (event.key === 'Enter') {
            const choice = event.target.value;
            changePage(pageName, choice);
        }
    };

    return (
        <div>
            <h1>The Oregon Trail</h1>
            <ol>
                <li>Travel the trail</li>
                <li>Learn about the trail</li>
                <li>See the Oregon Top Ten</li>
                <li>Turn sound off</li>
            </ol>
            <p>What is your choice ?</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu); 