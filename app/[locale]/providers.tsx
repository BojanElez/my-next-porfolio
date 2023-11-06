"use client";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

interface IProviderChildren {
  children: React.ReactNode;
}

export default function Providers({ children }: IProviderChildren): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-h-screen">
      {!mounted ? children : <ThemeProvider>{children}</ThemeProvider> }
    </div>
  )
}





