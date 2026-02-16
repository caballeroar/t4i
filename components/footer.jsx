const footerLinks = [
  { label: "Over ons", href: "#over-ons" },
  { label: "Voor wie", href: "#voor-wie" },
  { label: "Wat we doen", href: "#wat-we-doen" },
  { label: "Impact", href: "#impact" },
  { label: "Samenwerken", href: "#samenwerken" },
  { label: "Contact", href: "#contact" },
]

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
              Technologie voor een eerlijke en duurzame toekomst
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
            &copy; {new Date().getFullYear()} Tech for Impact. Alle rechten voorbehouden. Den
            Haag, Nederland.
          </p>
        </div>
      </div>
    </footer>
  )
}
