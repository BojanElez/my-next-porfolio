'use client'
import Link from 'next/link'
interface INavigationProps {
  navListTranslation: string[];
  navList: string[];
}

export const Navigation = ({ navList, navListTranslation }: INavigationProps) => {
  const scrollNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navLine = 'nav-indicator mr-4 h-px w-12 bg-slate-600 transition-all group-hover:w-20 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none';
  const navText = 'nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-neutral-50 group-focus-visible:text-neutral-50';

  return (
    <nav>
      <ul>
        {navListTranslation.map((navItem: any, index: number) => {
          return (
            <li className="group flex items-center py-2" key={index}>
              <span className={`${navLine}`}></span>
              <span className={`${navText}`}>
                <Link href={`#${navList[index]}`} onClick={scrollNavigation}>
                  {navItem}
                </Link>
              </span>
            </li>
          )
        })}
      </ul>
    </nav>
  )
};