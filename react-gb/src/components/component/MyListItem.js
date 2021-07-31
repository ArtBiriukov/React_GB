import React from 'react';
import './Components.css';

function MyListItem({MylistItme}) {
  return ( 
    <div>
     {MylistItme.map(item => (
        <div className="list__body" key={item.id}>
          <img className="list__icon" src="https://via.placeholder.com/50" alt="Icon"></img>
          <p className="list__name"> {item.name}</p> 
        </div> 
      ))}
    </div>
  )
}

export default MyListItem;