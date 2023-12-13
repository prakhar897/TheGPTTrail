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
        default: {
            next_page: 'nameSelection',
        }
    },
    travel: {
        enter: {
            next_page: 'sizeUp'
        },
        default: {
            next_page: 'travel'
        }
    },
    sizeUp: {
        1: {
            next_page: 'travel'
        },
        2: {
            next_page: 'supplies'
        },
        3: {
            next_page: 'map'
        },
        4: {
            next_page: 'changePace'
        },
        5: {
            next_page: 'changeFoodRations'
        },
        6: {
            next_page: 'stopToRest'
        },
        7: {
            next_page: 'AttemptToTrade'
        },
        8: {
            next_page: 'TalkToPeople'
        },
        9: {
            next_page: 'BuySupplies'
        },
        10: {
            next_page: 'hunt'
        }
    },
    supplies: {
        space: {
            next_page: "sizeUp"
        }
    }
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
    if (data[currentPage][choice + '']) {
        return data[currentPage][choice + '']['next_page'];
    }
    return data[currentPage]['default']['next_page'];
};
