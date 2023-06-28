// import RegisterForm from 'components/RegisterForm/RegisterForm';
// import { Helmet } from 'react-helmet';

// export default function Register() {
//   return (
//     <div>
//       <Helmet>
//         <title>Registration</title>
//       </Helmet>
//       <RegisterForm /> 
//     </div>
//   );
// }
import React, { useEffect } from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';

export default function Register() {
  useEffect(() => {
    document.title = 'Registration';
  }, []);

  return (
    <div>
      <RegisterForm />
    </div>
  );
}
