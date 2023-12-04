import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {Image} from '@nextui-org/react';
import React from 'react'

const Avatar = ({type, src, title, width, heigth, className}: any) => {
    return (
      <>
        { (type === 'image') &&
          
            <Image
              className={clsx(className, "rounded-full object-cover")}
              height={heigth}
              width={width}
              src={src}
              alt={title}
            />
          || 
          <FontAwesomeIcon className={clsx(className)} icon={src} />
        
        }
    </>
  )
}

export default Avatar;