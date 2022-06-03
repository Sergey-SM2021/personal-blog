import { DropdownMenu } from "./DropdownMenu"
import {
    HeaderAbout, HeaderAdvertisement,
    HeaderMain,
    HeaderProfile, HeaderSearch, HeaderWrapper
} from "./Header.style"

export const Header = () => {
    return (<HeaderWrapper>
        <HeaderMain to="/main">Главная</HeaderMain>
        <DropdownMenu text="Статьи" children={["articles", "Создание сайтов", "Интернет-маркетинг", "Продвижение видео"]} />
        <HeaderAbout to="/about">Обо мне</HeaderAbout>
        <HeaderAdvertisement to="/advertisement">Реклама</HeaderAdvertisement>
        <HeaderProfile to="/profile">Профиль</HeaderProfile>
        <HeaderSearch type={"search"} />
    </HeaderWrapper>)
}