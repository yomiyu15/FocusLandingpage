'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, Heart, Menu, X, ArrowRight, Facebook, Youtube, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { donateButtonClass } from '@/lib/ui'

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    {
      label: 'About',
      submenu: [
        { href: '/about', label: 'About Us', desc: 'Our story and mission' },
        { href: '/structure', label: 'Structure', desc: 'Hierarchy and platforms' },
      ],
    },
    {
      label: 'Ministry Pillars',
      isMega: true,
      submenu: [
        { href: '/fellowship/evangelism', label: 'Evangelism' },
        { href: '/fellowship/girls-ministry', label: 'Girls Ministry' },
        { href: '/fellowship/leadership-development', label: 'Leadership Development' },
        { href: '/fellowship/spiritual-nurturing', label: 'Spiritual Nurturing' },
        { href: '/fellowship/social-service-community-development', label: 'Social Service' },
      ],
    },
    {
      label: 'Programs',
      submenu: [
        { href: '/ministries', label: 'Ministries' },
        { href: '/events', label: 'Events' },
        { href: '/resources', label: 'Resources' },
        { href: '/news', label: 'News' },
      ],
    },
    { href: '/partner', label: 'Partner' },
    { href: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { href: 'https://t.me/focusministry2', icon: Send, hover: 'hover:text-[#26A5E4]' },
    { href: 'https://www.facebook.com', icon: Facebook, hover: 'hover:text-[#1877F2]' },
    { href: 'https://www.youtube.com/@FocusministryOfficial26', icon: Youtube, hover: 'hover:text-[#FF0000]' },
  ]

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          scrolled 
            ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-2" 
            : "bg-white border-b border-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-11 h-11">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sS2c54DZ5NxGumVhYXOUXicZgJmTZH.png"
                  alt="FOCUS Logo"
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter text-focus-yellow leading-none">FOCUS</span>
                <span className="hidden lg:block text-[9px] font-bold text-gray-400 uppercase tracking-widest">Ministry Fellowship</span>
              </div>
            </Link>

            {/* DESKTOP NAV - TEXT ONLY HOVER */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div 
                  key={link.label} 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => link.submenu && handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.submenu ? (
                    <button className={cn(
                      "flex items-center gap-1 text-sm font-bold transition-colors",
                      activeDropdown === link.label ? "text-focus-blue" : "text-gray-600 hover:text-focus-blue"
                    )}>
                      {link.label}
                      <ChevronDown size={14} className={cn("transition-transform duration-200", activeDropdown === link.label && "rotate-180")} />
                    </button>
                  ) : (
                    <Link 
                      href={link.href ?? '/'} 
                      className={cn(
                        "text-sm font-bold transition-colors",
                        pathname === link.href ? "text-focus-blue" : "text-gray-600 hover:text-focus-blue"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* SIMPLE DROPDOWN */}
                  {link.submenu && (
                    <div className={cn(
                      "absolute top-full left-0 pt-4 transition-all duration-200",
                      activeDropdown === link.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                    )}>
                      <div className={cn(
                        "bg-white border border-gray-100 shadow-xl rounded-2xl p-2",
                        link.isMega ? "w-64" : "w-56"
                      )}>
                        {link.submenu.map((item) => (
                          <Link 
                            key={item.label} 
                            href={item.href} 
                            className="block px-4 py-2.5 text-sm font-bold text-gray-600 hover:text-focus-blue hover:bg-focus-light/10 rounded-xl transition-all"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* SOCIALS & DONATE */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-4">
                {socialLinks.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.href} 
                    target="_blank" 
                    className={cn("text-gray-400 transition-colors", item.hover)}
                  >
                    <item.icon size={19} />
                  </a>
                ))}
              </div>
              
              <Button asChild className={cn("h-11 rounded-full font-black text-focus-navy px-7 transition-all active:scale-95", donateButtonClass)}>
                <Link href="/donate" className="flex items-center gap-2">
                  Donate <Heart size={18} className="fill-current" />
                </Link>
              </Button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gray-600">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={cn(
          "lg:hidden fixed inset-0 top-[73px] bg-white transition-transform duration-300 transform px-6 py-8 space-y-8 overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {navLinks.map((link) => (
            <div key={link.label} className="space-y-4">
              {link.submenu ? (
                <>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-widest">{link.label}</div>
                  <div className="grid gap-4 pl-4 border-l-2 border-gray-50">
                    {link.submenu.map((sub) => (
                      <Link key={sub.label} href={sub.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-900">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={link.href ?? '/'} onClick={() => setIsOpen(false)} className="block text-2xl font-black text-gray-900">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          
          <div className="pt-8 border-t border-gray-100 flex flex-col gap-6">
            <div className="flex gap-6 justify-center">
              {socialLinks.map((item, i) => (
                <a key={i} href={item.href} className="text-gray-400 hover:text-focus-blue">
                  <item.icon size={24} />
                </a>
              ))}
            </div>
            <Button asChild className={cn("w-full h-14 rounded-2xl font-black text-focus-navy text-lg", donateButtonClass)}>
              <Link href="/donate" onClick={() => setIsOpen(false)}>
                Donate <Heart size={20} className="fill-current ml-2 inline" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="h-20 lg:h-24" />
    </>
  )
}