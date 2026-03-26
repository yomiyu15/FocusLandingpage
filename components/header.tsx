'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Heart, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  type NavSubItem = { href: string; label: string; desc?: string }
  type NavLink = {
    href?: string
    label: string
    submenu?: NavSubItem[]
    isMega?: boolean
  }

  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    {
      label: 'About',
      submenu: [
        { href: '/about', label: 'About Us', desc: 'Story, mission, and timeline' },
        { href: '/about#focus-ministry', label: 'Focus Ministry', desc: 'Local ministry in Ethiopia' },
      ],
    },
    {
      label: 'Fellowship',
      isMega: true,
      submenu: [
        { href: '/fellowship', label: 'Overview', desc: 'All fellowship areas' },
        { href: '/fellowship/family', label: 'Family', desc: 'Belonging and care' },
        { href: '/fellowship/bible-study', label: 'Bible Study', desc: 'Grow in Scripture' },
        { href: '/fellowship/evangelism', label: 'Evangelism', desc: 'Share the Gospel' },
        { href: '/fellowship/mission', label: 'Mission', desc: 'Serve with purpose' },
        { href: '/fellowship/social-affairs', label: 'Social Affairs', desc: 'Community life' },
      ],
    },
    {
      label: 'Programs',
      submenu: [
        { href: '/ministries', label: 'Ministries', desc: 'Campus and discipleship programs' },
        { href: '/events', label: 'Events', desc: 'Calendar and registrations' },
        { href: '/resources', label: 'Resources', desc: 'Materials and downloads' },
        { href: '/news', label: 'News', desc: 'Updates and student spotlights' },
      ],
    },
    { href: '/partner', label: 'Partner' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group relative z-[110] min-w-0">
            <div className="relative w-11 h-11">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sS2c54DZ5NxGumVhYXOUXicZgJmTZH.png"
                alt="FOCUS Logo"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-black text-xl leading-none text-focus-yellow">FOCUS</span>
              <span className="hidden sm:block text-xs font-semibold text-focus-navy leading-tight max-w-[300px]">
                Fellowship of Oromo Christian University Students
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group px-2">
                {link.submenu ? (
                  <>
                    <button className="flex items-center gap-1 px-4 py-2 text-[15px] font-semibold text-gray-700 group-hover:text-focus-blue transition-colors">
                      {link.label}
                      <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                    </button>

                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0`}>
                      <div className={`bg-white border border-gray-100 shadow-2xl rounded-2xl p-4 ${link.isMega ? 'w-[460px] grid grid-cols-2 gap-2' : 'w-64 flex flex-col'}`}>
                        {link.submenu.map((item) => (
                          <Link 
                            key={item.href} 
                            href={item.href} 
                            className="flex flex-col p-3 rounded-xl hover:bg-focus-light transition-colors"
                          >
                            <span className="text-sm font-semibold text-gray-900">{item.label}</span>
                            {item.desc ? (
                              <span className="text-[11px] text-gray-500 font-medium">{item.desc}</span>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link 
                    href={link.href ?? '/'} 
                    className="px-4 py-2 text-[15px] font-semibold text-gray-700 hover:text-focus-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-focus-yellow hover:bg-focus-yellow/90 text-focus-navy font-bold rounded-xl px-6">
              <Link href="/donate" className="flex items-center gap-2">
                Donate <Heart size={16} />
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden relative z-[110] p-2 text-gray-900"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-md">
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-6 py-5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-gray-100 pb-4">
                  {link.submenu ? (
                    <>
                      <p className="text-base font-bold text-gray-900">{link.label}</p>
                      <div className="mt-3 grid gap-2 pl-2">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-semibold text-gray-700 hover:text-focus-blue"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href ?? '/'}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-bold text-gray-900 hover:text-focus-blue"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-2">
                <Button asChild className="w-full bg-focus-yellow hover:bg-focus-yellow/90 text-focus-navy font-bold h-12 rounded-xl text-base">
                  <Link href="/donate" onClick={() => setIsOpen(false)}>
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}