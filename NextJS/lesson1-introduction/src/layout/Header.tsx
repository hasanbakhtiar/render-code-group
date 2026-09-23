import Link from "next/link"

const Header = () => {
    return (
        <header>
            <ul>
                <li><Link href="/">Home page</Link></li>
                <li><Link href="/about">About page</Link></li>
                <li><Link href="/products">Product page</Link></li>
            </ul>
        </header>
    )
}

export default Header