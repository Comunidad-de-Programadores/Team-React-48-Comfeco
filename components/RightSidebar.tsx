import React from 'react'
import {Box, Heading, List, ListItem, Text} from '@chakra-ui/react'
import {FaCalendarAlt} from 'react-icons/fa'
import Filter from './Filter'
import EventCard from './EventCard'
import ButtonAction from './ButtonAction'


interface Props {
    
}

const RightSidebar = (props: Props) => {
    const date = new Date().toLocaleDateString('es-gb',
  {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
    console.log(date)
    return (
        <Box
        padding='3rem'
        >
            <Box>
                <Heading 
                as='h1' 
                size='lg'
                color='#793E93'
                margin='0 0 1rem 0'
                >
                Talleres
                </Heading>
                <Box
                margin='0 0 2rem 0'
                >
                    <Box
                    display='flex'
                    justifyContent='space-between'
                    margin='0 0 2rem 0'
                    >
                        <Text
                        fontSize='1.5rem'
                        color='#555555'
                        >
                            {date}
                        </Text>
                        <FaCalendarAlt 
                        color='#555555'
                        fontSize='2rem'
                        />
                    </Box>
                    <ButtonAction textButton='Filtro' />
                </Box>
                <Heading 
                as='h4'
                fontSize='1.5rem'
                color='#793E93'
                margin='0 0 1.5rem 0'
                >
                    Area de conocimiento
                </Heading>
                <List>
                    <ListItem>
                        <EventCard />
                    </ListItem>
                    <ListItem>
                        <EventCard />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default RightSidebar
