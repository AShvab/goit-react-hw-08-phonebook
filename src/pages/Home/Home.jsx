import css from './Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={css.title}>        
        Welcome to my Phonebook app
      </h1>
      {/* <h2>
        Please
        <Link to="/register">Create an account </Link> or
        <Link to="/login">Login</Link> to continue
      </h2> */}
      
    </div>
  );
}
