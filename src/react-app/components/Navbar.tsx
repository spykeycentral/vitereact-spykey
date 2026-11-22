import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

const links = [
  ["Articles", "/articles"],
  ["AI Prompt Vault", "/prompts"],
  ["Tools", "/tools"],
  ["Archive", "/archive"],
  ["Resources", "/resources"],
  ["About", "/about"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="SpyKey Central home">
          <span className="grid size-8 place-items-center rounded-md border border-primary/30 bg-primary/10 font-mono text-sm font-black text-primary shadow-[0_0_18px_rgb(34_197_94/12%)]">S</span>
          <span className="text-[15px] font-bold tracking-tight">SpyKey Central</span>
        </Link>
        <nav className="mx-auto hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `rounded-md px-3 py-2 text-sm transition-colors ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Search" onClick={() => navigate("/search")} className="text-muted-foreground">
            <Search aria-hidden="true" />
          </Button>
          <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} className="lg:hidden" onClick={() => setOpen((value) => !value)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map(([label, path]) => (
              <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-md px-3 py-2.5 text-sm ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
