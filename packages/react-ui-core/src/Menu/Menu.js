import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import themed from 'react-themed'
import classnames from 'classnames'
import { List } from '../List'

const ENTER = 13
const ARROW_UP = 38
const ARROW_DOWN = 40

@themed(['Menu'], {
  pure: true,
})

export default class Menu extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.shape({
        label: PropTypes.node,
        value: PropTypes.node,
        disabled: PropTypes.bool,
      }),
    ])),
    onItemSelect: PropTypes.func,
    onItemMouseOver: PropTypes.func,
    nodeType: PropTypes.string,
    listItem: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.object,
    ]),
    highlightIndex: PropTypes.number,
    selectedIndex: PropTypes.number,
  }

  static defaultProps = {
    theme: {},
    nodeType: 'div',
    listItem: { nodeType: 'div' },
    options: [],
  }

  constructor(props) {
    super(props)

    this.state = {
      highlightIndex: props.highlightIndex || 0,
      indexedOptionIndex: props.highlightIndex || 0,
      indexedOptions: this.generateIndexedOptions(),
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.highlightIndex !== nextProps.highlightIndex) {
      this.setState({ highlightIndex: nextProps.highlightIndex })
    }

    if (this.props.options !== nextProps.options) {
      this.setState({
        indexedOptions: this.generateIndexedOptions(),
      })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  @autobind
  onKeyDown(event) {
    const code = event.keyCode || event.key || event.keyIndentifier

    switch (code) {
      case ARROW_DOWN:
        this.highlightIndexedOption(this.state.indexedOptionIndex + 1)
        break
      case ARROW_UP:
        event.preventDefault()
        this.highlightIndexedOption(this.state.indexedOptionIndex - 1)
        break
      case ENTER:
        event.preventDefault()
        this.handleSelection()
        break
      default:
    }
  }

  get options() {
    return this.props.options || []
  }

  get items() {
    return this.options.map(option =>
      ((typeof option === 'object' && option.label !== undefined) ?
        option.label :
        option
      )
    )
  }

  get option() {
    return this.options[this.state.highlightIndex || 0]
  }

  @autobind
  handleSelection() {
    const { onItemSelect } = this.props

    const value = this.option

    if (onItemSelect && value && !value.disabled) {
      onItemSelect(value, this.state.highlightIndex)
    }
  }

  @autobind
  highlightOption(index) {
    const { onItemMouseOver, options } = this.props

    if (index < 0 || index >= options.length) return
    this.setState({
      highlightIndex: index,
    }, () => {
      if (onItemMouseOver) onItemMouseOver(this.option)
    })
  }

  @autobind
  highlightIndexedOption(index) {
    const { onItemMouseOver } = this.props

    if (index < 0 || index >= this.state.indexedOptions.length) return
    this.setState({
      highlightIndex: this.state.indexedOptions[index].index,
      indexedOptionIndex: index,
    }, () => {
      if (onItemMouseOver) onItemMouseOver(this.option)
    })
  }

  generateIndexedOptions() {
    return this.options.map((option, index) => ({
      disabled: option.disabled,
      index,
    }))
      .filter(option => option.disabled !== true)
  }

  render() {
    const {
      options,
      theme,
      onItemMouseOver,
      className,
      onItemSelect,
      selectedIndex,
      ...props
    } = this.props

    return (
      <List
        role="button"
        className={classnames(
          className,
          theme.Menu
        )}
        items={this.items}
        highlightIndex={this.state.highlightIndex}
        selectedIndex={selectedIndex}
        onClick={this.handleSelection}
        onMouseEnter={this.highlightOption}
        {...props}
      />
    )
  }
}
