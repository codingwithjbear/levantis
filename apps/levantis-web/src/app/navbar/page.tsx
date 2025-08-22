'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Levantis</span>
            <img
                alt="Levantis logo"
                src="/levantis-logo-horizontal.svg"
                className="h-16 w-auto"
                />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold ${
                pathname === item.href ? 'text-emerald-400' : 'text-white'
              } hover:text-emerald-300`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          >
            Book a call
          </Link>
        </div>
      </nav>

      {/* Mobile nav */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm overflow-y-auto bg-gray-900 p-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Levantis</span>
              <img
                alt="Levantis logo"
                src="/levantis-logo-stacked.svg"
                className="h-14 w-auto"
                />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 divide-y divide-white/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${
                    pathname === item.href ? 'text-emerald-400' : 'text-white'
                  } hover:bg-white/5`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white bg-emerald-500 hover:bg-emerald-400"
              >
                Book a call
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}