import { Link } from '@/libs/i18n.lib';

export const HeaderLayout = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">Next.js App</div>
      <nav className="flex space-x-4">
        <Link href="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-400">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-400">
          Contact
        </Link>
      </nav>
    </header>
  );
};
