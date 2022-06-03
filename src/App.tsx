import { Main } from "./components/Main/Main"
import { Sidebar } from "./components/Sider/Sidebar"
import { AppWrapper } from "./Global.style"

export const App = () => {
  return (
    <AppWrapper>
      <Sidebar />
      <Main />
    </AppWrapper>
  )
}