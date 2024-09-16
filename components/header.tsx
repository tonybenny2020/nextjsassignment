import Link from 'next/link'
import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode;
}
export default function Header({ children }: HeaderProps) {
    return (
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-500 text-white p-4">
            <nav className="container mx-auto flex justify-between">
              <a href="/" className="text-lg font-bold">Planner App</a>
              <div className="space-x-4">
                <a href="/" className="hover:underline">Home</a>
                <a href="/aboutus" className="hover:underline">About</a>
                <a href="/planner" className="hover:underline">Planner</a>
              </div>
            </nav>
          </header>
    
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
    
          <footer className="bg-blue-500 text-white p-4 text-center">
            &copy; 2024 MyApp. All Rights Reserved.
          </footer>
        </div>
      )
}