import { connect } from 'react-redux';
import { changePage } from '../actions/gameActions';
import '../styles/common.css';
import { useFocusInput } from '../helpers/pageHelpers';

const Supplies = ({ pageName, inventory, money, changePage }) => {
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
            <h1>Your Supplies</h1>

            <div>
                {
                    Object.keys(inventory).map((key, index) => (
                        <p>{inventory[key]['name']} : {inventory[key]['count']}</p>
                    ))
                }
                <p>money left : {money}</p>
            </div>


            <p>Press SPACE BAR to continue</p>
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
    inventory: state.player.inventory,
    money: state.player.money
});

const mapDispatchToProps = {
    changePage: changePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Supplies);
