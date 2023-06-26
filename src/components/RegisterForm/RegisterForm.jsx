import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';
import { Button, Input, LabelForm, StyledForm } from './RegisterForm.styled';


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
    <div>
      <h2>Register Form</h2>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <LabelForm>Username</LabelForm>
      <Input type="text" name="name" />
      <LabelForm>Email</LabelForm>
      <Input type="email" name="email" />
      <LabelForm>Password</LabelForm>
      <Input type="password" name="password" />
      <Button type="submit">Register</Button>
    </StyledForm>
    </div>

  );
};
export default RegisterForm;
