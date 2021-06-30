import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function CreateMemo() {
  const initialFormInput = {
    classNameFormGroup: 'memo-group',
    classNameTextArea: 'form-control memo-input',
    classNameButtonsDiv: 'button-div',
    classNameBtnDel: 'btn-del',
    classNameBtnAdd: 'btn-add',
    type: 'text',
    placeholder: 'Memo point'
  }
  const [memoState, setMemo] = useState([initialFormInput])

  function handleClick () {
    const addInput = [...memoState]
    addInput.push(initialFormInput)
    setMemo(addInput)
  }

  function handleDelete (memoPoint) {
    const deleteInput = [...memoState]
    deleteInput.splice(memoPoint, 1)
    setMemo(deleteInput)
  }

    return (
        <Form id='memo-form'>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>To:</Form.Label>
            <Form.Control type="email" placeholder="Add Recipients" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Subject:</Form.Label>
            <Form.Control type="text" placeholder="Subject Line" />
          </Form.Group>
          <Form.Group>
            <textarea className='form-control intro' type="text" placeholder="Write an introduction" />
          </Form.Group>
          {memoState.map((memo, i) => {
            return (
              <Form.Group className={memo.classNameFormGroup} key={i}>
                <textarea className={memo.classNameTextArea} type={memo.type} placeholder={memo.placeholder + ' ' + (i + 1)} />
                <div className={memo.classNameButtonsDiv}>
                  <Button className={memo.classNameBtnDel} key={i} onClick={() => handleDelete(i)}>-</Button>
                  <Button className={memo.classNameBtnAdd} key={i}>ADD TEST +</Button>
                </div>
              </Form.Group>)})}
          <Button onClick={handleClick}>ADD MEMO POINT +</Button>
          <Button>Send</Button>
        </Form>
    )
}