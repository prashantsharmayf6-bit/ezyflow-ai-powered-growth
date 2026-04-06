const WhatsAppButton = () => (
  <a
    href="https://wa.me/916381798761?text=Hi%20Ezyflow%2C%20I%20want%20to%20know%20more%20about%20your%20services"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="h-8 w-8">
      <defs>
        <linearGradient id="wa-grad" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
      </defs>
      <path fill="#fff" d="M87.184 14.2A73.14 73.14 0 0 0 16.1 90.98a72.54 72.54 0 0 0 10.5 37.7L14.8 166l38.3-12.1a73.18 73.18 0 0 0 108.9-63.5A73.58 73.58 0 0 0 87.184 14.2Zm42.74 103.4c-1.8 5-10.5 9.6-14.6 10.2s-7.5 2.8-24.6-5.1c-20.7-9.6-33.8-30.7-34.8-32.1s-8.2-10.9-8.2-20.8 5.2-14.8 7-16.8 4-2.1 5.3-2.1h3.8c1.2 0 2.8-.5 4.4 3.3s5.6 13.6 6.1 14.6.8 2.1.2 3.4-1 2-1.8 3-.7.8-1.6 2.2 3 5.6 7.5 11.2c5.9 7.2 10.8 9.4 12.3 10.5s2.4.9 3.3 0 3.7-4.3 4.7-5.8 2-1.2 3.4-.7 8.8 4.1 10.3 4.9 2.5 1.1 2.9 1.7.4 3.7-1.3 8.7Z" />
    </svg>
  </a>
);

export default WhatsAppButton;
