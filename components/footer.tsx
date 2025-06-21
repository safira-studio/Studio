import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  GitlabIcon as GitHub,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-16 relative overflow-hidden ">
      {/* Enhanced yellow gradient light effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-300/30 via-amber-200/20 to-transparent opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <h2 className="text-4xl font-light tracking-wider text-gray-300 bg-gradient-to-r from-gray-300 via-amber-100 to-gray-300 bg-clip-text text-transparent">
              Safira
            </h2>
            <p className="text-sm">
              Creating immersive digital experiences through innovative design
              and technology.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-light tracking-wider bg-gradient-to-r from-gray-300 via-amber-100/80 to-gray-300 bg-clip-text text-transparent">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link
                  href="mailto:info@safirastudio.com"
                  className="hover:text-gray-200 transition-colors"
                >
                  info@safirastudio.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Design Avenue, Creative District</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-light tracking-wider bg-gradient-to-r from-gray-300 via-amber-100/80 to-gray-300 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-200 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-200 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-200 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-200 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-200 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-light tracking-wider bg-gradient-to-r from-gray-300 via-amber-100/80 to-gray-300 bg-clip-text text-transparent">
              Connect
            </h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <GitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Similar to the one in the screenshot */}
        <div className="mt-16 flex justify-center">
          <div className="bg-black/60 backdrop-blur-sm rounded-full px-6 py-3 flex gap-6 border border-amber-900/30">
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="sr-only">Home</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-image"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              <span className="sr-only">Gallery</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-music"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              <span className="sr-only">Music</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} Safira Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
