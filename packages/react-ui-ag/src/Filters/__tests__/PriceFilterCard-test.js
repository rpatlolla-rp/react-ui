import React from 'react'
import { mount, shallow } from 'enzyme'
import FilterCard from '../FilterCard'
import theme from './mocks/theme'
import ThemedPriceFilterCard from '../PriceFilterCard'

const PriceFilterCard = ThemedPriceFilterCard.WrappedComponent

describe('ag/Filters/PriceFilterCard', () => {
  it('renders a Price Slider', () => {
    const wrapper = shallow(<PriceFilterCard />)
    expect(wrapper.find('[data-tid="price-filter-card-slider"]')).toHaveLength(1)
  })

  it('renders no buttons by default', () => {
    const wrapper = shallow(<PriceFilterCard />)
    expect(wrapper.find(FilterCard).prop('onApplyClick')).toBeFalsy()
    expect(wrapper.find(FilterCard).prop('onCancelClick')).toBeFalsy()
  })

  it('renders the apply button once a value is chosen', () => {
    const wrapper = mount(<PriceFilterCard theme={theme} />)
    expect(wrapper.find(FilterCard).hasClass('PriceFilterCard-noValue')).toBeTruthy()
    wrapper.setState({ value: 1400 })
    expect(wrapper.find(FilterCard).hasClass('PriceFilterCard-noValue')).toBeFalsy()
  })

  it('has a default data-tid', () => {
    const wrapper = shallow(<PriceFilterCard />)
    expect(wrapper.find('[data-tid="price-filter-card"]')).toHaveLength(1)
  })

  it('has allows an override of the data-tid', () => {
    const wrapper = shallow(<PriceFilterCard data-tid="foo" />)
    expect(wrapper.find('[data-tid="foo"]')).toHaveLength(1)
    expect(wrapper.find('[data-tid="price-filter-card"]')).toHaveLength(0)
  })
})
