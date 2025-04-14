import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.preloader-text',
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );

      gsap.to('.preloader-progress', {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut',
      });
    }, preloaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-white"
    >
      <div className="text-center">
        <h1 className="preloader-text text-4xl font-bold text-blue-600 mb-4">
          AUISC
        </h1>
        <p className="preloader-text text-gray-600 mb-8">
          Anurag University IUCEE Student Chapter
        </p>
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="preloader-progress w-0 h-full bg-blue-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader; 