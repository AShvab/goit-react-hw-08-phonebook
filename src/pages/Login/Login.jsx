// import { Helmet } from 'react-helmet';
// import LoginForm  from 'components/LoginForm/LoginForm';

// export default function Login() {
//   return (
//     <div>
//       <Helmet>
//         <title>Login</title>
//       </Helmet>
//       <LoginForm />
//     </div>
//   );
// }
import React, { useEffect } from 'react';
import LoginForm from 'components/LoginForm/LoginForm';

export default function Login() {
  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div>
      <LoginForm />
    </div>
  );
}
