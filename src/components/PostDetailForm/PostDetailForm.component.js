import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

export default function PostDetailForm(props) {
   const { register, handleSubmit, setValue } = useForm({
      title: props.post.title,
      content: props.post.content
   });

   const onAddPost = post => {
      props.onAddPost(post);
   };

   return (
      <div>
         <Form onSubmit={handleSubmit(onAddPost)}>
            <Form.Group>
               <Form.Label>Title</Form.Label>
               <Form.Control type="text" placeholder="Title" name="title" ref={register({ require: true })}></Form.Control>
            </Form.Group>
            <Form.Group>
               <Form.Label>Content</Form.Label>
               <Form.Control as="textarea" rows="3" placeholder="Post content." name="content" ref={register({ require: true })}></Form.Control>
            </Form.Group>
            <Button type="submit">Add Post</Button>
         </Form>
      </div>
   );
}
