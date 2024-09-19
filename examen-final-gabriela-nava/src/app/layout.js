import { Outfit } from 'next/font/google';  // Importa la fuente de Google
import './globals.css';  // Importa estilos globales
import Sidebar from '../../components/ui/Sidebar';  // Importa el componente Sidebar

// Crea una instancia de la fuente Outfit con el subset 'latin'
const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Examen final',
  description: 'Created by Gabriela Nava'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">  {/* Define el idioma de la página */}
      <body className={outfit.className}>  {/* Aplica la clase de la fuente Outfit */}
        <div className="flex">  {/* Usar flexbox para alinear Sidebar y el contenido */}
          <Sidebar />  {/* Muestra el componente Sidebar */}
          <main className="flex-1 p-4">  {/* Principal área de contenido */}
            {children}  {/* Renderiza los hijos del layout */}
          </main>
        </div>
      </body>
    </html>
  );
}
