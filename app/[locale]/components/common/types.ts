import { IProject } from "@/app/types";

export interface IButtonProps {
	text: string,
	type: "button" | "submit" | "reset" | undefined,
	variant?: string | undefined,
	buttonEvent?: () => void
}

export interface IModalProps {
  title: string,
  showMore: string,
  projects: IProject[],
}

export interface ISubChildrenProps {
  children: React.ReactNode,
  tag: string
}
