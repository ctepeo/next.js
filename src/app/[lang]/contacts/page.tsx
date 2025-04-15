export default async function Page({params}: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return <h1>Hello Next.js! Lang: {lang}</h1>;
}