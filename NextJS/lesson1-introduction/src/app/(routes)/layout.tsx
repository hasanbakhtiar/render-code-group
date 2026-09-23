import Header from "@/layout/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>

    );
}
