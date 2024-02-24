export const Navbar = () => {
    return (
        <nav className="flex flex-row w-full sticky top-0 justify-end bg-bone1 items-center text-lg" style={{overflow: 'hidden'}}>
            <img src="/logo.svg" alt="logo" className="h-20 mr-auto ml-10" />
            <Element href='#intro' label="Psia fryzjernia"/>
            <Element href='#about' label="O nas"/>
            <Element href='#offer' label="Oferta"/>
            <Element label="Cennik"/>
            <Element label="Przed wizytą"/>
            <Element label="Galeria"/>
            <Element label="Kontakt"/>
        </nav>
    )
}

type ElementProps = {
    label: string
    href?: string
}
const Element = (p: ElementProps) => <a href={p.href} className="pl-10 pr-10 font-semibold">{p.label}</a>