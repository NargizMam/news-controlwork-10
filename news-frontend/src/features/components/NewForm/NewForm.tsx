import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { ApiNews } from '../../../type';

interface Props {
  onSubmit: (mutation: ApiNews) => void;
}

const ProductForm: React.FC<Props> = ({onSubmit}) => {
  const [state, setState] = useState<ProductMutation>({
    title: '',
    description: '',
    image: null,
  });
  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(state);
  };
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };
  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;
    setState(prevState => ({
      ...prevState,
      [name]:files && files[0] ? files[0]: null,
    }))
  };
  return (
    <form
      autoComplete="off"
      onSubmit={submitFormHandler}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            id="title" label="Title"
            value={state.title}
            onChange={inputChangeHandler}
            name="title"
          />
        </Grid>
        <Grid item xs>
          <TextField
            id="price" label="Price"
            value={state.price}
            onChange={inputChangeHandler}
            name="price"
          />
        </Grid>
        <Grid item xs>
          <TextField
            multiline rows={3}
            id="description" label="Description"
            value={state.description}
            onChange={inputChangeHandler}
            name="description"
          />
        </Grid>
        <Grid item xs>
          <FileInput
            onChange={fileInputChangeHandler}
            name="image"
            label='Image'/>
        </Grid>
        <Grid item xs>
          <Button type="submit" color="primary" variant="contained">Create</Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default ProductForm;
