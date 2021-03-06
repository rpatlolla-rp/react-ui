import React from 'react'
import { shallow } from 'enzyme'
import validateField from '../validateField'
import Field from '../Field'

describe('validateField', () => {
  let ValidatedField

  beforeEach(() => {
    const ThemedValidatedField = validateField(Field)
    ValidatedField = ThemedValidatedField.WrappedComponent
  })

  it('displays the validFieldIcon when the isValid prop is true', () => {
    const wrapper = shallow(<ValidatedField validFieldIcon={<div data-tid="valid-field-icon" />} isValid />)
    expect(wrapper.find('[data-tid="valid-field-icon"]')).toHaveLength(1)
  })

  it('does not display validFieldIcon when the isValid prop is false', () => {
    const wrapper = shallow(<ValidatedField validFieldIcon={<div data-tid="valid-field-icon" />} isValid={false} />)
    expect(wrapper.find('[data-tid="valid-field-icon"]')).toHaveLength(0)
  })

  it('passes "valid" to the variant prop of the component when the isValid prop is true', () => {
    const wrapper = shallow(<ValidatedField isValid />)
    expect(wrapper.find(Field).prop('variant')).toEqual('valid')
  })

  it('passes "invalid" to the variant prop of the component when the isValid prop is false', () => {
    const wrapper = shallow(<ValidatedField isValid={false} />)
    expect(wrapper.find(Field).prop('variant')).toEqual('invalid')
  })

  it('displays the validationMessage prop when it exists', () => {
    const wrapper = shallow(<ValidatedField validationMessage="foo bar" />)
    expect(wrapper.find('[data-tid="validation-message"]').text()).toEqual('foo bar')
  })

  it('does not render the validationMessage prop when it does not exist', () => {
    const wrapper = shallow(<ValidatedField />)
    expect(wrapper.find('[data-tid="validation-message"]')).toHaveLength(0)
  })
})
