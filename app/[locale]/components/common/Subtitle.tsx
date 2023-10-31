interface ISubChildrenProps {
  children: React.ReactNode,
  tag: string
}

export const Subtitle = ({ children, tag }: ISubChildrenProps) => {
  return (
    <>
      {tag === "h2" ?
        <h2 className=" text-3xl py-3">{children}</h2>
        :  <h3 className=" text-xl py-3">{children}</h3>
      }
    </>
  )
};