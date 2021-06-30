import React from 'react'
import { Button, ProgressBar, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Dashboard(){
    return (
        <div>
          <Table className='memo-table' striped bordered hover>
          <Button className='btn' size="lg"><Link to={'/user/create-memo'}>SEND MEMO</Link></Button>
            <tbody>
              <tr>
                <td>Example Memo 1</td>
                <td><ProgressBar now={60} label="60%" /></td>
              </tr>
              <tr>
                <td>Example Memo 2</td>
                <td><ProgressBar now={60} label="60%" /></td>
              </tr>
            </tbody>
            </Table>
        </div>
    )
}