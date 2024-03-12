import React, { useState } from "react";

function List(props){
  return (
    <div onClick={props.deleteItem}>
    <li>{props.text}</li>
    </div>
  );
}

export default List;
