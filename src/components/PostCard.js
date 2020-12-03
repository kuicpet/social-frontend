import React, { useContext } from 'react';
import { Card, Icon, Label, Button, Image } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import MyPopup from "../utils/MyPopups";


function PostCard({ post: { id, body, createdAt, username, likeCount, commentCount, likes } }) {

    const { user } = useContext(AuthContext);

    return (
        <Card  fluid>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
          <Card.Description>{body}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <LikeButton user={user} post={{ id, likes, likeCount }} />
          <MyPopup
            content="Comment on post"
          >
            <Button  labelPosition='right' as={Link} to={`/posts/${id}`}>
                <Button basic color='blue'>
                <Icon name='comments' />
              </Button>
              <Label as='a' basic color='blue' pointing='left'>
                {commentCount}
              </Label>
            </Button>
          </MyPopup>
          {user && user.username === username && (
           <DeleteButton postId={id} />
          )}
        </Card.Content>
      </Card>
    )
}

export default PostCard
