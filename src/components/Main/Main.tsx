import { Header } from "../Header/Header"
import { Pagination } from "../Pagination"
import { MainWrapper } from "./Main.style"

export const Main = () => {
    return (<MainWrapper>
        <Header />
        Content
        <Pagination />
    </MainWrapper>)
}