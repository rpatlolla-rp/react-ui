import React from 'react'
import PropTypes from 'prop-types'
import { action } from '@storybook/addon-actions'
import { ListingCarousel } from 'react-ui-ag/src'
import { Card } from 'react-ui-core/src'
import themed from 'react-themed'

const listings = [
  {
    bedrooms: '1-3 Bedrooms',
    bathrooms: '2 Bathrooms',
    name: 'Awesome Property! - Also the longest line you\'ve ever seen',
    city: 'Great Town',
    state: 'YA',
    price: '$1 MILLION DOLLARS',
    banner: '$ Coupon',
    unitLevelAvailability: '• 8 units left - Come get you some!',
    phone: '404-378-1428',
    rating: {
      score: 4,
      label: '20',
      uniqueId: '123',
    },
    photos: [
      {
        path: 'imgr/d9551cdeb8152c6ecafd96ccf0c9a5dc/',
        caption: null,
      },
      {
        path: 'imgr/d13b78bff171be4a68ff576e036251ab/',
        caption: null,
      },
      {
        path: 'imgr/d56984e959a3feb1235f85ee202a0fc6/',
        caption: null,
      },
    ],
  },
  {
    bedrooms: '2-4 Bedrooms',
    bathrooms: '1 Bathroom',
    name: 'Terrible Property',
    city: 'Stupid Town',
    state: 'BZ',
    price: '$0.01 / month',
    phone: '678-383-9294',
    rating: {
      score: 1,
      label: '43,423',
      uniqueId: '234',
    },
    photos: [
      {
        path: 'imgr/fd972eb03a0463c484580349ad5177b7/',
        caption: null,
      },
      {
        path: 'imgr/d9551cdeb8152c6ecafd96ccf0c9a5dc/',
        caption: null,
      },
      {
        path: 'imgr/d13b78bff171be4a68ff576e036251ab/',
        caption: null,
      },
    ],
  },
  {
    bedrooms: '1-4 Bedrooms',
    bathrooms: '3 Bathrooms',
    name: 'Mediocre Property',
    city: 'Okay Town',
    state: 'GS',
    price: '$100 / month',
    phone: '770-777-9311',
    banner: '$ Coupon',
    rating: {
      score: 3,
      label: '234',
      uniqueId: '345',
    },
    photos: [
      {
        path: 'imgr/d56984e959a3feb1235f85ee202a0fc6/',
        caption: null,
      },
      {
        path: 'imgr/fd972eb03a0463c484580349ad5177b7/',
        caption: null,
      },
      {
        path: 'imgr/d9551cdeb8152c6ecafd96ccf0c9a5dc/',
        caption: null,
      },
    ],
  },
  {
    bedrooms: '2 Bedrooms',
    bathrooms: '1-3 Bathrooms',
    name: 'Shrug Property',
    city: 'Hello World Town',
    state: 'HD',
    price: '$20 / day',
    phone: '305-789-5555',
    rating: {
      score: 2,
      label: '567',
      uniqueId: '5678',
    },
    photos: [
      {
        path: 'imgr/2576db62ffa153ebef00317a5c68a368/',
        caption: 'test 1',
      },
      {
        path: 'imgr/d56984e959a3feb1235f85ee202a0fc6/',
        caption: null,
      },
      {
        path: 'imgr/fd972eb03a0463c484580349ad5177b7/',
        caption: null,
      },
    ],
  },
  {
    bedrooms: '2 Bedrooms',
    bathrooms: '1-3 Bathrooms',
    name: 'Shrug Property',
    city: 'Hello World Town',
    state: 'HD',
    price: '$20 / day',
    phone: '972-099-2000',
    rating: {
      score: 2,
      label: '567',
      uniqueId: '5678',
    },
    photos: [
      {
        path: 'imgr/2576db62ffa153ebef00317a5c68a368/',
        caption: 'test 1',
      },
      {
        path: 'imgr/d56984e959a3feb1235f85ee202a0fc6/',
        caption: null,
      },
      {
        path: 'imgr/fd972eb03a0463c484580349ad5177b7/',
        caption: null,
      },
    ],
  },
]

const listingProps = {
  onClick: () => action('click')('listing cell click'),
  ctaButtons: [
    {
      valueLocation: 'phone',
      onClick: () => action('click')('Phone CTA'),
      className: 'phone',
    },
    {
      children: 'send an email',
      onClick: () => action('click')('contact CTA'),
      className: 'contact',
    },
  ],
  favoriteButton: {
    onClick: action('click')('favorite toggle'),
    children: '♥',
  },
  photos: {
    server: 'https://image.rent.com/',
    dimensions: '280-120',
    disableSwipe: true,
  },
  ratings: {
    fillColor: 'yellow',
    backgroundFillColor: '#ffffff',
  },
}

const DefaultListingCarouselComponent = ({ theme }) => (
  <Card className={theme.DefaultListingCarouselCard}>
    <ListingCarousel
      listings={listings}
      listingProps={listingProps}
      selectedIndex={listings.length - 1}
    />
  </Card>
)

DefaultListingCarouselComponent.propTypes = {
  theme: PropTypes.object,
}

const ThemedDefaultListingCarousel = themed(['DefaultListingCarouselCard'])(DefaultListingCarouselComponent)
const DefaultListingCarousel = <ThemedDefaultListingCarousel />
export { DefaultListingCarousel }
