import React from 'react'
interface FooterSectionsProps {
  children: React.ReactNode;
  title: string;

}
const FooterSections = ({title, children}: FooterSectionsProps ) => {
  return (
    <div>
      <h4>{title}</h4>
    </div>
  )
}

export default FooterSections