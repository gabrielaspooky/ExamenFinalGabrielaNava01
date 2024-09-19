import { Outfit } from 'next/font/google';
import './globals.css';
import Sidebar from '../../components/ui/Sidebar';
const outfit = Outfit({ subsets: ['latin'] }); 
export const metadata = {
  title: 'Examen final',
  description: 'Created by Gabriela Nava'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
          <main>{children}</main> 
      </body>
    </html>
  );
}
