import React from 'react'

export default (props) => {
  return (
    <div className={repLineStyles.castelSubs}>
      <ul>
        <li><a href='#' onClick={props.handleClick} id='castel'>Castel</a></li>
        <li><a href='#' onClick={props.handleClick} id='guell-lamadrid' >Guell Lamadrid</a></li>
        <li><a href="#" onClick={props.handleClick} id='lcdlm'>Les Creations de la Maison</a></li>
      </ul>
    </div>
  )
}
