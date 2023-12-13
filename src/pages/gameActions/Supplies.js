import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changePage } from '../../actions/gameActions';
import '../../styles/common.css';

const Supplies = ({ pageName, inventory, money, changePage }) => {

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === ' ') {
                const choice = event.target.value;
                changePage(pageName, 'space');
            }
        };

        document.addEventListener('keypress', handleKeyPress);

        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, [changePage, pageName]);

    return (
        <div>
            <h1>Your Supplies</h1>

            <div>
                {
                    Object.keys(inventory).map((key, index) => (
                        <p>{inventory[key]['name']} : {inventory[key]['count']}</p>
                    ))
                }
                <p>money left : {money}$</p>
            </div>


            <p>Press SPACE BAR to continue</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    pageName: state.game.activePage,
    inventory: state.player.inventory,
    money: state.player.money
});

const mapDispatchToProps = {
    changePage: changePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Supplies);
