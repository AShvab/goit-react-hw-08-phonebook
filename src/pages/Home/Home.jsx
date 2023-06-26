// const styles = {
//     container: {
//       minHeight: 'calc(100vh - 50px)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     title: {
//       fontWeight: 500,
//       fontSize: 48,
//       textAlign: 'center',
//     },
//   };


import css from './Home.module.css'

export default function Home() {
  return (
    // <div style={styles.container}>
    //   <h1 style={styles.title}>
    <div>
      <h1 className={css.title}>
        Welcome to my Phonebook app{' '}
        {/* <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span> */}
      </h1>
      {/* <h2>
        Please
        <Link to="/register">Create an account</Link> or{' '}
        <Link to="/login">Login</Link> to continue
      </h2> */}
      
    </div>
  );
}
