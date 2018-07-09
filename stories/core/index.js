import FilterPanel from './FilterPanel'
import Form from './Form'
import {
  DefaultRangeSlider,
  RangeSliderLabel,
  MinMaxStepRangeSlider,
  SquareFootSlider,
  PriceSlider,
} from './RangeSlider'
import Text from './Text'
import DefaultDateInput from './DefaultDateInput'

import {
  DefaultButton,
  ButtonWithColor,
  ButtonLarge,
  ButtonSmall,
  ToggleSVG,
} from './Button'

import {
  DefaultField,
  SelectField,
  CheckboxField,
} from './Field'

import {
  DefaultModal,
  CloseModal,
  ModalNoOverlayClose,
  ModalPopup,
} from './Modal'

import {
  DefaultCounter,
  CounterStep,
  CounterText,
  CounterCustomButtons,
} from './Counter'

import {
  DefaultRatingBar,
  CircleRatingBar,
  LabeledRatingBar,
  MaxScoreTenRatingBar,
  PartialRatingBar,
  HandleRatingClick,
} from './RatingBar'

import {
  DefaultList,
  HorizontalList,
  ListWithPassedNodeTypes,
  ListWithOwnItemComponent,
} from './List'

import {
  DefaultCard,
} from './Card'

import {
  DefaultRadioGroup,
  ButtonRadioGroup,
  VerticalRadioGroup,
  UnselectRadioGroup,
  ImageButtonsRadioGroup,
} from './RadioGroup'

import {
  DefaultTitle,
  EmbeddedLinkWithinTitle,
} from './Title'

import {
  DefaultDropdown,
  DropdownWithProps,
  DropdownWithMenu,
  DropDownInputAnchor,
  DropdownCloseOnOptionSelect,
} from './Dropdown'

import {
  AutoSuggestFieldSubmitButton,
  AutoSuggestFieldClearButton,
  AutoSuggestFieldDynamicResults,
} from './AutoSuggestField'

import {
  DefaultLeadForm,
  DefaultLeadModal,
} from './Lead'

import {
  DefaultMenu,
  MenuOnSelection,
  MenuOnSelectionHover,
  DefaultDropdownMenu,
  MenuWithLabel,
} from './Menu'

import {
  DefaultHighlighter,
  HighlighterWithIndex,
} from './Highlighter'

import {
  DefaultCarousel,
  CarouselPaginationPrevious,
  CarouselPaginationNext,
  CarouselNavigation,
  PhotoCarouselExample,
} from './Carousel'

import {
  DefaultListingCell,
  ThemedListingCell,
} from './ListingCell'

import { DefaultDrawer } from './Drawer'

import {
  DefaultGmap,
  GmapWithSpinner,
  GmapWithSingleMarker,
  GmapWithMultipleMarkers,
  GmapWithInfoWindow,
  GmapWithOverlayView,
  FreeDrawDefault,
  WithExistingShape,
  WithCustomDrawToolAndBanner,
} from './Gmap'

import coreStories, { coreStoriesNoContainer } from './coreStories'

coreStories('AutoSuggestField', module)
  .add('Field and Submit Button', () => AutoSuggestFieldSubmitButton)
  .add('Field and Clear Button', () => AutoSuggestFieldClearButton)
  .add('Dynamic Results with highlighted suggestions', () => AutoSuggestFieldDynamicResults)

coreStories('Button', module)
  .add('Button', () => DefaultButton)
  .add('Colored Button', () => ButtonWithColor)
  .add('Small Button', () => ButtonSmall)
  .add('Large Button', () => ButtonLarge)
  .add('Toggle Button', () => ToggleSVG)

coreStories('Card', module)
  .add('Card', () => DefaultCard)

coreStories('Carousel', module)
  .add('Carousel', () => DefaultCarousel)
  .add('Pagination on Page 1 ', () => CarouselPaginationNext)
  .add('Pagination on Page 2', () => CarouselPaginationPrevious)
  .add('Slide Navigation', () => CarouselNavigation)
  .add('Photo Carousel', () => PhotoCarouselExample)

coreStories('Counter', module)
  .add('Counter', () => DefaultCounter)
  .add('Different Step Counter', () => CounterStep)
  .add('Custom Text Counter', () => CounterText)
  .add('Custom Buttons Counter', () => CounterCustomButtons)

coreStories('Dropdown', module)
  .add('Dropdown', () => DefaultDropdown)
  .add('Anchor Props', () => DropdownWithProps)
  .add('Input Anchor without close toggle', () => DropDownInputAnchor)
  .add('Multiple Children', () => DropdownWithMenu)
  .add('Dynamic button text closes on option selection ', () => DropdownCloseOnOptionSelect)

coreStories('Form', module)
  .add('Form', () => Form)
  .add('Filter Panel Modal', () => FilterPanel)

coreStories('Field', module)
  .add('Field', () => DefaultField)
  .add('Select Field', () => SelectField)
  .add('Checkbox Field', () => CheckboxField)

coreStoriesNoContainer('Gmap ', module)
  .add('Gmap', () => DefaultGmap)
  .add('Gmap with spinner', () => GmapWithSpinner)
  .add('Gmap with marker', () => GmapWithSingleMarker)
  .add('Gmap with multiple markers', () => GmapWithMultipleMarkers)
  .add('Gmap with infowindow', () => GmapWithInfoWindow)
  .add('Gmap with overlay view', () => GmapWithOverlayView)

coreStoriesNoContainer('Gmap / FreeDraw', module)
  .add('With Defaults', () => FreeDrawDefault)
  .add('With Existing Shape', () => WithExistingShape)
  .add('With a Custom Draw Tool and Banner', () => WithCustomDrawToolAndBanner)

coreStories('Highlighter', module)
  .add('Default Highlighter', () => DefaultHighlighter)
  .add('Highlighter with index', HighlighterWithIndex)

coreStories('Lead', module)
  .add('LeadForm', () => DefaultLeadForm)
  .add('LeadModal', () => DefaultLeadModal)

coreStories('List', module)
  .add('List', () => DefaultList)
  .add('Horizontal List', () => HorizontalList)
  .add('Custom Node Type List', () => ListWithPassedNodeTypes)
  .add('Custom ListItem List', () => ListWithOwnItemComponent)

coreStories('ListingCell', module)
  .add('Default', () => DefaultListingCell)
  .add('Themed', () => ThemedListingCell)

coreStories('Menu', module)
  .add('Menu', () => DefaultMenu)
  .add('On Keyboard Selection', () => MenuOnSelection)
  .add('On Selection hover', () => MenuOnSelectionHover)
  .add('DropdownMenu', () => DefaultDropdownMenu)
  .add('Menu with Disabled options', () => MenuWithLabel)

coreStories('Modal', module)
  .add('Modal', () => DefaultModal)
  .add('Modal With Close Button', CloseModal)
  .add('Modal No Close on Overlay', () => ModalNoOverlayClose)
  .add('Modal Open By Click', ModalPopup)

coreStories('RadioGroup', module)
  .add('Radiogroup', () => DefaultRadioGroup)
  .add('Vertical Radiogroup as Buttons', () => ButtonRadioGroup)
  .add('Vertical Radiogroup', () => VerticalRadioGroup)
  .add('Unselect Radiogroup', () => UnselectRadioGroup)
  .add('Image Buttons in RadioGroup', () => ImageButtonsRadioGroup)

coreStories('RangeSlider', module)
  .add('RangeSlider', () => DefaultRangeSlider)
  .add('Labeled', () => RangeSliderLabel)
  .add('Min / Max and Step', () => MinMaxStepRangeSlider)
  .add('Square Foot Slider', () => SquareFootSlider)
  .add('Price Slider', () => PriceSlider)

coreStories('RatingBar', module)
  .add('RatingBar', () => DefaultRatingBar)
  .add('Circle Rating Bar', () => CircleRatingBar)
  .add('Labeled Rating Bar', () => LabeledRatingBar)
  .add('Max Score of 10 Bar', () => MaxScoreTenRatingBar)
  .add('Partial Rating Bar', () => PartialRatingBar)
  .add('onClick for Rating Vote', () => HandleRatingClick)

coreStories('Text', module)
  .add('Text', () => Text)

coreStories('DateInput', module)
    .add('DefaultDateInput', () => DefaultDateInput)

coreStories('Title', module)
  .add('Title', () => DefaultTitle)
  .add('Link Title', () => EmbeddedLinkWithinTitle)

coreStories('Drawers / Drawer', module)
  .add('Default Drawer', () => DefaultDrawer)
