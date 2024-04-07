import Link from "next/link";

function Footer() {
  return (
    <footer className="py-9">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 SMSBlaster. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link
            className="inline-flex h-8 items-center justify-center rounded-md text-sm text-gray-900 shadow-sm transition-colors"
            href="#">
            Privacy
          </Link>
          <Link
            className="inline-flex h-8 items-center justify-center rounded-md text-sm text-gray-900 shadow-sm transition-colors"
            href="#">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
