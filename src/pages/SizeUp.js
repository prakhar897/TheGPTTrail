import React from 'react';
import { connect } from 'react-redux'
import { changePage } from '../actions/gameActions';
import '../styles/common.css';

const SizeUp = ({ pageName, changePage }) => {

    const handleKeyPress = (event) => {
        console.log(event.key);
        if (event.key === 'Enter') {
            const choice = event.target.value;
            changePage(pageName, choice);
        }
    };

    return (
        <div>
            <h1> Independence April 1, 1848 </h1>
            <p>Weather: cool </p>
            <p>Health: good </p>
            <p>Pace: steady</p>
            <p>Rations: filling </p>
            <p>----</p>

            <p>You may:</p>
            <ol>
                <li>
                    <p>Continue on trail</p>
                </li>
                <li>
                    <p>Check supplies</p>
                </li>
                <li>
                    <p>Look at map</p>
                </li>
                <li>
                    <p>Change the pace</p>
                </li>
                <li>
                    <p>Change food rations</p>
                </li>
                <li>
                    <p>Stop to rest</p>
                </li>
                <li>
                    <p>Attempt to trade</p>
                </li>
                <li>
                    <p>Talk to people</p>
                </li>
                <li>
                    <p>Buy supplies</p>
                </li>
            </ol>

            <p>What is your choice ?</p>

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

export default connect(mapStateToProps, mapDispatchToProps)(SizeUp); 