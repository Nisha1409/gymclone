import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'100px', xs:'70px'},ml:{lg:'110px',sm:'50px'}}} position="relative" p="2px">
        <Typography color='#FA2625' fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography mb={2} fontWeight={700} sx={{fontSize:{lg:'44px', xs:'40px'}}}>
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={2}>
            Check out the most effective exercise
        </Typography>
        <Button href="#exercises" variant='contained' color='error' sx={{backgroundColor:'#ff2625', padding:'10px'}}>
            Explore Exercises
        </Button>
        <Typography fontWeight={600} color='#ff2625' fontSize={160} sx={{opacity:0.1, display:{lg:'block', xs:'none'}}}>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner