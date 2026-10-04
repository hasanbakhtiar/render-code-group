import { getDictionary } from "../dictionaries";

const About = async ({ params }: { params: Promise<{ lang: 'en' | 'az' }> }) => {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return (
        <div>
            {dict.products.cart}

        </div>
    )
}

export default About;