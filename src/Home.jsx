import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-screen h-screen bg-slate-500">
          <h1 className="font-sans text-3xl font-bold text-center align-middle text-slate-300">
            {" "}
            Basic React Projects for practice
              </h1>
              <div className="flex justify-center">
                  <button className='w-20 h-10 gap-5 m-4 text-lg font-semibold rounded-md bg-slate-300'>
                      <Link to="/todos">
                          Todos
                      </Link>
                  </button>
                  <button className='h-10 gap-5 px-3 m-4 text-lg font-semibold rounded-md w-30 bg-slate-300'>
                      <Link to="/bgChanger">
                          BgChanger
                      </Link>
                  </button>
              </div>
      </div>
    </>
  );
}

export default Home