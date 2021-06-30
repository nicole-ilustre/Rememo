import React from 'react'
import { Button } from 'react-bootstrap'

export default function Memo() {
    return (
        <div className='memo-table'>
            <h4>This is the memo title</h4>
            <p>Introduction text here. Introduction text here. Introduction text here.
            <br></br>
            Introduction text here. Introduction text here. Introduction text here.
            <br></br>
            Introduction text here. Introduction text here. Introduction text here.
            </p>
            <p id='ready'>Ready to take it all in?</p>
            <Button >START</Button>
        </div>
    )
}