import React,{useEffect, useState} from 'react'
import {Box, Button,Stack, TextField, Typography} from '@mui/material';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData=async()=>{
      const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
      setBodyParts(['all',...bodyPartsData])
    }
    fetchExercisesData()
  }, [])
  

  const handleSearch = async () => {
    if (search.trim()) {
      const cleanSearch = search.trim().toLowerCase();
      
      // Normalize function to remove unwanted characters
      const normalizeString = (str) => str?.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').trim();
  
      try {
        const exerciseData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises?limit=1000', 
          exerciseOptions
        );
        
  
        console.log("Fetched Exercises:", exerciseData.map(ex => ex.name));
        console.log("Searching for:", cleanSearch);
  
        const searchedData = exerciseData.filter((exercise) =>
          normalizeString(exercise.name).includes(normalizeString(cleanSearch))
        );
  
        console.log("Filtered Results:", searchedData);
        setExercises(searchedData);
        setSearch('');
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    }
  };
  
  return (
    <Stack justifyContent='centre' alignItems='center' mt='37px' p='20px'>
      <Typography fontWeight={700} sx={{fontSize:{lg:'40px',xs:'30px'}}} mb='50px' textAlign='center'>
        Awesome Exercises You <br/> 
        Should Know
      </Typography>
      <Box position='relative' mb='72px'>
          <TextField sx={{input:{fontWeight:'700', border:'none',borderRadius:'4px'},
          width:{lg:'1050px',xs:'280px'},
          backgroundColor:'#fff',
          borderRadius:'40px'
          }} 
          height='76px'
           type='text' value={search} onChange={(e)=>
                setSearch(e.target.value.toLowerCase())
          }
           placeholder='Search Exercises Here'/>
          <Button className='search-btn' sx={{bgcolor:'#ff2625',color:'#fff',textTransform:'none',borderRadius:'0 4px 4px 0',width:{lg:'110px',xs:'80px'},fontSize:{lg:'20px',xs:'14px'},height:'56px',position:'absolute',right:0}}
          onClick={handleSearch}>
              Search
          </Button>
      </Box>
      <Box sx={{position:'relative',width:'100%',mt:'50px', p:'20px'}}>
          <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  )
}

export default SearchExercises