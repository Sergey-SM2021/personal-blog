import { Ava, Bg, Desc, Footer, Job, MyWork, Name, PersonalData, SendMe, SidebarWrapper, SocialNetwork, SocialNetworks } from "./Sider.style"
import bg from '../../assets/sider/bg.png'
import avatar from '../../assets/sider/ava.jpg'
import SocialNetworkIcon0 from '../../assets/sider/instagram (1) 1.svg'
import SocialNetworkIcon1 from '../../assets/sider/pinterest 1.svg'
import SocialNetworkIcon2 from '../../assets/sider/vk 1.svg'
import { forwardRef } from "react"

export const Sidebar = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (<SidebarWrapper ref={ref}>
        <Bg src={bg} alt="фон" />
        <PersonalData>
            <Ava src={avatar} />
            <Name >Сергей Кузнецов</Name>
            <Job>Блог фронтенд разработчика</Job>
            <SocialNetworks>
                <SocialNetwork src={SocialNetworkIcon0} />
                <SocialNetwork src={SocialNetworkIcon1} />
                <SocialNetwork src={SocialNetworkIcon2} />
            </SocialNetworks>
            <Desc>
                Front-end разработчик. Практик верстки сайтов.
                Созданием сайтов занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.
            </Desc>
            <Footer>
                <MyWork >Мои работы</MyWork>
                <SendMe dangerous>Написать мне</SendMe>
            </Footer>
        </PersonalData>
    </SidebarWrapper>)
})