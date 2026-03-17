const footerLinks = [
  { label: "Programme", href: "#programme" },
  { label: "For Whom", href: "#for-whom" },
  { label: "Collaborate", href: "#collaborate" },
  { label: "Impact", href: "#impact" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a
              href="#"
              className="font-heading text-lg font-bold tracking-tight text-foreground"
            >
              Tech for Impact
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              Technology for a sustainable future.
            </p>
          </div>

          <nav aria-label="Footer navigatie">
            <ul className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Tech 4 Impact. The Hague,
            Netherlands.
          </p>
        </div>
      </div>
    </footer>
  );
}
