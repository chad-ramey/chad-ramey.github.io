import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="mb-16 md:mb-20">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-foreground">
            Alex Morgan
          </h1>
          <p className="mt-3 text-lg text-muted-foreground font-light tracking-wide">
            Designer & Engineer
          </p>
        </div>
        <button
          onClick={() => setDark(!dark)}
          className="mt-2 p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
