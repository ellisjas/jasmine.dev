import Image from "next/image";
import Link from "next/link";

export function Card() {
  return (
    <section className="flex items-center gap-4 bg-linear-to-bl from-violet-500 to-fuchsia-500 py-6 px-8 rounded-2xl shadow-2xl">
      <section className="flex-1">
        <hgroup className="text-center">
          <h1 className="text-ibm-sans">Jasmine Ellis</h1>
          <h2>Web Developer</h2>
        </hgroup>
        Hey there. I'm Jasmine, a seasoned web developer passionate about
        crafting clean and dynamic websites. With 10 years of experience, I
        specialise in front-end and back-end development using modern web
        technologies and frameworks like React and NextJS. I thrive on creating
        user-centric designs and optimising performance for seamless browsing
        experiences.
        <nav
          className="flex gap-10 mt-4 w-full items-center justify-center"
          aria-label="Contact links"
        >
          <Link
            href="https://github.com/ellisjas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-80 transition-opacity ease-in-out delay-100"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={28}
              height={28}
            />
          </Link>
          <Link
            href="mailto:jasellis@pm.me"
            aria-label="Email me"
            className="hover:opacity-80 transition-opacity ease-in-out delay-100"
          >
            <Image src="/icons/email.svg" alt="Email" width={28} height={28} />
          </Link>
        </nav>
      </section>
      <Image
        src="/images/self.jpg"
        alt="Jasmine Ellis - Web Developer"
        width={329}
        height={331}
        className="rounded-full w-[30%] h-auto object-cover grayscale shrink-0"
      />
    </section>
  );
}
