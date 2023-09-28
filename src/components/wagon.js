import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Assuming you're using Redux
import '../styles/components.wagon.css';

const Wagon = () => {

    const dispatch = useDispatch();
    const [bobbing, setBobbing] = useState(false);

    useEffect(() => {
        if (bobbing) {
            setTimeout(() => {
                setBobbing(false);
                //dispatch(/* Your action here */);
            }, 2000);
        }
    }, [bobbing, dispatch]);

    const handleStartAnimation = () => {
        setBobbing(true);
    };

    return (
        <div className={`car ${bobbing ? 'bobbing' : ''}`}>
            <img src={process.env.PUBLIC_URL + '/images/wagon.png'} alt="Car" height="60px" width="80px" />
            <button onClick={handleStartAnimation}>Animate Car</button>
        </div>
    );
};

export default Wagon;