import Image from 'next/image';
import React from 'react'

interface Props {
  name?: string;
  mail?: string;
  img?: string;
  role?: string;
}
export const Avatar = ({ img, mail, name, role }: Props) => {
  return (
    <div className="mt-8 text-center flex flex-col items-center gap-2 justify-center">
      <Image src={img ?? ''} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" width={30} height={30} />
      {name && <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{name}</h5>}
      {mail && <span className="hidden mt-4 font-semibold text-gray-600 lg:block">{mail}</span>}
      {role && <span className="hidden text-gray-400 lg:block">{role}</span>}
    </div>

  )
}
