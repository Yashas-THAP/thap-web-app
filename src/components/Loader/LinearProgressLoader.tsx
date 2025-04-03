import { LinearProgress } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'

const LinearProgressLoader: FC = () => {
  return (
    <Box>
      <LinearProgress className='linear__progress__loader' />
    </Box>
  )
}

export default LinearProgressLoader