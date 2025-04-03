import { type FC, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Collapse, useMediaQuery, Tooltip } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import useTheme from '@mui/system/useTheme'
import React from 'react';
import { useRouter } from 'next/navigation'
import access from '@/auth/AccessControl'

export const SideBarMenuItemAdmin = {
  text: PropTypes.string.isRequired,
  path: PropTypes.any,
  nestedMenus: PropTypes.array,
  className: PropTypes.string,
  styles: PropTypes.object,
  selected: PropTypes.string,
  handleSelect: PropTypes.func,
  toggleOpen: PropTypes.any,
  handleOpenedMenu: PropTypes.func,
  parentLabel: PropTypes.string,
  handleDrawerClose: PropTypes.func,
  toolTip: PropTypes.string
}

type SideBarMenuItemPropTypes = PropTypes.InferProps<typeof SideBarMenuItemAdmin>
type SideBarMenuItemPropsWithoutItems = Omit<
  SideBarMenuItemPropTypes,
  'nestedMenus'
>

export type SideBarMenuItemProps = SideBarMenuItemPropsWithoutItems & {
  nestedMenus?: SideBarMenuItemProps[]
}

const SidebarItem: FC<SideBarMenuItemProps> = (props) => {
  const router = useRouter()

  const {
    text,
    path,
    nestedMenus = [],
    className,
    styles,
    selected,
    parentLabel,
    handleSelect,
    toggleOpen,
    handleOpenedMenu,
    handleDrawerClose,
    toolTip
  } = props

  const isExpandable = nestedMenus && nestedMenus.length > 0
  const theme = useTheme()
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleItemClick = useCallback(
    
    (label: any) => {
      if (path) {
        handleSelect?.(path)
        router.push(path)
        if (label !== toggleOpen) {
          handleOpenedMenu?.(label)
        }
        if (isSmScreen) {
          handleDrawerClose?.(false)
        }
      } else if (isExpandable) {
        if (label !== toggleOpen) {
          handleOpenedMenu?.(label)
          if (nestedMenus[0]?.path) {
            router.push(nestedMenus[0].path)
            handleSelect?.(nestedMenus[0].path)
          }
        } else {
          handleOpenedMenu?.(false)
          router.push(access?.dashboard?.view() ? '/dashboard' : '/tasks')
          handleSelect?.(access?.dashboard?.view() ? '/dashboard' : '/tasks')
        }

      }
    },
    [handleDrawerClose, handleOpenedMenu, handleSelect, isExpandable, isSmScreen, router, nestedMenus, path, toggleOpen]
  )

  const nestedMenuStyles = {
    color: 'var(--font-color)',
    fontSize: '13px',
    fontWeight: 400,
    fontFamily: 'var(--font-family)',
    letterSpacing: '0.2px'
  }

  const MenuItemRoot = (
    <ListItem
      disablePadding
      style={{ minWidth: 'max-content' }}
      onClick={() => {
        handleItemClick(parentLabel)
      }}
    >
      <ListItemButton
        disableTouchRipple
        className={
          toggleOpen === parentLabel && isExpandable
            ? 'crm__sidebar__item selected expandable'
            : selected === path && !isExpandable
              ? 'crm__sidebar__item selected'
              : isExpandable
                ? 'crm__sidebar__item expandable'
                : 'crm__sidebar__item'
        }>
        <Tooltip title={toolTip}>
          <ListItemIcon style={{ minWidth: '38px' }}>
            <div className={'crm__sidebar__icon crm__icon ' + className} ></div>
          </ListItemIcon>
        </Tooltip>
        <ListItemText
          disableTypography
          primary={
            <Typography
              className="crm__sidebar__text"
              variant="body2"
              style={{
                fontSize: '12px',
                fontWeight: 500,
                fontFamily: 'var(--font-family)',
                letterSpacing: '0.2px',
                ...styles
              }}
            >
              {text}
            </Typography>
          }
        />
        {isExpandable && !(toggleOpen === parentLabel) && (
          <>arrow</>
        )}
        {isExpandable && toggleOpen === parentLabel && (
          <>arrow</>
        )}
      </ListItemButton>
    </ListItem>
  )

  const MenuItemChildren = isExpandable
    ? (
      <Collapse in={toggleOpen === parentLabel} timeout="auto" unmountOnExit className="side__bar__collapse__wrap">
        <List
          className="crm__nested__menu__wrapper"
          component="nav"
          disablePadding
        >
          {nestedMenus.map((item, index) => (
            <SidebarItem
              toggleOpen={toggleOpen}
              handleOpenedMenu={handleOpenedMenu}
              selected={selected}
              handleSelect={handleSelect}
              styles={nestedMenuStyles}
              {...item}
              key={index}
            />
          ))}
        </List>
      </Collapse>
    )
    : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}

SidebarItem.propTypes = SideBarMenuItemAdmin

export default SidebarItem
