import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import InlineSpinner from '../InlineSpinner/InlineSpinner.component';

export default function PostDetailForm(props) {
   const [loading, setLoading] = useState(false);
   const { register, handleSubmit } = useForm();

   const onSavePost = post => {
      setLoading(true);
      props.onSavePost(post);
   };

   const getSpinnerElm = () => {
      if(loading) {
         return <InlineSpinner></InlineSpinner>
      }
      return null;
   };

   return (
      <div>
         <Form onSubmit={handleSubmit(onSavePost)}>
            <Form.Group>
               <Form.Label>Title</Form.Label>
               <Form.Control
                  type="text"
                  placeholder="Title"
                  name="title"
                  defaultValue={props.post.title}
                  ref={register({ require: true })}></Form.Control>
            </Form.Group>
            <Form.Group>
               <Form.Label>Content</Form.Label>
               <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Post content."
                  name="content"
                  defaultValue={props.post.content}
                  ref={register({ require: true })}></Form.Control>
            </Form.Group>
            <Button type="submit">
               {getSpinnerElm()}
               Save Changes
            </Button>
         </Form>
      </div>
   );
}
