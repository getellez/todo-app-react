import React, { Component } from 'react'

import { Card, Avatar, Typography } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import './styles/Task.css'
import iconLoading from '../assets/icon-loading.png'
import iconCompleted from '../assets/icon-verified.png'

export default class Task extends Component {




  render() {
    const { Meta } = Card;
    const { Text } = Typography
    const metaStyle = { marginTop: '5px' }
    let avatar = this.props.status? iconCompleted:iconLoading


    return (
      <Card
        className="Task"
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        

        <div>
          <Text type="secondary">
            <p>
              <small>
                Status: {this.props.status?'completed':'pending'}
              </small> 
            </p>
          </Text>
          <Text type="secondary">
            <small>
              Created: {this.props.date}
            </small> 
          </Text>
        </div>
        <Meta
          style={metaStyle}
          // avatar={<Avatar src="https://avatars.githubusercontent.com/u/85968117?s=400&u=0fd103391c0d5f953421d3c864c8bedfc7289ff2&v=4" />}
          avatar={<Avatar src={avatar} />}
          title={this.props.title}
          description={this.props.description}
        />
      </Card>
    )
  }
}
