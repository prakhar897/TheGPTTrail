import React from 'react';
import { connect } from 'react-redux'
import { changePage } from '../actions/gameActions';
import '../styles/common.css';
import Wagon from '../components/wagon';

const Travel = ({ pageName, changePage }) => {

    const handleKeyPress = (event) => {
        console.log(event.key);
        if (event.key === 'Enter') {
            const choice = event.target.value;
            changePage(pageName, choice);
        }
    };

    return (
        <div>
            <div>
                *Mountains in the background*
            </div>
            <div>
                <Wagon />
                <p>* animation shows cart moving left, values below change *</p>
            </div>
            <p>Date: April 2, 1848</p>
            <p>Weather: cool</p>
            <p>Health: good</p>

            <p>Food: 1985 pounds</p>
            <p>Next landmark: 22 miles</p>
            <p>Miles traveled: 80 miles</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Travel); 