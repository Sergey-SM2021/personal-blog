import { useEffect, useRef } from "react"
import { Main } from "./components/Main/Main"
import { Sider } from "./components/Sider/Sider"
import { AppWrapper } from "./Global.style"

export const App = () => {
  const AppWrapperRef = useRef<HTMLDivElement>(null)
  const SiderRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    AppWrapperRef.current!.style.height = SiderRef.current!.clientHeight.toString().concat('px')
  }, [])
  return (
    <AppWrapper ref={AppWrapperRef}>
      <Main />
      <Sider ref={SiderRef} />
    </AppWrapper>
  )
}