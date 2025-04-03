import { IconButton, Tooltip } from '@mui/material'
import PropTypes from 'prop-types'
import React, { forwardRef, type FC } from 'react'

export interface TextWithToolTipProps {
  text: string
  toolTipText?: string
  containerClassName? :string
  onTextClick?:Function
}

export const ArrowProperties = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  direction: PropTypes.string.isRequired,
  rotateAngle: PropTypes.number,
  rotate: PropTypes.bool
}

type ArrowPropertiesPropTypes = PropTypes.InferProps<typeof ArrowProperties>

export const IconProperties = {
  iconClassName: PropTypes.string.isRequired,
  onIconClick: PropTypes.func,
  actionIcons: PropTypes.array,
  toolTipText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  containerClassName: PropTypes.string
}

type IconPropertiesPropTypes = PropTypes.InferProps<typeof IconProperties>

export const ActionIconsProperties = {
  actionIconsList: PropTypes.array,
  data: PropTypes.any
}

export type ActionIconsPropertiesPropTypes = PropTypes.InferProps<
  typeof ActionIconsProperties
>

export const Arrow: FC<ArrowPropertiesPropTypes> = (props) => {
  const { color, onClick, direction, rotateAngle, rotate } = props

  const getClassName = (color: string, direction: string): string => {
    let cssClass: string = ''
    if (direction === 'down' && color === 'white') {
      cssClass = 'crm__down-white-arrow'
    } else if (direction === 'right' && color === 'white') {
      cssClass = 'crm__right-white-arrow'
    } else if (direction === 'up' && color === 'white') {
      cssClass = 'crm__right-up-arrow'
    } else if (direction === 'right' && color === 'black') {
      cssClass = 'crm__right-black-arrow'
    } else if (direction === 'down' && color === 'black') {
      cssClass = 'crm__down-black-arrow'
    }
    return cssClass
  }
  return (
    <div
      className={'crm__icon ' + getClassName(color, direction)}
      style={{
        transition: (rotate ?? false) ? 'transform 0.3s ease' : 'none',
        transform: `rotate(${rotateAngle}deg)`
      }}
      onClick={() => onClick?.()}
    ></div>
  )
}

export const Icon: FC<IconPropertiesPropTypes> = (props) => {
  const { iconClassName, onIconClick, containerClassName } = props
  return (
    <IconButton className={containerClassName + ' icon__button'} disableRipple={true} onClick={(event) => onIconClick?.(event)}>
      <div className={'crm__icon ' + iconClassName}></div>
    </IconButton>
  )
}

export const IconWithTooltip = forwardRef<HTMLDivElement, IconPropertiesPropTypes>(({ iconClassName, onIconClick, toolTipText, containerClassName }, ref) => {
  return (
   
      <Tooltip arrow title={toolTipText} sx={{cursor: 'pointer'}}>
        <div ref={ref} className={containerClassName ?? ''}>
          <Icon onIconClick={onIconClick} iconClassName={iconClassName}></Icon>
        </div>
      </Tooltip>
   
  )
})

IconWithTooltip.displayName = 'IconWithTooltip'

export const TextWithTooltip = forwardRef<HTMLDivElement, TextWithToolTipProps>(({ text,toolTipText, containerClassName,onTextClick}, ref) => {
  return (
   
      <Tooltip arrow title={toolTipText} sx={{cursor: 'pointer'}}>
        <div ref={ref} className={containerClassName ?? ''} onClick={(e) => onTextClick?.(e)}>
          {text}
        </div>
      </Tooltip>
   
  )
})

TextWithTooltip.displayName = 'TextWithToolTip'


export const ActionIcons: FC<ActionIconsPropertiesPropTypes> = (props) => {
  const { actionIconsList, data } = props

  const actionIconClassName : Record<string, string> = {
    pencilIcon: 'crm__pencil__icon',
    viewIcon: 'crm__view__icon',
    deleteIcon: 'crm__delete__icon',
    cancelIcon: 'crm__cancel__icon',
    linkIcon: 'crm__link__icon',
    commentIcon: 'crm__comment__icon',
    resolveCommentIcon: 'crm__resolve__comment__icon',
    closeCommentIcon: 'crm__close__comment__icon',
    seeAssets: 'crm__see__assets__icon',
    chatJourney:'crm__chat_journey_icon',
    attachment:'crm__attachment__icon',
    fullScreen:'crm__full_screen_icon',
    hiddenScreen:'crm__hidden_screen_icon',
    activityIcon: 'crm__rating__popover__icon',
    
  }

  return actionIconsList?.filter((actionIcon) => actionIcon?.isAccessible)?.map((actionElement, index) => {
    return (
      <IconButton
        disableRipple={true}
        onClick={(event) => actionElement?.action?.(event, data)}
        sx={{
          marginRight: ' 5px'
        }}
        key={actionElement?.icon + index}
        className='action__icon__btn'
      >
        <div
          className={'crm__icon ' + actionIconClassName[actionElement?.icon]}
        ></div>
        <IconWithTooltip containerClassName='d-flex' iconClassName={'crm__icon ' + actionIconClassName[actionElement?.icon]} toolTipText={actionElement?.toolTiptext} />
      </IconButton>
    )
  })
}

const IconComponents = {
  Arrow,
  Icon,
  ActionIcons,
  IconWithTooltip
}

export default IconComponents
