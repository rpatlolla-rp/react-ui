import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import {
  CompleteForm,
  Text,
  DefaultField,
  SelectField,
  CheckboxField,
  RadioField,
  DefaultRadioGroup,
  ButtonRadioGroup,
  VerticalRadioGroup,
  DefaultButton,
  ButtonWithColor,
  ButtonLarge,
  ButtonSmall,
  DefaultModal,
  CloseModal,
  ModalNoOverlayClose,
  ModalPopup,
  FilterPanel,
  RangeSlider,
  Grid,
  ResponsiveTemplate,
  Collapse,
  DefaultCounter,
  CounterStep,
  CounterText,
  MapExample,
  DefaultRatings,
  SquareRatings,
  CircleRatings,
  ThreeRatings,
  TwoRatings,
  OneRatings,
  ManyRatings,
  Partial1,
  Partial2,
  Partial3,
  PartialTwoColor,
  DefaultList,
  HorizontalList,
  ListWithPassedNodeTypes,
  ListWithOwnItemComponent,
  DefaultLeadModal,
  DefaultCard,
  DefaultTitle,
  EmbeddedLinkWithinTitle,
} from './examples'

storiesOf('Button', module)
  .addWithInfo('default', 'Default themed button', () => DefaultButton)
  .addWithInfo('with color', 'Button with color prop added', () => ButtonWithColor)
  .addWithInfo('small', 'Small button with size prop set', () => ButtonSmall)
  .addWithInfo('large', 'Large button with size prop set', () => ButtonLarge)

storiesOf('Layout', module)
  .addWithInfo('Grid', 'grids rows and columns using flexbox', () => Grid)
  .addWithInfo('Responsive template', 'responsive template using flexbox', () => ResponsiveTemplate)

storiesOf('Form', module)
  .addWithInfo('complete form', 'Form with multiple components added', () => CompleteForm)
  .addWithInfo('Filter Panel', 'Form with multiple components added', () => FilterPanel)

storiesOf('RangeSlider', module)
  .addWithInfo('examples', 'slider input', () => RangeSlider)

storiesOf('Field', module)
  .addWithInfo('default', 'Default field is text input', () => DefaultField)
  .addWithInfo('with type select', 'Field with prop type set to select', () => SelectField)
  .addWithInfo('with type checkbox', 'Field with prop type set to checkbox', () => CheckboxField)
  .addWithInfo('with type radiobutton', 'Field with prop type set to radio', () => RadioField)

storiesOf('RadioGroup', module)
  .add('default', () => DefaultRadioGroup)
  .add('rendered vertically as buttons', () => ButtonRadioGroup)
  .add('rendered vertically', () => VerticalRadioGroup)

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => DefaultModal)
  .add('with close button', () => CloseModal)
  .add('with no overlay close', () => ModalNoOverlayClose)
  .add('with popup', ModalPopup)

storiesOf('Text', module)
  .addWithInfo('default', 'Default themed text', () => Text)

storiesOf('Collapsible', module)
  .addWithInfo('default', 'Default themed', () => Collapse)

storiesOf('Counter', module)
  .addWithInfo('default', 'Default themed', () => DefaultCounter)
  .addWithInfo('step changed', 'Step changed', () => CounterStep)
  .addWithInfo('custom text', 'Custom text', () => CounterText)

storiesOf('Map', module)
  .addWithInfo('default', 'Default themed', () => MapExample)

storiesOf('Ratings', module)
  .addWithInfo('default', 'Default themed', () => DefaultRatings)
  .addWithInfo('Square Rating', '5 Rating', () => SquareRatings)
  .addWithInfo('Circle Rating', '4 Rating', () => CircleRatings)
  .addWithInfo('3 Rating', '3 Rating', () => ThreeRatings)
  .addWithInfo('2 Rating', '2 Rating', () => TwoRatings)
  .addWithInfo('1 Rating', '1 Rating', () => OneRatings)
  .addWithInfo('Many Rating', 'Many Rating', () => ManyRatings)
  .addWithInfo('Partial Rating 1', 'Partial Rating 1', () => Partial1)
  .addWithInfo('Partial Rating 2', 'Partial Rating 2', () => Partial2)
  .addWithInfo('Partial Rating 3', 'Partial Rating 3', () => Partial3)
  .addWithInfo('Two-color Rating', 'Two-color Rating', () => PartialTwoColor)

storiesOf('List', module)
  .addWithInfo('default', 'Default List', () => DefaultList)
  .addWithInfo('Horizontal List', 'Horizontal', () => HorizontalList)
  .addWithInfo('List with passed node types', 'Passed Node Types', () => ListWithPassedNodeTypes)
  .addWithInfo('List with own item component', 'Own item component', () => ListWithOwnItemComponent)

storiesOf('Rent Lead', module)
  .add('Default themed', () => DefaultLeadModal)

storiesOf('Card', module)
  .addWithInfo('default', 'Default Card', () => DefaultCard)

storiesOf('Title', module)
  .add('Default Title', () => DefaultTitle)
  .add('Embedded Link within Title', () => EmbeddedLinkWithinTitle)
