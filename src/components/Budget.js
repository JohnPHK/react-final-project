import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input
                                required='required'
                                type='number'
                                id='budget'
                                value={budget}
                                style={{size: 10}}
                                onChange={(event) => {budget = event.target.value}}
                                >
                </input>
            </span>
            
        </div>
    );
};
export default Budget;
