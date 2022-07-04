import { Box } from 'components/Box';
import { Bars,Grid,ThreeDots  } from  'react-loader-spinner'
// import styled from 'styled-components';

export const Loader = () => {
    return (
        <Box 
            display='flex'
            justifyContent='center'
        >
            <ThreeDots   
            height="100"
            width="100"
            color='green'
            secondaryColor='red'
            ariaLabel='loading'
        />
        </Box>
        
    );
};

