import React, { useState } from 'react'
import ScrollContext from './ScrollContext'

export default function ScrollContextProvider(props){

  const [preHeaderRef, setPreHeaderRef] = useState(undefined);

  return(
    <ScrollContext.Provider value={{data: preHeaderRef, updateFunction : setPreHeaderRef}}>
      {props.children}
    </ScrollContext.Provider>
  )
}