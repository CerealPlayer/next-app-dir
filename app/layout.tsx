import Link from "next/link";
import "../styles/globals.css";
import { CommonProps } from "../types/commons";
import { Hoverable } from "../ui/Hoverable";

export default function Layout({ children }: CommonProps) {
  return (
    <html>
      <body>
        <nav className="flex items-center justify-between px-8 py-4 m-2 border border-neutral-500 rounded-xl bg-purple-100">
          <span className="font-bold text-4xl leading-none font-sans bg-gradient-to-bl from-neutral-900 via-slate-500 to-stone-800 bg-clip-text text-transparent">
            Misti.ai
          </span>
          <ul className="flex flex-row items-center gap-2">
            <li className='p-2 rounded-xl hover:bg-purple-300 transition-all duration-200 ease-out'>
              <Link href="/products">Products</Link>
            </li>
            <li className='p-2 rounded-xl hover:bg-purple-300 transition-all duration-200 ease-out'>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className='p-2 rounded-xl hover:bg-purple-300 transition-all duration-200 ease-out'>
              <Link href="/about">About us</Link>
            </li>
            <li className='p-2 rounded-xl hover:bg-purple-300 transition-all duration-200 ease-out'>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
