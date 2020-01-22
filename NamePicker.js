/*import react, {useState} from 'react'
import { tsPropertySignature } from '@babel/types';

function NamePicker() {
    const [name, setName] = useState('')
    const [showName, setShowName] = useState(false)
    return <div>
        <input value = {name}
        onChange= {ee=> setName(e.target.value)}
        onKeyPress = {e => {
            if (e.key == 'Enter') tsPropertySignature.onSave(name)

        }}
    </div>
}

export default NamePicker
*/

import React from 'react'
import {FiEdit} from 'react-icons/fi'

function NamePicker({ changeEditName, name, editName, changeName }) {
  if (editName) {
    return (<div className="edit-username">
      <input value={name} className="name-input"
        onChange={e => changeName(e.target.value)}
      />
      <button className="name-button" 
        onClick={() => changeEditName(false)}>
        OK
      </button>
    </div>)
  } else {
    return (<div className="username">
      {name || "Set Username:"}
      <FiEdit style={{ marginLeft: 10, cursor: 'pointer' }}
        onClick={() => changeEditName(true)}
      />
    </div>)
  }
}

export default NamePicker