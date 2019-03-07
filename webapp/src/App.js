import React, { Component } from 'react';
import { Card, Media, Container } from 'react-bootstrap';

import likeLogo from './like.png';
import commentLogo from './comment.png';
import './App.css';

class App extends Component {
  state = {
    notifications: []
  };

  async componentDidMount() {
    const response = await fetch('/notifications');
    const body = await response.json();    
    if (response.status !== 200) throw Error(body.message);
    this.setState({ notifications: body });
  }

  getLikesContent = (notification) => {
    const names = this.getLikers(notification);
    const post = notification.post.title;
    return (
      <p>
        <span>{names}</span><span>liked your post: </span><span>"{post}"</span>
      </p>
    );
  }

  getCommentsContent = (notification) => {
    const names = this.getCommenters(notification);
    const post = notification.post.title;
    return (
      <p>
        <span>{names}</span><span>commented on your post: </span><span>"{post}"</span>
      </p>
    );
  }

  getLikers = (notification) => {
    return (
      <b>
        { 
          notification.likes.map((like, index) => {
            const continuation = (index !== notification.likes.length -1  ? ', ' : ' ')
            const name = like.name || 'Someone';
            return name + continuation;
          }) 
        }
      </b>
    )
  }

  getCommenters = (notification) => {
    return (
      <b>
        { 
          notification.comments.map((comment, index) => {
            const continuation = (index !== notification.comments.length -1  ? ', ' : ' ')
            const name = comment.userName || 'Someone';
            return name + continuation;
          }) 
        }
      </b>
    )
  }

  render() {
    return (
      <div className="App">
        <Container>
          { this.state.notifications.map((notification) => (
              <Card className="mb-3">
                <Card.Body>
                  <Media as="li">
                    <img
                      width={64}
                      height={64}
                      className="m-3"
                      src={ notification.type === 'Like' ? likeLogo : commentLogo }
                      alt="Icon"
                    />
                    <Media.Body className="mt-4 ml-4">
                        {
                          notification.type === 'Like' ? 
                            this.getLikesContent(notification) : 
                            this.getCommentsContent(notification)
                        }
                    </Media.Body>
                  </Media>
                </Card.Body>
              </Card>
            ))
          }
        </Container>
      </div>
    );
  }
}

export default App;
