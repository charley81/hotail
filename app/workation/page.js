/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="flex bg-gray-100">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          <div className="xl:max-w-lg xl:ml-auto">
            <Image src="images/logo.svg" alt="logo" height={200} width={200} />
            <Image
              src="/images/beach-work.jpg"
              alt="woman working on beach in chair with laptop"
              height={500}
              width={500}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8">
              You can work from anywhere.
              <br />
              <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <Link
                href="#"
                className="inline-block bg-indigo-500 hover:bg-indigo-400 md:hover:bg-green-400 active:bg-indigo-600 text-white px-5 py-3 rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm sm:text-base"
              >
                Book your escape
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <Image
            src="/images/beach-work.jpg"
            alt="woman working on beach in chair with laptop"
            height={500}
            width={500}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
            className="absolute inset-0 object-cover object-center h-full w-full"
          />
        </div>
      </div>
    </main>
  )
}
