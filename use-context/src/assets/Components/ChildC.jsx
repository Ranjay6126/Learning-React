//
import { useContext, useState } from 'react';
import { UserContext } from '../../App';

const ChildC = () => {

const user = useContext(UserContext) ;

  return (
    <div>
     Data Name :{user.name}
    </div>
  )
}

export default ChildC
