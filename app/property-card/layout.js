export const metadata = {
  title: 'Property Card',
  description: 'A property card styled with tailwind css'
}

export default function PropertyCardLayout({ children }) {
  return <section className="antialiased text-grey-900">{children}</section>
}
