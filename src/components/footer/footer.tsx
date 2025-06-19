
export default function Footer() {
    return (
      <footer className="row-start-3 bg-footerBg text-gray-200 p-5 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()} Planora Hub. All Rights
          Reserved.
        </p>
      </footer>
    );
}