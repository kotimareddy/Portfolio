export default function Footer() {
  return (
    <footer className="py-12 bg-gray-950 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-500 text-sm font-medium tracking-wide">
            Built by <span className="text-sky-400 font-bold">Koti Reddy</span> — Full Stack Developer
          </p>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
