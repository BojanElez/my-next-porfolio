import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Footer } from "./components/Footer";
import { LeftColumn } from "./components/LeftColumn/LeftColumn";
import { RightColumn } from "./components/RightColumn/RightColumn";
import Link from "next/link";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="flex flex-col w-9/12 mx-auto min-h-[calc(100%+100px)]">
      <div className="flex p-2">
        <ThemeSwitcher />
        <div className="ml-auto">
          <Link href="/en" className="mr-5 cursor-pointer" aria-label="Switch to English">
            <span className="fi fi-gb w-32 text-xl" aria-hidden="true"></span>
          </Link>
          <Link href="/sr" className="cursor-pointer" aria-label="Switch to Serbian">
            <span className="fi fi-rs w-32 text-xl" aria-hidden="true"></span>
          </Link>
        </div>
      </div>
      <main className="flex h-[calc(100vh-70px)]">
        <div className="flex xs:flex-wrap lg:flex-nowrap gap-x-24">
          <LeftColumn />
          <RightColumn />
        </div>
      </main>
      <Footer />
    </div>
  )
}
