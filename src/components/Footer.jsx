function Footer() {
  return (
    <footer
      className="bg-gray-800 text-white p-4 text-center"
      role="contentinfo"
      aria-label="Footer"
    >
      <p>&copy; {new Date().getFullYear()} Nestora. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
