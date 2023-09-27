import { connect } from 'react-redux';
import { changePage } from '../actions/gameActions';
import '../styles/common.css';
import { useFocusInput, useHandleKeyPress } from '../helpers/pageHelpers';

const MainMenu = ({ pageName, changePage }) => {
	// Makes sure that the text field doesn't go out of focus ever.
	const inputRef = useFocusInput();

	const handleKeyPress = useHandleKeyPress(pageName, changePage);

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
