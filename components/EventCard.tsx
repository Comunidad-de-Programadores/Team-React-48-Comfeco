import React from 'react'
import {Box, Text, Link, Grid, GridItem} from '@chakra-ui/react'
import {GrClose} from 'react-icons/gr'

interface Props {
    title ?: string,
    hour ?: string,
    author ?: string
}

const EventCard = (props: Props) => {
    const {title, hour, author} = props
    return (
        <Grid
        templateColumns="repeat(4, 1fr)"
        backgroundColor='#FAFAFA'
        boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
        borderRadius='21px'
        height='150px'
        margin='0 0 1.5rem 0'
        >
            <GridItem
            colSpan={3}
            padding='1rem 1rem 0 2rem'
            color='#555555'
            >
                <Text
                fontSize='1.5rem'
                
                >
                State of Javascript
                {title}
                </Text>
                <Text
                margin='0 0 1rem'
                >
                20:30 PM
                {hour}
                </Text>
                <Text
                fontSize='20px'
                >
                By: &nbsp; 
                    <Link
                    color='#793E93'
                    >
                     TechCode
                     {author}
                    </Link>
                </Text>
            </GridItem>
            <GridItem
            colSpan={1}
            display='flex'
            justifyContent='center'
            alignItems='center'
            >
                <GrClose 
                fontSize='1.5rem'
                color='#555555'
                />
            </GridItem>
            
        </Grid>
    )
}

export default EventCard