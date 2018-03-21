import {
  DefaultFilterCard,
  OneButtonFilterCard,
  TwoButtonFilterCard,
  DesktopBedroomFilterCard,
  InlineBedroomFilterCard,
  InlinePriceFilterCard,
  DesktopPriceFilterCard,
  DesktopPetFilterCard,
  InlinePetFilterCard,
  InlineRatingFilterCard,
  InlineBathroomFilterCard,
  DesktopBathroomFilterCard,
  DesktopBedroomDropdown,
  DesktopBathroomDropdown,
  DesktopPetDropdown,
  DesktopPriceFilterDropdown,
} from './Filters'

import {
  ExampleMobileMapListing,
  ExampleSingleFamily,
  ExampleDesktopMapPinListing,
} from './Listings'

import {
  DefaultBanner,
  BannerWithNode,
} from './Banners'

import { DefaultListingCarousel } from './Carousels'

import { ExampleGridViewHeader } from './GridView'

import { OptionalEmailModal, MandatoryEmailModal } from './Modals'

import {
  smallStories,
  largeStories,
  exampleStories,
} from './stories'

exampleStories('Filters / FilterCard', module)
  .add('Default', () => DefaultFilterCard)
  .add('One Button FilterCard', () => OneButtonFilterCard)
  .add('Two Button FilterCard', () => TwoButtonFilterCard)

largeStories('Filters / RadioGroupFilterCard / large', module)
  .add('Bedroom', () => DesktopBedroomFilterCard)
  .add('Bathroom', () => DesktopBathroomFilterCard)
  .add('Pet', () => DesktopPetFilterCard)

smallStories('Filters / RadioGroupFilterCard / small', module)
  .add('Bedroom', () => InlineBedroomFilterCard)
  .add('Bathroom', () => InlineBathroomFilterCard)
  .add('Pet', () => InlinePetFilterCard)
  .add('Rating', () => InlineRatingFilterCard)

largeStories('Filters / PriceFilterCard / large', module)
  .add('Price Filter', () => DesktopPriceFilterCard)

smallStories('Filters / PriceFilterCard / small', module)
  .add('Price Filter', () => InlinePriceFilterCard)

smallStories('Listings', module)
  .add('Mobile Map Listing', ExampleMobileMapListing)
  .add('Single Family Mobile Map Listing', ExampleSingleFamily)

largeStories('Listings', module)
  .add('DesktopMapPinListing', () => ExampleDesktopMapPinListing)

smallStories('Carousels', module)
  .add('Listing Carousel', () => DefaultListingCarousel)

largeStories('Filters / RadioGroupDropdown / large', module)
  .add('Beds', () => DesktopBedroomDropdown)
  .add('Baths', () => DesktopBathroomDropdown)
  .add('Pets', () => DesktopPetDropdown)

largeStories('Filters / PriceFilterDropdown / large', module)
  .add('Price Filter', () => DesktopPriceFilterDropdown)

smallStories('Banner', module)
  .add('Default Banner', () => DefaultBanner)
  .add('Banner With Node as Name', () => BannerWithNode)

largeStories('GridView', module)
  .add('GridViewHeader', () => ExampleGridViewHeader)

largeStories('Modals')
  .add('Optional EmailModal', OptionalEmailModal)
  .add('Mandatory EmailModal', MandatoryEmailModal)
