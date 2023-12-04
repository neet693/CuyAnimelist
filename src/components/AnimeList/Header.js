import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-warna-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md underline transition-all text-warna-primary hover:text-warna-accent"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
