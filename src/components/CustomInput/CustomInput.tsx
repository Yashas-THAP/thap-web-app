import { Input as BaseInput } from '@base-ui-components/react';
import * as React from 'react';
import './CustomInput.css';
import { styled } from '@mui/material';

export interface CustomInputProps {
  inputValue?: string | number
  inputFieldId: string
  isRequired?: boolean
  inputType?: string
  inputName?: string
  className?: string
  inputPlaceHolder?: string
  isDisabled?: boolean
  autoFocus?: boolean
  errorMessage?: string,
  handleInputChange?: Function,
  handleKeyPress?: Function
  handleBlur?: Function

}

const Input = React.forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <BaseInput
      className='custom__input '
      required={true}
      style={{
        width: '100%',
        fontFamily: `var(--font-family)`,
        fontSize: '14px',
        letterSpacing: '-0.01px',
        fontWeight: '400',
        lineHeight: 1.5,
        padding: '8px 12px',
        borderRadius: '4px',
        color: `var(--font-color)`,
        background: `var(--white-color)`,
        border: `1px solid var(--grey-color)`,
        // '&:hover': {
        //     border: '0px',
        //     backgroundColor: '#F0F0F0'
        //   }
        // '&:hover': {
        //   border: '0px',
        // } 
        // '&:focus': {
        // border-color: var(--grey-color);
          // box-shadow: 0 0 0 1px var(--secondary-blue-color);
          // outline:0
        // }
      
        // // firefox
        // &:focus-visible {
        //   outline: 0;
        // }
        // &:disabled {
        //   background-color: hsl(0, 0%, 95%);
        //   color: hsl(0, 0%, 60%);
        // }
      }}
    
      {...props}
      ref={ref}
    />
  );
});

const InputElement = styled('input')(
  () => `
    width: 100%;
    font-family: var(--font-family);
    font-size: 14px;
    letter-spacing: -0.01px;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 4px;
    color: var(--font-color);
    background: var(--white-color);
    border: 1px solid var(--grey-color);
    &:hover {
      border-color:var(--grey-color);
    } 
    &:focus {
     border-color: var(--grey-color);
      // box-shadow: 0 0 0 1px var(--secondary-blue-color);
      outline:0
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
    &:disabled {
      background-color: hsl(0, 0%, 95%);
      color: hsl(0, 0%, 60%);
    }
  `
);

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const {
    inputValue,
    inputFieldId,
    inputType,
    inputName,
    className,
    inputPlaceHolder,
    isDisabled,
    autoFocus,
    errorMessage,
    handleInputChange,
    handleKeyPress,
    handleBlur
  } = props;


  return (
    <div className="crm__custom__input__field__container">
      <Input
        className={'crm__custom__input__field ' + className}
        type={inputType ?? 'text'}
        id={inputFieldId}
        name={inputName ?? ''}
        value={inputValue}
        required={true}
        placeholder={inputPlaceHolder ?? ''}
        disabled={isDisabled || false}
        autoFocus={autoFocus || false}
        onKeyDown={(event) => {
          handleKeyPress?.(event)
        }}
        // min={minValue ?? '0'}
        // max={maxValue ?? ''}
        onChange={(event) => {
          handleInputChange?.(event);
        }}
        onBlur={(event) => {
          handleBlur?.(event)
        }}
      // onMouseLeave={(event) => {
      //   handleBlur?.(event)
      // }}
      />
      {errorMessage && errorMessage?.length > 0 && <div className="crm__custom__input__error__message">
        {errorMessage}
      </div>
      }
    </div>
  );
};

export default CustomInput;
