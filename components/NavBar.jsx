import Link from "next/link";

function NavBar() {
  return (
    <>
      <div className="bg-gray-50/90 border-t border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800 w-full">
        <div className="container py-3 md:py-4">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1.5">
              <ArrowUpRightIcon className="w-4 h-4" />
              <span>Have a question? Call us!</span>
            </div>
            <Link
              className="underline hover:text-gray-900"
              href="#">
              +1 (555) 123-4567
            </Link>
          </div>
        </div>
      </div>
      <div className="py-6 md:py-10 lg:py-14">
        <div className="container flex flex-col items-center gap-4 px-16 text-center md:gap-6 ">
          <nav className="flex items-center w-full justify-between">
            <Link
              className="flex items-center space-x-2 font-bold"
              href="/">
              <MessageSquareIcon className="w-6 h-6 fill-current"/>
              <span className="text-xl font-bold tracking-tighter">
                SMSBlaster
              </span>
            </Link>
            <div className="hidden items-center space-x-3 md:flex">
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-gray-900"
                href="#features">
                Features
              </Link>
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-gray-900"
                href="#how">
                How it works?
              </Link>
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-gray-900"
                href="#contact">
                Contact
              </Link>
            </div>
            {/* <div className="ml-auto">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="#">
              Log in
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900 dark:hover:bg-gray-900/90 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="#">
              Sign up
            </Link>
          </div> */}
          </nav>
        </div>
      </div>
    </>
  );
}

function ArrowUpRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function MessageSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default NavBar;
