import React, {FC } from 'react'
import Backdrop from '@mui/material/Backdrop';
import { ClipLoader } from 'react-spinners';

interface DashboardLoaderProps {
  showLoader: boolean
  loaderText?:string
}


const DashboardLoader: FC<DashboardLoaderProps> = (props) => {
  const { showLoader,loaderText } = props;
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1,flexDirection:'column'}} open={showLoader}>
      {loaderText && <div className='crm__dashboard__loader-text'>{loaderText}</div>}
      {/* <RotatingLines
        strokeColor="var(--secondary-blue-color)"
        strokeWidth="3"
        animationDuration="0.75"
        width="50"
        visible={true}
      /> */}
      <ClipLoader
        color="var(--secondary-blue-color)"
        loading={showLoader}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      >
      

      </ClipLoader>
    </Backdrop>
  )
}

export default DashboardLoader