import { ButtonTheme, FilledBtnTheme, OutlinedBtnTheme } from '@/lib/theme';
import { Button, ThemeProvider } from '@mui/material';
import { KeyboardEvent, type FC } from 'react';
import React from 'react';
import { IconWithTooltip } from '../ComponentExport';

export interface CustomButtonProps {
  buttonText?: string,
  buttonId: string,
  btnClassName?: string,
  handleClick?: Function
  handleKeyPress?: Function,
  isDisabled?: boolean,
  buttonIconClassName?: string,
  buttonVariant?: string, // 'filled' or 'outlined'
  customTheme?: unknown,
  badgeCount?: number
  hideable?: boolean,
  toolTipText?:string
}


export interface CustomButtonGroupProps {
  buttonsList: CustomButtonProps[]
  buttonGroupClassName?: string
}


export const CustomButton: FC<CustomButtonProps> = (props) => {
  const {
    buttonText,
    btnClassName,
    handleClick,
    buttonId,
    isDisabled,
    buttonVariant,
    customTheme,
    buttonIconClassName,
    badgeCount,
    handleKeyPress,
    toolTipText,
  } = props;

  return (
    <ThemeProvider
      theme={
        customTheme
          ? customTheme
          : buttonVariant === 'filled'
            ? FilledBtnTheme
            : buttonVariant === 'outlined'
              ? OutlinedBtnTheme
              : ButtonTheme
      }
    >
      <Button
        className={btnClassName ?? undefined}
        onClick={(event) => { event?.stopPropagation(); handleClick?.(event); }}
        id={buttonId}
        variant={
          customTheme ||
            buttonVariant === 'filled' ||
            buttonVariant === 'outlined'
            ? 'outlined'
            : 'contained'
        }
        disabled={isDisabled ?? undefined}
        sx={{
          backgroundColor: customTheme
            ? ''
            : buttonVariant === 'filled'
              ? 'var(--secondary-blue-color)'
              : 'transparent',
          color: customTheme
            ? ''
            : buttonVariant === 'filled'
              ? 'var(--white-color)'
              : 'var(--font-color)'
        }}
        startIcon={
          buttonIconClassName ? (
            // <div className={'crm__icon ' + buttonIconClassName}></div>
            <IconWithTooltip containerClassName='d-flex' iconClassName={'crm__icon ' + buttonIconClassName} toolTipText={toolTipText} />
          ) : null
        }
        endIcon={
          badgeCount && buttonId === 'filter_btn' ? (
            <div className={'crm__button__badge__count '}>{badgeCount}</div>
          ) : null
        }
        onKeyPress={(event: KeyboardEvent<HTMLButtonElement>) => {
          if (event?.key === 'Enter' || event?.keyCode === 13)
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            (handleKeyPress ?? (() => { }))(event);
        }}

      >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
};

// export const CustomButtonGroup: FC<CustomButtonGroupProps> = (props) => {
//   const { buttonsList, buttonGroupClassName } = props;

//   return (
//     <div
//       className={'button__group__footer ' + buttonGroupClassName}
//       aria-label='outlined button-group'
//     >
//       {buttonsList &&
//         buttonsList?.length > 0 &&
//         buttonsList?.filter((item) => !item?.hideable)?.map((btn, index) => {
//           return (
//             <CustomButton
//               key={index} // Adding a unique key for each button in the array
//               buttonText={btn?.buttonText ?? ''}
//               btnClassName={btn?.btnClassName}
//               handleClick={(event) => btn?.handleClick?.(event)}
//               buttonId={btn?.buttonId ?? ''}
//               isDisabled={btn?.isDisabled}
//               buttonVariant={btn?.buttonVariant}
//               customTheme={btn?.customTheme}
//               buttonIconClassName={btn?.buttonIconClassName}
//               toolTipText={btn?.toolTipText??''}
//               // eslint-disable-next-line @typescript-eslint/no-unused-vars
//               handleKeyPress={(event) => () => {
//               }}
//             />
//           );
//         })}
//     </div>
//   );
// };

const CustomButtonComponents = {
  CustomButton,
  // CustomButtonGroup
};

export default CustomButtonComponents;
