import { useEffect, useRef, useState } from 'react';
import { Features } from '../../components/Features';
import { Footer } from '../../components/Footer';
// import Header from '../../components/Header';
import { MainMenu } from '../../components/MainMenu';
// import Services from '../../components/Services';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen && // Si el menú está abierto
        menuRef.current && // Si la referencia del menú existe
        !menuRef.current.contains(event.target as Node) // Si el clic no es dentro del menú
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className='min-h-screen bg-black text-white'>
      <div ref={menuRef}>
        <MainMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <Features isMenuOpen={isMenuOpen} />
      <Footer isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default App;
