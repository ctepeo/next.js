export const LanguageSwitcher = () => {
  return (
    <div className="flex items-center space-x-2">
      <a href="/en" className="hover:text-gray-400">
        EN
      </a>
      <a href="/fr" className="hover:text-gray-400">
        FR
      </a>
      <a href="/es" className="hover:text-gray-400">
        ES
      </a>
    </div>
  );
};
