import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

export default function PostDetailForm(props) {

   console.log(props);

   const { register, handleSubmit, setValue } = useForm();

   const onAddPost = post => {
      props.onAddPost(post);
   };

   return (
      <div>
         <Form onSubmit={handleSubmit(onAddPost)}>
            <Form.Group>
               <Form.Label>Title</Form.Label>
               <Form.Control type="text" placeholder="Title" name="title" defaultValue={props.post.title} ref={register({ require: true })}></Form.Control>
            </Form.Group>
            <Form.Group>
               <Form.Label>Content</Form.Label>
               <Form.Control as="textarea" rows="3" placeholder="Post content." name="content" defaultValue={props.post.content} ref={register({ require: true })}></Form.Control>
            </Form.Group>
            <Button type="submit">Save Changes</Button>
         </Form>
      </div>
   );
}
