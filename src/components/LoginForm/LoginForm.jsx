import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Container, Input, LabelForm, StyledForm, Title } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
     
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <Title>LoginForm</Title>
        <LabelForm>Email</LabelForm>
        <Input type="email" name="email" />
        <LabelForm>Password</LabelForm>
        <Input type="password" name="password" />
        <Button type="submit">Log In</Button>
      </StyledForm>
    </Container>
  );
};
export default LoginForm;
