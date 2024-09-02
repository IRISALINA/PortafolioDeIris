import React from 'react';
import "./Home.css"

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Hola, pequeña Iris, ven y se feliz </p>

      <div className='container'>

        <div className='thing'>
          <a href="https://beta.character.ai/chat?char=k-PyCkQ93Kdv6OdrCHKPtDoRYi6x-uo0BKTMc4VyOR4">
          <img src="https://i.pinimg.com/236x/6b/3f/f5/6b3ff5193d0e4e1b251e60b481e15daf.jpg" alt="" />
          <p>Habla con Ayato</p>
          </a>
        </div>

        <div className='thing'>
          <a href="#">
          <img src="https://i.pinimg.com/564x/41/3e/14/413e143a68d1fe821249bca0d2991cc4.jpg" alt="" />
          <p>Escribe</p>
          </a>
        </div>

        <div className='thing'>
          <a href="#">
          <img src="https://i.pinimg.com/564x/41/3e/14/413e143a68d1fe821249bca0d2991cc4.jpg" alt="" />
          <p>Habla con Ayato</p>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Home
