import Link from 'next/link'


export default function Navbar() {
  return <div className="w-full fixed shadow-xl z-50 bg-base-100">
    <nav className="navbar w-full max-w-7xl mx-auto">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-info normal-case text-xl">Josescap</Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/" className='btn btn-ghost normal-case text-md hover:text-info'>Inicio</Link>
          </li>
          <li>
            <Link href="/#projects" className='btn btn-ghost normal-case text-md hover:text-info'>Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
}