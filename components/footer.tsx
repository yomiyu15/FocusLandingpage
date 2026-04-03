"use client";

import Link from 'next/link';
import { Mail, MapPin, Phone, Facebook, Send, Youtube, Video } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-focus-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          
          {/* About */}
          <div>
            {/* Title changed to white */}
            <h3 className="font-bold text-lg mb-3 text-white uppercase tracking-wider">FOCUS</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Faith-based, interdenominational, and missional ministry established in 1998 GC
              to equip and mobilize young leaders for holistic transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            {/* Title changed to white */}
            <h4 className="font-semibold text-white mb-3 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-1.5 text-sm font-medium">
              <li>
                <Link href="/" className="text-gray-300 hover:text-focus-yellow transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-focus-yellow transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/fellowship" className="text-gray-300 hover:text-focus-yellow transition-colors">FOCUS Fellowship</Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-300 hover:text-focus-yellow transition-colors">Donate</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-focus-yellow transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            {/* Title changed to white */}
            <h4 className="font-semibold text-white mb-3 uppercase text-xs tracking-widest">Contact Info</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-focus-yellow mt-0.5 flex-shrink-0" />
                <a href="mailto:focusministry26@gmail.com" className="text-gray-300 hover:text-focus-yellow transition-colors break-all">
                  focusministry26@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-focus-yellow mt-0.5 flex-shrink-0" />
                <a href="tel:+251908222226" className="text-gray-300 hover:text-focus-yellow transition-colors">
                  +251 908 222 226
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-focus-yellow mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>

          {/* Social Platforms */}
          <div>
            {/* Title changed to white */}
            <h4 className="font-semibold text-white mb-3 uppercase text-xs tracking-widest">Social Platforms</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a href="https://www.facebook.com/focusministry" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-focus-yellow transition-colors">
                  <Facebook size={14} className="text-focus-yellow" /> FOCUS MINISTRY
                </a>
              </li>
              <li>
                <a href="https://t.me/focusministry2" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-focus-yellow transition-colors">
                  <Send size={14} className="text-focus-yellow" /> Telegram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@FocusministryOfficial26" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-focus-yellow transition-colors">
                  <Youtube size={14} className="text-focus-yellow" /> YouTube
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@focus.media50" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-focus-yellow transition-colors">
                  <Video size={14} className="text-focus-yellow" /> TikTok: focus.media50
                </a>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="border-t border-gray-200 pt-6">
 <div className="border-t border-white/20 pt-6">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-white/80">
    <p className="text-white/70 text-center md:text-left">
  &copy; {currentYear} FOCUS - Fellowship of Oromo Christian University Students.
</p>

    <div className="flex gap-6">
      <Link href="/privacy-policy" className="hover:text-focus-yellow transition-colors">
        Privacy Policy
      </Link>
      <Link href="/terms" className="hover:text-focus-yellow transition-colors">
        Terms
      </Link>
    </div>

  </div>
</div>
</div>
      </div>
    </footer>
  );
}