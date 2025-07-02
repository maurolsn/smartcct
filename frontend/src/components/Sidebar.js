import Link from 'next/link';
import { useRouter } from 'next/router';

const menuItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Usuários', href: '/users' },
  { label: 'Clientes', href: '/clients' },
  { label: 'Conversas', href: '/conversations' },
  { label: 'Bot IA', href: '/bot' },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="h-screen bg-blue-800 text-white w-64 flex flex-col">
      <div className="text-2xl font-bold p-6 border-b border-blue-700">
        SmartCCT
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <div className={`cursor-pointer px-4 py-2 rounded-lg ${
              router.pathname === item.href ? 'bg-blue-600' : 'hover:bg-blue-700'
            }`}>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-blue-700 text-sm">
        &copy; {new Date().getFullYear()} SmartCCT
      </div>
    </div>
  );
}
