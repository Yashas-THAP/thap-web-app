'use client'
import { CustomButton } from "@/components/CustomButton/CustomButton";
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/navigation';

const HomeScreen = () => {
    const router = useRouter();
    console.log('home screen');
    return (
        <>
        <div>Home screen</div>
        <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: '14px' }}
            onClick={() => { 
                router.replace('/therapistLogin');
            }}
        >
            Therapist
        </Typography>
    

        <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: '14px' }}
            onClick={() => {
                router.replace('/opsUserLogin');
             }}
        >
            Ops User
        </Typography>
        </>
        
    )
}

export default HomeScreen;