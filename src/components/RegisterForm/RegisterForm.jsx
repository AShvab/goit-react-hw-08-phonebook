import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';
import { Button, Container, Input, LabelForm, StyledForm, Title } from './RegisterForm.styled';


const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <Title>RegisterForm</Title>
      <LabelForm>Username</LabelForm>
      <Input type="text" name="name" />
      <LabelForm>Email</LabelForm>
      <Input type="email" name="email" />
      <LabelForm>Password</LabelForm>
      <Input type="password" name="password" />
      <Button type="submit">Register</Button>
    </StyledForm>
    </Container>

  );
};
export default RegisterForm;
