import { useEffect, useRef } from "react"
import { Main } from "./components/Main/Main"
import { Sidebar } from "./components/Sider/Sidebar"
import { AppWrapper } from "./Global.style"

export const App = () => {
  const AppWrapperRef = useRef<HTMLDivElement>(null)
  const SidebarRef = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    AppWrapperRef.current!.style.height = SidebarRef.current!.clientHeight.toString().concat('px')
    console.log(SidebarRef.current!.clientHeight.toString().concat('px'))  
  },[])
  return (
    <AppWrapper ref={AppWrapperRef}>
      <Sidebar ref={SidebarRef} />
      <Main />
    </AppWrapper>
  )
}