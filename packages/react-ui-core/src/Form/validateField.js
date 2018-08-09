import React from 'react'
import PropTypes from 'prop-types'
import { themed } from 'react-themed'
import classnames from 'classnames'

const validateField = (Component, fieldName) => {
  const ValidatedField = ({
    theme,
    isValid,
    validationMessage,
    className,
    validFieldIcon,
    ...props
  }) => (
    <div className={classnames(theme.ValidatedField, className)}>
      <Component
        theme={theme}
        {...props}
        variant={isValid ? 'valid' : 'invalid'}
      />
      {isValid && validFieldIcon}
      {validationMessage && (
        <div
          data-tid="validation-message"
          className={theme.ValidatedField_Message}
        >
          {validationMessage}
        </div>
      )}
    </div>
  )

  ValidatedField.displayName = fieldName ? `Validated${fieldName}` : 'ValidatedField'

  ValidatedField.propTypes = {
    theme: PropTypes.object,
    isValid: PropTypes.bool,
    validationMessage: PropTypes.node,
    validFieldIcon: PropTypes.node,
    className: PropTypes.string,
  }

  ValidatedField.defaultProps = {
    theme: {},
  }

  return themed(/^ValidatedField/)(ValidatedField)
}

export default validateField