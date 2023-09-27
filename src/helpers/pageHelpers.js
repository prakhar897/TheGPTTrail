import { useRef, useEffect } from 'react';

var data = {
	mainMenu: {
		1: {
			next_page: 'occupation',
		},
		2: {
			next_page: 'learnMore',
		},
	},
	occupation: {
		1: {
			add_money: 1600,
			next_page: 'nameSelection',
		},
		2: {
			add_money: 800,
			next_page: 'nameSelection',
		},
		3: {
			add_money: 400,
			next_page: 'nameSelection',
		},
	},
	nameSelection: {
		yes: {
			next_page: 'travel',
		},
	},
};

export const useFocusInput = () => {
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();

		const handleFocus = () => {
			inputRef.current.focus();
		};

		document.addEventListener('click', handleFocus);

		return () => {
			document.removeEventListener('click', handleFocus);
		};
	}, []);

	return inputRef;
};

export const getNextPage = (currentPage, choice) => {
	console.log(currentPage, choice);
	return data[currentPage][choice + '']['next_page'];
};

export const useHandleKeyPress = (pageName, changePage) => {
	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			const choice = event.target.value;
			changePage(pageName, choice);
		}
	};

	return handleKeyPress;
};
