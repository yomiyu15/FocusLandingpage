'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, Heart, Menu, X, ArrowRight, Facebook, Youtube, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

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
        { href: '/about', label: 'About Us', desc: 'Story, mission, and ministry overview' },
        { href: '/structure', label: 'Structure', desc: 'Status, hierarchy, and platforms' },
      ],
    },
    {
    
  label: 'Focus Ministry Pillars',
  isMega: true,
  submenu: [
    {
      href: '/fellowship/evangelism',
      label: 'Evangelism',
      desc: 'Large-scale outreach',
    },
    {
      href: '/fellowship/girls-ministry',
      label: 'Girls Ministry',
      desc: 'Focused empowerment',
    },
    {
      href: '/fellowship/leadership-development',
      label: 'Leadership Development',
      desc: 'Capacity building',
    },
    {
      href: '/fellowship/spiritual-nurturing',
      label: 'Spiritual Nurturing',
      desc: 'Discipleship and building body of christ',
    },
    {
      href: '/fellowship/social-service-community-development',
      label: 'Social Service & Community Development',
      desc: 'Practical engagement',
    },
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

  const socialLinks = [
    { href: 'https://t.me/focusministry2', label: 'Telegram', icon: Send },
    { href: 'https://www.facebook.com', label: 'Facebook', icon: Facebook },
    { href: 'https://www.youtube.com/@FocusministryOfficial26', label: 'YouTube', icon: Youtube },
  ]

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          scrolled 
            ? "bg-white/85 backdrop-blur-xl border-b border-gray-100 shadow-[0_14px_40px_rgba(0,0,0,0.10)]"
            : "bg-white/75 backdrop-blur-xl border-b border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-[4.75rem]">
            {/* Logo Section */}
            <Link 
              href="/" 
              className="flex items-center gap-2.5 group relative z-[110] min-w-0 transition-transform hover:scale-[1.02]"
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sS2c54DZ5NxGumVhYXOUXicZgJmTZH.png"
                  alt="FOCUS Logo"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0 justify-center">
                <span className="font-black text-xl lg:text-2xl leading-[1] text-focus-yellow tracking-[-0.02em]">
                  FOCUS
                </span>
                <span className="hidden sm:block text-[10px] lg:text-xs font-semibold text-focus-navy/90 leading-tight max-w-[280px] lg:max-w-[320px]">
                  Fellowship of Oromo Christian University Students
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 p-0">
              {navLinks.map((link) => (
                <div 
                  key={link.label} 
                  className="relative"
                  onMouseEnter={() => link.submenu && handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.submenu ? (
                    <>
                      <button 
                        className={cn(
                          "flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200",
                          "text-gray-700 hover:text-focus-blue hover:bg-focus-light/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]",
                          activeDropdown === link.label && "text-focus-blue bg-focus-light/30 ring-1 ring-focus-blue/10"
                        )}
                      >
                        {link.label}
                        <ChevronDown 
                          size={14} 
                          className={cn(
                            "transition-all duration-300",
                            activeDropdown === link.label && "rotate-180"
                          )} 
                        />
                      </button>

                      <div 
                        className={cn(
                          "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ease-out",
                          "opacity-0 invisible translate-y-2",
                          activeDropdown === link.label && "opacity-100 visible translate-y-0"
                        )}
                      >
                        <div
                          className={cn(
                            "bg-white/95 border border-gray-100 shadow-2xl rounded-2xl overflow-hidden backdrop-blur-md ring-1 ring-focus-blue/10",
                            link.isMega ? "w-[560px]" : "w-72"
                          )}
                        >
                          <div className={cn(
                            "p-2",
                            link.isMega ? "grid grid-cols-2 gap-1" : "flex flex-col"
                          )}>
                            {link.submenu.map((item) => (
                              <Link 
                                key={`${item.href}-${item.label}`} 
                                href={item.href} 
                                className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-focus-light/30 transition-all duration-200"
                              >
                                <div className="flex-1 min-w-0">
                                  <span className="block text-sm font-semibold text-gray-900 group-hover/item:text-focus-blue transition-colors">
                                    {item.label}
                                  </span>
                                  {item.desc && (
                                    <span className="block text-xs text-gray-500 mt-0.5 line-clamp-1">
                                      {item.desc}
                                    </span>
                                  )}
                                </div>
                                <ArrowRight
                                  size={14}
                                  className="opacity-0 group-hover/item:opacity-100 transition-all -translate-x-1 group-hover/item:translate-x-0 text-focus-blue"
                                />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link 
                      href={link.href ?? '/'} 
                      className={cn(
                        "px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200",
                        pathname === link.href
                          ? "text-focus-blue"
                          : "text-gray-700 hover:text-focus-blue hover:bg-focus-light/30"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit FOCUS on ${item.label}`}
                    title={item.label}
                    className="h-9 w-9 inline-flex items-center justify-center rounded-lg text-gray-600 hover:text-focus-blue hover:bg-focus-light/40 transition-colors"
                  >
                    <item.icon size={16} aria-hidden="true" />
                    <span className="sr-only">{item.label}</span>
                  </a>
                ))}
              </div>
              <Button 
                asChild 
                className="group relative overflow-hidden bg-focus-yellow hover:bg-focus-yellow/90 text-focus-navy font-bold rounded-xl px-6 py-2.5 shadow-[0_12px_30px_rgba(255,221,0,0.35)] ring-1 ring-focus-yellow/50 hover:shadow-[0_16px_40px_rgba(255,221,0,0.45)] transition-all duration-300"
              >
                <Link href="/donate" className="flex items-center gap-2">
                  <span>Donate</span>
                  <Heart size={16} className="transition-transform group-hover:scale-110" />
                </Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden relative z-[110] p-2 text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "lg:hidden fixed inset-x-0 top-16 lg:top-20 bg-white border-t border-gray-100 shadow-xl transition-all duration-500 ease-out",
            isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
          )}
        >
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label} className="group">
                  {link.submenu ? (
                    <>
                      <div className="text-base font-bold text-gray-900 py-3 flex items-center justify-between">
                        <span>{link.label}</span>
                        <ChevronDown size={18} className="text-gray-400" />
                      </div>
                      <div className="ml-4 space-y-1 pb-3">
                        {link.submenu.map((sub) => (
                          <Link
                            key={`${sub.href}-${sub.label}`}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2.5 px-3 text-sm font-semibold text-gray-700 hover:text-focus-blue hover:bg-focus-light/30 rounded-xl transition-colors"
                          >
                            {sub.label}
                            {sub.desc && (
                              <span className="block text-xs text-gray-500 font-normal mt-0.5">
                                {sub.desc}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href ?? '/'}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block py-3 text-base font-bold transition-colors",
                        pathname === link.href
                          ? "text-focus-yellow"
                          : "text-gray-900 hover:text-focus-blue"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-2 space-y-1">
                <div className="flex items-center gap-2 px-1">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit FOCUS on ${item.label}`}
                      title={item.label}
                      className="h-10 w-10 inline-flex items-center justify-center rounded-xl text-gray-700 hover:text-focus-blue hover:bg-focus-light/30 transition-colors"
                    >
                      <item.icon size={18} aria-hidden="true" />
                      <span className="sr-only">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  asChild 
                  className="w-full bg-focus-yellow hover:bg-focus-yellow/90 text-focus-navy font-bold h-12 rounded-xl text-base shadow-[0_12px_30px_rgba(255,221,0,0.35)] ring-1 ring-focus-yellow/50"
                >
                  <Link href="/donate" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                    Donate Now
                    <Heart size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  )
}