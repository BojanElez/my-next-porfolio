'use client'
import Link from 'next/link'
import { INavigationProps } from './types';

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

  return (
    <nav>
      <ul>
        {navListTranslation.map((navItem: any, index: number) => {
          return (
            <li className="group flex items-center py-2" key={index}>
              <span className="nav-line"></span>
              <span className="nav-text">
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