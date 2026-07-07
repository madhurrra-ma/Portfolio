export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Madhura Melgiri.
        </p>

        
      </div>
    </footer>
  );
}