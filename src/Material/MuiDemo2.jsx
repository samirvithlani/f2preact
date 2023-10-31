import { Box, Button, IconButton } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { Fingerprint } from '@mui/icons-material';

export const MuiDemo2 = () => {

    const clickHandler = () => {
        alert("clicked")
    }
  return (
    <div>
        <Box>
            <Button variant='contained' onClick={()=>{clickHandler()}}>
                CLICK ME
            </Button>
            <Button variant='outlined' color='primary'>
                ADD
            </Button>
            <Button variant='text' color='secondary'>
                SUB
            </Button>
            <Button variant='outlined' startIcon = {<SendIcon/>}>
                send
            </Button>
            <Button endIcon = {<DeleteIcon/>}>DELETE</Button>
            <IconButton>
                <Fingerprint/>
            </IconButton>
       </Box>
    </div>
  )
}
