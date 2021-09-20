import cn from 'classnames'
import React, {
  ChangeEvent,
  MouseEvent,
  Component,
  ReactNode,
  FormEvent,
  useState
} from 'react'

import Container from '../../freestanding/containers/container'
import Form from '../forms/forms'

import { pb32 } from '../../freestanding/utils/padding.module.css'
import * as styles from './cta.module.css'

interface PropTypes {
  special?: ReactNode
}

const Cta = ({}: PropTypes) => {
  const [email, setEmail] = useState('')

  const onSubmit = (
    e: MouseEvent<HTMLInputElement> | FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    window.open('https://form.typeform.com/to/J63VwXqX')
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <div className={cn(styles.cta, 'background-is-dark')}>
      <Container fluid={true} justify={'center'}>
        <Form
          isSingleLine={true}
          content={[
            {
              type: 'submit',
              name: 'submit',
              value: 'Sign Up to the Ory Summit'
            }
          ]}
          onSubmit={onSubmit}
        />
      </Container>
    </div>
  )
}

export default Cta
