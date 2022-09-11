import React from 'react'
import Button from './UI/button'

const NavItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <li className="mr-4">
      <a href={href} className="text-white">
        {text}
      </a>
    </li>
  )
}

const Header = () => {
  return (
    <header className="relative px-20 py-6 border-b border-white/20 flex flex-wrap justify-between items-center mb-20">
      <nav>
        <ul className="flex items-center justify-between">
          <NavItem text="Marketplace" href="/" />
          <NavItem text="Creators" href="/" />
          <NavItem text="Community" href="/" />
        </ul>
      </nav>
      <h1 className="font-bold text-2xl">NFTKKING</h1>
      <Button>Connect Wallet</Button>
    </header>
  )
}

export default Header
