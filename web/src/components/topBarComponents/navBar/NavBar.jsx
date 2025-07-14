import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../../.././index.css';
import NavBarItem from './NavBarItem';

function NavBar({ onHover, onOut, mode, rightMargin}) {
    const [isActive, setIsActive] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Set active navigation item based on current route and hash
    useEffect(() => {
        const updateActiveState = () => {
            const path = location.pathname;
            const hash = location.hash;
            
            // Handle hash-based navigation first
            if (hash === '#project-section') {
                setIsActive('Projects');
                return;
            }
            if (hash === '#contactBox') {
                setIsActive('Contact');
                return;
            }
            
            // Handle route-based navigation
            switch (path) {
                case '/':
                    setIsActive('About');
                    break;
                case '/experience':
                    setIsActive('Experience');
                    break;
                case '/extracurricular':
                    setIsActive('Extracurricular');
                    break;
                case '/skills':
                    setIsActive('Skills');
                    break;
                case '/awards':
                    setIsActive('Awards');
                    break;
                default:
                    // If no hash and not a recognized route, default to About
                    if (!hash) {
                        setIsActive('About');
                    }
                    break;
            }
        };

        updateActiveState();
    }, [location.pathname, location.hash]);

    // Listen for scroll events to detect which section is in view
    useEffect(() => {
        let scrollTimeout;
        
        const handleScroll = () => {
            // Debounce scroll events
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // Only update active state based on scroll if we're on the home page
                if (location.pathname === '/') {
                    const introSection = document.getElementById('Intro');
                    const projectSection = document.getElementById('project-section');
                    const contactBox = document.getElementById('contactBox');
                    
                    if (introSection && projectSection && contactBox) {
                        const introRect = introSection.getBoundingClientRect();
                        const projectRect = projectSection.getBoundingClientRect();
                        const contactRect = contactBox.getBoundingClientRect();
                        
                        const viewportHeight = window.innerHeight;
                        const threshold = viewportHeight * 0.3; // 30% from top
                        
                        // Check which section is most visible
                        if (contactRect.top <= threshold) {
                            setIsActive('Contact');
                        } else if (projectRect.top <= threshold) {
                            setIsActive('Projects');
                        } else {
                            setIsActive('About');
                        }
                    }
                }
            }, 100); // 100ms debounce
        };

        window.addEventListener('scroll', handleScroll);
        // Call once on mount to set initial state
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [location.pathname]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('keydown', handleKeyDown);
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleActiveClick = (item) => {
        setIsActive(item);
        // Close mobile menu when item is clicked
        setIsMobileMenuOpen(false);
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const navItems = [
        { title: 'About', link: '/' },
        { title: 'Experience', link: '/experience' },
        { title: 'Extracurricular', link: '/extracurricular' },
        { title: 'Skills', link: '/skills' },
        { title: 'Awards', link: '/awards' },
        { title: 'Projects', link: '#project-section' },
        { title: 'Contact', link: '#contactBox' }
    ];

    return (
        <>
            {/* Desktop Navigation - Always visible */}
            <nav className="hidden lg:flex navBar cursor-pointer transition-all duration-300 ease-in-out h-auto mr-[2.5rem] flex-row px-6 py-3 ml-auto rounded-full border-[0.15rem] items-center justify-center hover:border-[#FE6E00] shadow-lg hover:shadow-xl">
                {navItems.map((item) => (
                    <NavBarItem 
                        key={item.title}
                        title={item.title} 
                        isActive={isActive === item.title} 
                        link={item.link} 
                        onClick={() => handleActiveClick(item.title)} 
                    />
                ))}
            </nav>

            {/* Mobile/Tablet Navigation */}
            <div className="lg:hidden relative">
                {/* Hamburger Button */}
                <button 
                    onClick={toggleMobileMenu}
                    className="navBar p-4 rounded-full border-[0.15rem] transition-all duration-300 ease-in-out hover:border-[#FE6E00] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#FE6E00] focus:ring-opacity-50"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <div className="relative w-6 h-6">
                        <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 top-2.5' : ''}`}></span>
                        <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 top-2.5' : ''}`}></span>
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsMobileMenuOpen(false)}
                    ></div>
                )}

                {/* Mobile Menu Panel */}
                <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] navBar transform transition-transform duration-300 ease-in-out z-50 shadow-2xl ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-opacity-20">
                            <h2 className="text-xl font-semibold">Navigation</h2>
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-full hover:bg-[#FE6E00] hover:bg-opacity-20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FE6E00] focus:ring-opacity-50"
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Items */}
                        <div className="flex-1 py-6">
                            <div className="space-y-2 px-6">
                                {navItems.map((item) => (
                                    <div key={item.title} className="w-full">
                                        <NavBarItem 
                                            title={item.title} 
                                            isActive={isActive === item.title} 
                                            link={item.link} 
                                            onClick={() => handleActiveClick(item.title)}
                                            isMobile={true}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-opacity-20">
                            <p className="text-sm opacity-70 text-center">© 2024 Bill Wang</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;