import React from 'react'
import { mount } from 'enzyme'
import { ListingComponents } from '@rentpath/react-ui-core'
import ThemedMobileListingInfo from '../MobileListingInfo'
import theme from './mocks/theme'

const MobileListingInfo = ThemedMobileListingInfo.WrappedComponent

const baseListing = {
  banners: ['$ Coupon'],
  bedrooms: '1-3 Beds',
  bathrooms: '2 Bathrooms',
  unitLevelAvailability: '• 8 units left',
  availability: 'Available Now',
  name: 'Awesome Property!',
  city: 'Great Town',
  state: 'YA',
  price: '$1170+',
  address: '3921 Tugaloo River Drive Northside Park Washington Parkway',
  phone: '678-907-1428',
  rating: {
    score: 4,
    label: '20',
    uniqueId: '123',
  },
  photos: [
    {
      path: '',
      caption: '',
    },
    {
      path: '',
      caption: '',
    },
    {
      path: '',
      caption: '',
    },
  ],
}

const ratingsProp = {
  fillColor: '#d2232a',
  backgroundFillColor: '#ffffff',
}

const props = {
  listing: baseListing,
  theme,
  onClick: () => { },
  navigation: {
    next: {
      children: 'Next',
    },
    previous: {
      children: 'Previous',
    },
  },
  ratings: ratingsProp,
  ctaButtons: [
    {
      valueLocation: 'phone',
      onClick: () => { },
      className: 'phone',
    },
    {
      children: 'send an email',
      onClick: () => { },
      className: 'contact',
    },
  ],
  favoriteButton: {
    onClick: () => { },
    children: '♥',
  },
  photos: {
    server: 'https://image.rent.com/',
    dimensions: '280-120',
  },
  lazyLoad: false,
}

const singleFamilyProps = {
  ...props,
  listing: {
    ...props.listing,
    banners: [],
    singleFamily: true,
  },
  ctaButtons: [
    {
      children: 'Check Availability',
      onClick: () => { },
      className: 'contact',
    },
  ],
}

describe('ag/Listings/MobileListingInfo', () => {
  describe('components render', () => {
    it('renders Price component', () => {
      const wrapper = mount(<MobileListingInfo {...props} />)
      expect(wrapper.find(ListingComponents.Price).exists()).toBeTruthy()
    })

    it('renders PropertyName component', () => {
      const wrapper = mount(<MobileListingInfo {...props} />)
      expect(wrapper
        .find(ListingComponents.PropertyName).exists())
        .toBeTruthy()
    })

    it('renders Bedroom component', () => {
      const wrapper = mount(<MobileListingInfo {...props} />)
      expect(wrapper.find(ListingComponents.Bedroom).exists()).toBeTruthy()
    })

    it('renders UnitLevelAvailability component', () => {
      const wrapper = mount(<MobileListingInfo {...props} />)
      expect(wrapper
        .find(ListingComponents.UnitLevelAvailability).exists())
        .toBeTruthy()
    })

    it('renders Ratings component', () => {
      const wrapper = mount(<MobileListingInfo {...props} />)
      expect(wrapper
        .find(ListingComponents.Ratings).exists())
        .toBeTruthy()
    })
  })

  describe('single family components render', () => {
    it('renders Price component', () => {
      const wrapper = mount(<MobileListingInfo {...singleFamilyProps} />)
      expect(wrapper.find(ListingComponents.Price).exists()).toBeTruthy()
    })

    it('renders Address component', () => {
      const wrapper = mount(<MobileListingInfo {...singleFamilyProps} />)
      expect(wrapper
        .find(ListingComponents.Address).exists())
        .toBeTruthy()
    })

    it('renders Bedroom component', () => {
      const wrapper = mount(<MobileListingInfo {...singleFamilyProps} />)
      expect(wrapper.find(ListingComponents.Bedroom).exists()).toBeTruthy()
    })

    it('renders Availability component', () => {
      const wrapper = mount(<MobileListingInfo {...singleFamilyProps} />)
      expect(wrapper
        .find(ListingComponents.Availability).exists())
        .toBeTruthy()
    })
  })
})