import React from 'react'

interface AppBuilderProps {
  children: React.ReactChild
}

const AppBuilder = ({ children }: AppBuilderProps) => {
  return (
    <>
      {children}
    </>
  )
}

export { AppBuilder }
