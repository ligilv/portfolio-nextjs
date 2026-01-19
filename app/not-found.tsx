import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-white">
            <h1 className="text-4xl font-bold color-white">404 - Page Not Found</h1>
            <p className="text-lg color-white">Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className="text-blue-500">Return home</Link>
        </div>
    );
}