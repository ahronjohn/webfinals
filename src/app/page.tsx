"use client";

import Image from "next/image";
import Link from "next/link";   
import React, { useState } from "react";
import type { ReactNode } from "react";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 bg-muted" id="about">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to AETHRA PH</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Brotherhood in every stitch. Premium apparel built for confidence.
        </p>
        <Link
          href="#products"
          className="mt-6 rounded-md bg-primary px-6 py-3 text-white hover:bg-primary/90 transition"
        >
          Explore Collection
        </Link>
      </section>

      {/* Products */}
      <BentoGrid1 />

      {/* Contact */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16" id="contact">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-muted-foreground">Email us at aethraph or DM our socials for more update release.</p>
      </section>

      <Footer />
    </main>
  );
}

/* -------------------- Navbar -------------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">   
          <Image
            src="/logo.jpg"
            alt="Aethra Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-lg">AETHRA</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-md border px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li><Link href="#products" className="hover:text-primary transition">Products</Link></li>
          <li><Link href="#about" className="hover:text-primary transition">About</Link></li>
          <li><Link href="#contact" className="hover:text-primary transition">Contact</Link></li>
        </ul>

        {/* CTA */}
        <Link
          href="#shop"
          className="hidden md:inline-block rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90 transition"
        >
          Shop Now
        </Link>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <ul className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-2">
            <li><Link href="#products" className="block py-2">Products</Link></li>
            <li><Link href="#about" className="block py-2">About</Link></li>
            <li><Link href="#contact" className="block py-2">Contact</Link></li>
            <li><Link href="#shop" className="block py-2 font-semibold">Shop Now</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}

/* -------------------- Footer -------------------- */
function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p>&copy; {new Date().getFullYear()} AETHRA PH. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white transition">
            Instagram
          </Link>
          <Link href="#" className="hover:text-white transition">
            Facebook
          </Link>
          <Link href="#" className="hover:text-white transition">
            Tiktok
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* -------------------- UI Card -------------------- */
function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`rounded-xl border border-gray-200 bg-white ${className}`}>{children}</div>;
}
function CardHeader({ children }: { children: ReactNode }) {
  return <div className="p-4 border-b border-gray-100">{children}</div>;
}
function CardTitle({ className = "", children }: { className?: string; children: ReactNode }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}
function CardDescription({ children }: { children: ReactNode }) {
  return <p className="mt-1 text-sm text-muted-foreground">{children}</p>;
}
function CardContent({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

/* -------------------- Bento Grid -------------------- */
function BentoGrid1() {
  return (
    <section className="bg-muted py-16 md:py-24" id="products">
      <div className="px-4 sm:px-6 lg:px-8 container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="gap-2 md:gap-3 mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="uppercase tracking-widest text-xs text-primary">AETHRA</span>
          <h2 className="text-3xl md:text-5xl font-bold">AETHRA PH</h2>
          <p className="text-muted-foreground">Aethra means Brotherhood!!</p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">

          {/* AE1 — Tall Left Image */}
          <Card className="rounded-xl lg:row-span-2 flex flex-col overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Aethra Hoodie</CardTitle>
              <CardDescription>
                INTRODUCING THE AETHER&apos;S ONYX SEASON HOODIE, DESIGNED TO KEEP YOU WARM WHILE ELEVATING YOUR EVERYDAY STYLE.
                CRAFTED FROM PREMIUM, HEAVYWEIGHT FABRIC AND FINISHED WITH MINIMALIST DETAILING,
                IT&apos;S BUILT FOR THOSE WHO MOVE THROUGH THE COLD WITH CONFIDENCE. AETHER&apos;S LATEST RELEASE DELIVERS THE PERFECT BALANCE OF FUNCTION, FORM, AND WARMTH.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src="/AE 1.jpg"
                alt="AE 1"
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
                priority
              />
            </CardContent>
          </Card>

          {/* AE2 */}
          <Card className="rounded-xl overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Aethra Sando</CardTitle>
              <CardDescription>
                The Aethra Muscle tee is cut to move with you, a fit that speak strength.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src="/AE 4.jpg"
                alt="AE 4"
                width={1000}
                height={1000}
                className="h-full w-full object-cover md:aspect-[4/3]"
              />
            </CardContent>
          </Card>

          {/* AE3 */}
          <Card className="rounded-xl overflow-hidden flex flex-col lg:col-start-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Aethra Tshirt</CardTitle>
              <CardDescription>New versions.</CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src="/AE3.jpg"
                alt="AE3"
                width={1000}
                height={1000}
                className="h-full w-full object-cover md:aspect-[4/3]"
              />
            </CardContent>
          </Card>

          {/* AE4 */}
          <Card className="rounded-xl overflow-hidden flex flex-col lg:col-start-3 lg:row-span-2 lg:row-start-1">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Aethra Classic</CardTitle>
              <CardDescription>
                The Aethra Classic Tees crafted for every grind, built to carry your story. This isn&apos;t just a tee, it&apos;s your foundation.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src="/AE 2.jpg"
                alt="AE 2"
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
