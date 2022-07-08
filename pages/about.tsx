
import Link from 'next/link';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';


export default function AboutPage() {
    return (
        <>
            <h1 className="title">About Page</h1>
            <h4>
                Ir a <Link href="/">Home</Link>
            </h4>

            <p className="description">
                Get started by editing{' '}
                <code className="code-dark">pages/about.jsx</code>
            </p>
        </>
    )
}


AboutPage.getLayout = function getLayout(page:JSX.Element[]){
    return(
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}