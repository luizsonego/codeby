import React from 'react'
import './styles.css'

export default function Switch({ isOn, handleToggle, onColor }) {

  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{ background: isOn && onColor }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  )
}