var data = {
    "mainMenu": {
        "1": {
            "next_page": "occupation"
        },
        "2": {
            "next_page": "learn_more"
        }
    },
    "occupation": {
        "1": {
            "add_money": 1600,
            "next_page": "nameSelection"
        },
        "2": {
            "add_money": 800,
            "next_page": "nameSelection"
        },
        "3": {
            "add_money": 400,
            "next_page": "nameSelection"
        },
    },
    "nameSelection": {
        "yes": {
            "next_page": "travel"
        }
    }
}

export const getNextPage = (currentPage, choice) => {
    console.log(currentPage, choice);
    return data[currentPage][choice + ""]["next_page"];
}