import Link from "next/link";
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} <span className="text-yellow-500 font-bold">Snehal Mishra.</span> All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="/#" className="hover:text-gray-400">Back to Top</a>
            <a href="/#Connect" className="hover:text-gray-400">Contact</a>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.instagram.com/snehal.mishraa/" aria-label="Instagram" target="_blank" className="hover:text-gray-400 text-pink-200">Instagram</a>
            <a href="https://www.linkedin.com/in/snehal-mishra-2618b2199/" aria-label="Linkedin" target="_blank" className="hover:text-gray-400 text-blue-200">Linkedin</a>
            <a href="https://leetcode.com/u/SnehalMishra/" aria-label="LeetCode" target="_blank" className="hover:text-gray-40 text-yellow-200">Leet Code</a>
            <a href="https://github.com/SnehalMishra02" aria-label="Github" target="_blank" className="hover:text-gray-400 text-green-200">Github</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  