import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const Addcategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) =>{
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit Hecho');
    if (inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats]);
      setInputValue('')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      </form>
    </div>
  )
}
Addcategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}