import React from 'react'
import './LoginPage.css'
import LoginForm from '../LoginForm/LoginForm'

const LoginPage = () => {
  return(
    <section>
      <LoginForm />
      <img src="https://image.tmdb.org/t/p/original//AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg" alt="movie-poster" />
    </section>
  )
}

export default LoginPage