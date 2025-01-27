import React from 'react'
import { Link } from 'react-router-dom'
function Header() {

  //ITEMS
  const listItem = (<>
    <li className='font-bold'><Link to={""}>Home</Link></li>
    {/* <li className='font-bold'><Link to={""}>Our Services</Link></li> */}
    <li className='font-bold'><Link to={""}>Blog</Link></li>
    <li className='font-bold'><Link to={""}>Contact Us</Link></li>
    <li className='font-bold'><Link to={"/about"}>About Us</Link></li>
  </>)

  return (
    <div>
      <main className='max-w-screen-2xl container m-auto bg-base-300 '>
        <section>
          <div className="navbar ">
            <div className="navbar-start">
              <a>
                <img src={'https://s3-alpha-sig.figma.com/img/a1df/00e4/fa4fbf829549b7c93436ce45093f7d32?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zup3SXRCcCP9R3ze7IbfM~SVSTN35gcoErXbSVFOTgEVh7yRO5o-1BbPv0fixQQcUjbjSN0sgQP0~duo4qjlpRh164qoli74SfBY255rtXYCpi-jvrQNrgfIbJa7tF16z5oG-hlQxxiLFl~0BW5HXuWmlU9dZR1hN1ITbZbD9ntfoz20TumwADqWVa-K0nBdt7CsFSppSFIk2x289RJ2OaC289YzlIYdUOoJhtHxC5BVm1cRxecqn0jNC~OyRzgbmm2g8NiilCP0oiUDbZF2Ty3WP1uYqZbM8-R1SBDNA4ufcZbdfTxkDLrNAixWyWCRyLvYNC9tloHp2IiD1MWz7w__'} alt="Icon" className="w-32" />
              </a>

              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle md:hidden ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {listItem}
                </ul>
              </div>
            </div>


            <div className="navbar-center hidden md:flex">
              <select className=" w-32 bg-transparent outline-none min-w-xs">
                <option disabled selected>Our Services</option>
                <option>opt 1</option>
                <option>opt 2</option>
              </select>
              <ul className="menu menu-horizontal space-x-2 px-1">
                {listItem}
              </ul>
            </div>


            <div className="navbar-end">
              <button className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="btn bg-orange-500 text-white">  Talk An Expert</button>


            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Header
