import React from 'react';



const Select = ( {location, setLocation } ) => { 
    
    return ( 
        <label>
        <select name="Location" 
            onChange = {event => setLocation(event.target.value)}
            value = {location} 
            required >
              <option value = "" > Select Fur type:</option>
              <option value = "short" > Short</option>
              <option value = "long" > Long</option>
              <option value = "naked" > Naked </option>
       </select>
     </label> 
    )
  }

  export default Select;