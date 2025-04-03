'use client'
import { createTheme } from '@mui/material';

export const TableDashboardTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h2' },
          style: {
            fontFamily: 'var(--font-family)',
            color: 'var(--font-color)',
            fontSize: '24px',
            fontWeight: 500
          }
        },
        {
          props: { variant: 'h6' },
          style: {
            fontFamily: 'var(--font-family)',
            color: 'var(--sub-header-text-color)',
            fontSize: '15px',
            fontWeight: 300,
            letterSpacing: '0.2px',
            paddingTop: '4px',
            lineHeight: '1'
          }
        },
        {
          props: { variant: 'h5' },
          style: {
            fontFamily: 'var(--font-family)',
            color: 'var(--mobile-view-header-text-color)',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '0.2px',
            lineHeight: '14px'
          }
        },
        {
          props: { variant: 'h4' },
          style: {
            fontFamily: 'var(--font-family)',
            color: 'var(--mobile-view-header-text-color)',
            fontSize: '14px',
            fontWeight: 400,
            letterSpacing: '0.2px',
            lineHeight: '14px',
            marginRight: '5px'
          }
        }
      ]
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: '0px',
          color: 'var(--sub-header-text-color)',
          fontFamily: 'var(--font-family)',
          borderRadius: '0px',
          textTransform: 'inherit',
          fontSize: '15px',
          fontWeight: 300,
          letterSpacing: '0.2px',
          padding: '5px 10px',
          '&:hover': {
            border: '0px',
            backgroundColor: '#F0F0F0'
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '0px',
          borderRadius: '0px'
        }
      }
    }
  }
});

export const checkBoxTheme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: '0px'
        }
      }
    }
  }
})

export const TableTheme = createTheme({
  components: {
    // MuiDataGrid: {
    //   styleOverrides: {
    //     root: {
    //       fontFamily: 'var(--font-family)',
    //       border: '0px',
    //       '& .MuiDataGrid-overlayWrapper': {
    //         height: 'auto !important',
    //         minHeight: '40px !important'

    //       },
    //       '& .MuiDataGrid-row--lastVisible .MuiDataGrid-cell': {
    //         borderBottomColor: 'var(--table-border-color) !important'
    //       },

    //       // '& .MuiDataGrid-overlayWrapperInner': {
    //       //   height: '100% !important'
    //       // },

    //       '& .MuiDataGrid-row.Mui-selected': {
    //         backgroundColor: 'rgba(25, 118, 210, 0.12)'
    //       },
    //       '& .MuiDataGrid-row.Mui-selected .MuiDataGrid-cell:first-of-type': {
    //         position: 'relative'
    //       },
    //       '& .MuiDataGrid-pinnedColumns .MuiDataGrid-row.Mui-selected .MuiDataGrid-cell:first-of-type:before':
    //       {
    //         position: 'absolute',
    //         content: '""',
    //         height: 'calc(100% - 0px)',
    //         width: '4px',
    //         textAlign: 'center',
    //         left: 0,
    //         top: '0px',
    //         bottom: '1px',
    //         backgroundColor: 'var(--secondary-blue-color)'
    //       },
    //       '& .MuiDataGrid-row.Mui-selected:hover': {
    //         backgroundColor: 'rgba(25, 118, 210, 0.12)'
    //       },
    //       '& .MuiDataGrid-row.Mui-hovered:hover': {
    //         backgroundColor: 'rgba(25, 118, 210, 0.12) !important'
    //       },
    //       '& .MuiDataGrid-cell:focus': {
    //         outline: 'none'
    //       },
    //       '& .MuiDataGrid-columnHeader:focus': {
    //         outline: 'none'
    //       },

    //       '& .MuiDataGrid-columnHeader:focus-within': {
    //         outline: 'none'
    //       },
    //       '& .MuiDataGrid-cell:focus-within': {
    //         outline: 'none'
    //       },

    //       '& .MuiDataGrid-columnSeparator': {
    //         // visibility: 'hidden !important'
    //       },
    //       '& .MuiTablePagination-selectLabel': {
    //         // display: 'none !important'
    //         color: 'var(--primary-text-color)',
    //         fontSize: '14px',
    //         fontFamily: 'var(--font-family)',
    //         letterSpacing: '0.2px',
    //         fontWeight: 400
    //       },
    //       '& .MuiTablePagination-input': {
    //         // display: 'none !important'
    //       },
    //       '& .MuiTablePagination-select.MuiInputBase-input  ': {
    //         color: 'var(--primary-text-color)',
    //         fontSize: '14px',
    //         fontFamily: 'var(--font-family)',
    //         letterSpacing: '0.2px',
    //         fontWeight: 400
    //       },
    //       '& .MuiTablePagination-displayedRows  ': {
    //         color: 'var(--primary-text-color)',
    //         fontSize: '14px',
    //         fontFamily: 'var(--font-family)',
    //         letterSpacing: '0.2px',
    //         fontWeight: 400
    //       },
    //       '& .MuiDataGrid-virtualScroller': {
    //         marginBottom: '0px',
    //         overflow: 'scroll'
    //       },
    //       '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
    //         background: '#fff',
    //         borderRadius: '6px',
    //         width: '5px',
    //         height: '5px'
    //       },
    //       '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
    //         background: '#aaaaaa',
    //         borderRadius: '6px',
    //       },

    //       '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover ': {
    //         background: '#aaaaaa',


    //       },
    //       '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track ': {
    //         background: '#fff',
    //         borderRadius: '6px'
    //       },

    //       '& .MuiDataGrid-autoHeight  .MuiDataGrid-cell:last-child': {
    //         borderBottomColor: 'var(--table-border-color)'
    //       }
    //     },
    //     // virtualScroller: {
    //     //   display: 'flex'
    //     // },
    //     // virtualScrollerContent: {
    //     //   display: 'flex'
    //     // },
    //     virtualScrollerRenderZone: {
    //       display: 'flex',
    //       // width: '100%'
    //     },
    //     row: {
    //       cursor:'pointer'
    //     },
    //     cell: {
    //       color: 'var(--font-color)',//'var(--primary-text-color)',
    //       fontSize: '12px',
    //       fontFamily: 'var(--font-family)',
    //       letterSpacing: '-0.01px',
    //       fontWeight: 400,
    //     },
    //     columnHeaders: {
    //       minHeight: '32px !important',
    //       maxHeight: '32px !important',
    //       lineHeight: '32px !important',
    //       height: '32px !important',
    //       backgroundColor: 'var(--table-header-bg-color)'
    //     },
    //     pinnedColumnHeaders : {
    //       backgroundColor: 'var(--table-header-bg-color)'
    //     },
    //     columnHeader: {
    //       minHeight: '32px',
    //       maxHeight: '32px',
    //       lineHeight: '32px',
    //       height: '32px !important'
    //     },
    //     columnHeaderTitle: {
    //       color: 'var(--table-header-color)',
    //       fontSize: '12px',
    //       // fontFamily: 'var(--font-family)',
    //       fontWeight: 400,
    //       letterSpacing: '-0.01px',
    //       // whiteSpace: 'pre',
    //       wordWrap: 'break-word',
    //       whiteSpace: 'normal',
    //       lineHeight: 'normal'
    //     },
    //     withBorderColor: {
    //       borderColor: 'var(--table-border-color)'
    //     },
    //     iconButtonContainer: {
    //       visibility: 'visible',
    //     },
    //     menuIconButton : {
    //       marginRight: '5px'
    //     },
    //     selectedRowCount: {
    //       display: 'none'
    //     },
    //     paper: {
    //       minWidth: '220px'
    //     },
    //     panelHeader:{
    //       '& .MuiFormLabel-root.MuiInputLabel-root': {
    //         fontFamily: 'var(--font-family)',
    //         fontSize:'12px'
    //       },
    //       '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
    //         fontSize:'14px',
    //         color: 'var(--secondary-blue-color)'
    //       },
    //       '& .MuiInputBase-input.MuiInput-input': {
    //         fontFamily: 'var(--font-family)',
    //         fontSize:'12px'
    //       },
    //       '& .MuiInputBase-root.MuiInput-root::after':{
    //         borderBottom: '2px solid var(--secondary-blue-color)'
    //       }
    //     },
    //     columnsPanelRow : {
    //       '& .MuiTypography-root': {
    //         fontFamily: 'var(--font-family)',
    //         fontSize:'12px'
    //       },
    //       '& .MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
    //         backgroundColor: 'var(--secondary-blue-color)'
    //       },
    //       '& .MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked': {
    //         color: 'var(--secondary-blue-color)'
    //       }
    //     },  
    //     panelFooter: {
    //       '& .MuiButtonBase-root.MuiButton-root':{
    //         fontFamily: 'var(--font-family)',
    //         fontSize:'12px'
    //       },
    //       '& .MuiButtonBase-root.MuiButton-root:first-child': {
    //         display: 'none'
    //       }
    //     },
    //     menu:{
    //       '& .MuiDataGrid-menuList': {
    //         minWidth: '200px'
    //       },
    //       '& .MuiTypography-root': {
    //         fontFamily: 'var(--font-family)',
    //         fontSize:'12px'
    //       },
    //     }
    //   }
    // },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h2' },
          style: {
            fontFamily: 'var(--font-family)',
            color: 'var(--primary-text-color)',
            fontSize: '24px',
            fontWeight: 500
          }
        },
        {
          props: { variant: 'h6' },
          style: {
            fontFamily: 'var(--font-family)',
            color: 'var(--sub-header-text-color)',
            fontSize: '15px',
            fontWeight: 300,
            letterSpacing: '0.2px',
            paddingTop: '4px',
            lineHeight: '1'
          }
        },
        {
          props: { variant: 'h5' },
          style: {
            fontFamily: 'var(--font-family)',
            color: 'var(--mobile-view-header-text-color)',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '0.2px',
            lineHeight: '14px'
          }
        },
        {
          props: { variant: 'h4' },
          style: {
            fontFamily: 'var(--font-family)',
            color: 'var(--mobile-view-header-text-color)',
            fontSize: '14px',
            fontWeight: 400,
            letterSpacing: '0.2px',
            lineHeight: '14px',
            marginRight: '5px'
          }
        }
      ]
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: '0px',
          color: 'var(--sub-header-text-color)',
          fontFamily: 'var(--font-family)',
          borderRadius: '0px',
          textTransform: 'inherit',
          fontSize: '15px',
          fontWeight: 300,
          letterSpacing: '0.2px',
          padding: '5px 10px',
          '&:hover': {
            border: '0px',
            backgroundColor: '#F0F0F0'
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '0px',
          borderRadius: '0px'
        }
      }
    }
  }
});

export const TooltipTheme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '0px'
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          '& .MuiTooltip-arrow::before': {
            backgroundColor: 'var(--primary-white-color) !important',
            border: '1px solid var(--grid-layout-border)',
          },
          backgroundColor: 'var(--primary-white-color)',
          color: 'var(--new-tooltip-text-color)',
          border: '1px solid var(--grid-layout-border)',
          fontSize: '12px',
          borderRadius: '4px',
          padding: '10px',
          fontFamily: 'var(--font-family)',
          letterSpacing: '0.2px',
          boxShadow: '0px 3px 6px #00000029',
          marginTop: '4px !important',
          width: 'auto !important',
          lineHeight: 1.6
        },
        arrow: {
          backgroundColor: 'transparent !important',
        }
      }
    }
  }
});

export const DashboardTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h6' },
          style: {
            fontFamily: 'var(--font-family)',
            color: 'var(--primary-text-color)',
            fontSize: '14px',
            fontWeight: 400
          }
        },
        {
          props: { variant: 'h5' },
          style: {
            fontFamily: 'var(--font-family)',
            color: '#8C8C8C',
            fontSize: '14px',
            fontWeight: 500,
            marginLeft: '8px',
            paddingTop: '2px'
          }
        },
        {
          props: { variant: 'h1' },
          style: {
            fontFamily: 'var(--font-family)',
            color: 'var(--primary-text-color)',
            fontSize: '40px',
            fontWeight: 500,
            marginTop: 16
          }
        }
      ]
    }
  }
});

export const FilterButtonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '0px',
          color: 'var(--button-text-grey-color)',
          fontFamily: 'var(--font-family)',
          borderRadius: '0px',
          textTransform: 'inherit',
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.2px',
          padding: '5px 8px',
          whiteSpace: 'pre',
          background: 'transparent',
          '@media (max-width: 600px)': {
            backgroundColor: 'transparent  !important',
            padding: '4px 4px',
            fontSize: '12px !important',
            '&:hover': {
            }
          },
          '&:hover': {
            border: '0px',
            backgroundColor: 'transparent',
          }
        },
        startIcon: {
          marginLeft: '0px',
          display: 'flex'
        },
        endIcon: {
          marginLeft: '4px'
        }

      }
    }
  }
});

export const OutlinedBtnTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid var(--button-border-color)',
          color: 'var(--font-color)',
          fontFamily: 'var(--font-family)',
          borderRadius: '6px',
          textTransform: 'inherit',
          fontSize: '14px',
          fontWeight: 400,
          letterSpacing: '0.2px',
          padding: '5px 16px',
          whiteSpace: 'pre',
          backgroundColor: 'transparent !important',
          '@media (max-width: 600px)': {
            borderRadius: '200px',
            backgroundColor: 'transparent',
            border: '1px solid var(--button-border-color) !important',
            '&:hover': {
              border: '1px solid var(--button-border-color) !important',
              backgroundColor: 'transparent !important'
            }
          },
          '&:hover' : {
            backgroundColor: 'transparent !important',
            border: '1px solid var(--button-border-color) !important',
          }
        },
        startIcon: {
          marginLeft: '0px',
          display: 'flex'
        }
      }
    }
  }
});

export const PrimaryOutlinedBtnTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid var(--secondary-blue-color)',
          color: 'var(--secondary-blue-color)',
          fontFamily: 'var(--font-family)',
          borderRadius: '6px',
          textTransform: 'inherit',
          fontSize: '14px',
          fontWeight: 400,
          letterSpacing: '0.2px',
          padding: '5px 16px',
          whiteSpace: 'pre',
          backgroundColor: 'transparent !important',
          '@media (max-width: 600px)': {
            borderRadius: '200px',
            backgroundColor: 'transparent',
            border: '1px solid var(--secondary-blue-color) !important',
            '&:hover': {
              border: '1px solid var(--secondary-blue-color) !important',
              backgroundColor: 'transparent !important'
            }
          },
          '&:hover' : {
            backgroundColor: 'transparent !important',
            border: '1px solid var(--secondary-blue-color) !important',
          }
        },
        startIcon: {
          marginLeft: '0px',
          display: 'flex'
        }
      }
    }
  }
});

export const FilledBtnTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '0px',
          color: 'var(--white-color)',
          fontFamily: 'var(--font-family)',
          borderRadius: '6px',
          textTransform: 'inherit',
          fontSize: '14px',
          fontWeight: 400,
          // letterSpacing: '0.2px',
          padding: '5px 16px',
          whiteSpace: 'pre',
          backgroundColor: 'var(--secondary-blue-color)',
          '@media (max-width: 600px)': {
            borderRadius: '6px',
            backgroundColor: 'var(--secondary-blue-color)  !important',
            border: '0px solid var(--mobile-view-border-color)',
            padding: '4px 12px',
            fontSize: '12px !important',
            '&:hover': {
              borderRadius: '6px',
              backgroundColor: 'var(--secondary-blue-color)',
              padding: '4px 12px',
              fontSize: '12px'
            }
          },
          '&:hover': {
            backgroundColor: 'var(--secondary-blue-color)',
            border: '0px solid var(--mobile-view-border-color)'
          }
        },
        startIcon: {
          marginLeft: '0px',
          display: 'flex'
        }
      }
    }
  }
});

export const AddNewBtnTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '0px',
          color: 'var(--white-color)',
          fontFamily: 'var(--font-family)',
          borderRadius: '6px',
          textTransform: 'inherit',
          fontSize: '14px',
          fontWeight: 400,
          letterSpacing: '0.2px',
          padding: '5px 16px',
          whiteSpace: 'pre',
          backgroundColor: 'var(--secondary-blue-color)',
          '@media (max-width: 600px)': {
            borderRadius: '200px',
            backgroundColor: 'var(--secondary-blue-color)',
            border: '0px',
            '&:hover': {
              border: '0px !important',
              backgroundColor: 'var(--secondary-blue-color)',
            }
          },
          '&:hover' : {
            backgroundColor: 'var(--secondary-blue-color)',
            border: '0px',
          }
        },
        startIcon: {
          marginLeft: '0px',
          display: 'flex'
        }
      }
    }
  }
});

export const PaginationTheme = createTheme({
  components: {
    MuiTablePagination: {
      styleOverrides: {
        root: {
          overflow: 'visible',
          fontFamily: 'var(--font-family)',
          color: 'var(--navbar-color)',
          '& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'var(--secondary-blue-color)'
          },
          '& .MuiTablePagination-displayedRows ': {
            // display: 'none'
          },
          '& .MuiTablePagination-Toolbar': {
            paddingLeft: 0
          }
        },
        selectLabel: {
          display: 'none'
        },
        menuItem: {
          fontFamily: 'var(--font-family)',
          color: 'var(--navbar-color)'
        },
        displayedRows: {
          // display: 'none !important'
        }
      }
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'var(--secondary-blue-color)',
            border: '0px',
            color: 'var(--primary-white-color)'
          }
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-family)',
          color: 'var(--navbar-color)',
          fontSize: '14px',
          borderRadius: '4px',
          border: '1px solid var(--grey-color)',
          '&.Mui-selected': {
            'border': '0px',
            'backgroundColor': 'var(--secondary-blue-color)'
          }

        },

        ellipsis: {
          border: '0px',
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-family)',
          color: 'var(--navbar-color)'
        }
      }
    }
  }
});

export const GreyBtnWithIconTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '0px',
          color: 'var(--sub-header-text-color)',
          fontFamily: 'var(--font-family)',
          borderRadius: '0px',
          textTransform: 'inherit',
          fontSize: '14px',
          fontWeight: 400,
          letterSpacing: '0.2px',
          padding: '8px 16px',
          whiteSpace: 'pre',

          '@media (max-width: 600px)': {
            borderRadius: '200px',
            backgroundColor: 'transparent',
            border: '0px solid var(--mobile-view-border-color)',
            '&:hover': {
              border: '0px solid var(--mobile-view-border-color) !important',
              backgroundColor: 'var(--grey-color)',
              fontWeight: 600
            }
          },
          '&:hover': {
            border: '0px',
            backgroundColor: 'var(--grey-color)',
            fontWeight: 600
          }
        },
        startIcon: {
          marginLeft: '0px',
          display: 'flex'
        }
      }
    }
  }
});

export const ButtonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'var(--primary-white-color)',
          backgroundColor: 'var(--secondary-blue-color)',
          padding: '',
          borderRadius: 4,
          fontSize: '16px',
          fontFamily: 'var(--font-family), Regular',
          fontWeight: 300,
          width: '100%',
          boxShadow: 'none',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'var(--secondary-blue-color)',
            color: 'var(--primary-white-color)',
            boxShadow: 'none'
          }
        }
      }
    }
  }
});

export const SearchBoxTheme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          '@media (max-width: 600px)': {
            width: '100%',
            minWidth: '100%'
          }
        }
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginRight: '0px',
          '&.custom__search__box__cross__icon': {
            paddingRight: '10px',
            cursor: 'pointer'
          }
        }
      }
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '@media (max-width: 600px)': {
            width: '100%',
            minWidth: '100%'
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          paddingLeft: '7px !important',
          fontFamily: 'var(--font-family) !important',
          color: 'var(--font-color)',
          fontWeight: '300',
          fontSize: '14px',
          width: '300px',
          border: '1px solid var(--grey-color)',
          borderRadius: '20px',

          '&:focus': {
            outline: 'none !important'
          },
          '&:hover': {
            outline: 'none'
          },
          '@media (max-width: 600px)': {
            width: '100%',
            minWidth: '100%',
            borderRadius: '20px',
          }
        },
        input: {
          font: 'initial',
          fontSize: '14px',
          fontFamily: 'var(--font-family) !important',
          padding: '7px !important'
        }
      }
    }
  }
});

export const NavbarTheme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 48,
          minHeight: 48,
          justifyContent: 'space-between'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'var(--navbar-color)',
          height: 48
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: [13, '!important']
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minHeight: '35px',
          // Due to a bug in mui we need to explicitly override media with the default of 48px
          '@media (min-width: 600px)': {
            minHeight: '35px'
          }
        }
      }
    },
    MuiMenuList: {
      styleOverrides: {
        padding: 0
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          width: '190px'
        }
      }
    }
  }
});

export const SidebarTheme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paperAnchorLeft: {
          background: 'var(--sidebar-bg-color)',
          top: '48px',
          height: 'calc(100% - 48px)'
        }
      }
    },

    MuiListItemText: {
      styleOverrides: {
        root: {
          color: 'var(--primary-text-color)',
          fontSize: '14px',
          MuiTypography: {
            color: 'var(--primary-text-color)',
            fontSize: '14px'
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '40px'
        }
      }
    }
  }
});

export const StepperTheme = createTheme({
  components: {
    MuiStepper: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
          paddingLeft: '16px'
        }
      }
    },
    MuiStep: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-family)',
          fontSize: '12px',
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          padding: '8px 0px 4px !important'
        },
        label: {
          fontFamily: 'var(--font-family)',
          fontSize: '14px',
          color: 'var(--font-color) !important',
          '&.Mui-active': {
            fontWeight: 600
          }
        }
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-completed': {
            color: 'var(--secondary-blue-color)'
          },
          '&.Mui-active': {
            color: 'var(--secondary-blue-color)'
          },
        }
      }
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          flex: '0.2 1 auto'
        }
      }
    }
  }
})

export const TextFieldTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides :{
        root: {
          margin: 'unset !important'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides :{
        root: {
          fontFamily: 'var(--font-family)',
          fontSize: '12px',
          color: 'var(--input-underline-color)',
          '&.MuiInputLabel-shrink' :{
              fontSize: '14px'
          },
          '&.Mui-focused' : {
              color: 'var(--input-underline-color) !important',
          },
          '&.Mui-disabled' : {
            color: 'var(--input-underline-color) !important'
          },
          '&.Mui-disabled.Mui-error' : {
            color: 'var(--input-underline-error-color) !important',
          }
          
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
       root: {
        fontFamily: 'var(--font-family)',
        fontSize: '12px',
        color: 'var(--font-color)',
        '::before': {
          borderBottom: '1px solid var(--input-underline-color) !important'
        },
        '&.Mui-disabled:before' : {
          borderBottom: '1px dashed var(--input-underline-color) !important'
        },
        '&.Mui-error:before' : {
          borderBottomColor: 'var(--input-underline-error-color) !important'
        },
        '::after':{
          borderBottom: '2px solid var(--secondary-blue-color) !important'
        }
       },
       input: {
        fontFamily: 'var(--font-family)',
        fontSize: '12px',
        color: 'var(--font-color)',
        // padding: 'unset !important',
       }
      }
    },
    MuiFormHelperText: {
      styleOverrides:  {
        root : {
          fontFamily: 'var(--font-family)',
          fontSize: '8px',
          lineHeight: 'unset !important',
          marginTop: '2px !important'
        }
      }
    }
  }
})
