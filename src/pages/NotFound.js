import { Col, Row } from 'antd'
import React from 'react'

import './styles/NotFound.css'

export default function NotFound() {
  return (
    <>
      <Row>
        <Col md={{span: 12, offset: 6}} lg={{span: 24, offset: 0}}>
          <div className="NotFound">
            <h1>404 Not Found</h1>
          </div>
        </Col>
      </Row>
    </>
  )
}
