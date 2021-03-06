import React from 'react';

import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormButton from './FormButton';

function BurgerForm({ handleChange, handleSubmit }) {
  return(
    <form onSubmit={handleSubmit}>
      <FormInput name="name" type="text" handleChange={handleChange} />
      <FormInput name="restaurant" type="text" handleChange={handleChange}/>
      <FormInput name="address" type="text" handleChange={handleChange}/>
      <FormInput name="price" type="number" handleChange={handleChange}/>
      <FormTextarea name="description" handleChange={handleChange}/>
      <FormInput name="image" type="text" handleChange={handleChange}/>
      <FormButton text="Create"/>
    </form>
  );
}

export default BurgerForm;
