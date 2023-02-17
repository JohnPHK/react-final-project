import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




const Currency = () => {
    const { dispatch,currency  } = useContext(AppContext);

    const [title, setTitle] = useState("£ Pound");

    const handleCurrencyChange = (chosenCurrency) => {
        setTitle(chosenCurrency);

        dispatch({
            type: "CHG_CURRENCY",
            payload: chosenCurrency.charAt(0)
        })
    }


    return (
        
        <DropdownButton id="dropdown-item-button" variant={'success'} title={"Currency" + "(" + title + ")"} className="format"> 
          <Dropdown.Item as="button" onClick={() => handleCurrencyChange("$ Dollar")}><div>$ Dollar</div></Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => handleCurrencyChange("£ Pound")}><div>£ Pound</div></Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => handleCurrencyChange("€ Euro")}><div>€ Euro</div></Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => handleCurrencyChange("₹ Ruppee")}><div>₹ Ruppee</div></Dropdown.Item>

        </DropdownButton>

    );
};

export default Currency;