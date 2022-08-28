import React from 'react'

function Input({ id, label, type }) {
  return (
    <>
      <label for={id}>{label}: </label>
      <input type={type} name={id} id={id} />
    </>
  )
}

export default Input
