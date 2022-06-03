import { useState } from "react"
import { DropdownLink, DropdownList, DropdownMenuWrapper } from "./DropdownMenu.style"

interface TProps {
    text: string,
    children: Array<string>
}

export const DropdownMenu = ({ text, children }: TProps) => {
    const [isOpen, toggleOpen] = useState(false)
    const HoverHandler = () => {
        toggleOpen(true)
    }
    const UnHoverHandler = () => {
        toggleOpen(false)
    }
    return (
        <DropdownMenuWrapper to='' onMouseLeave={UnHoverHandler} onMouseOver={HoverHandler}>
            {text}
            <DropdownList isVisible={isOpen}>
                {children.map((link, i) => {
                    if (i > 0) {
                        return (
                            <div><DropdownLink to={children[0].concat("/", link.replace(" ", ""))}>{link}</DropdownLink></div>
                        )
                    }
                }
                )}
            </DropdownList>
        </DropdownMenuWrapper>
    )
}