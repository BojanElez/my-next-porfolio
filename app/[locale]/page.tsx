import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Footer } from "./components/Footer";
import { LeftColumn } from "./components/LeftColumn/LeftColumn";
import { RightColumn } from "./components/RightColumn/RightColumn";
import Link from "next-intl/link";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="flex flex-col w-9/12 mx-auto p-2 min-h-screen">
      <div className="flex">
        <ThemeSwitcher />
        <div className="ml-auto">
          <Link href="/" locale="en" className="mr-5">
            <span className="fi fi-gb w-32 text-xl"></span>
          </Link>
          <Link href="/" locale="sr">
            <span className="fi fi-rs w-32 text-xl"></span>
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
