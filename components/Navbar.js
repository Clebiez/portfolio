import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [localDropdownIsExpanded, setLocaleDropdownIsExpanded] =
        useState(false)
    const router = useRouter()
    const { t, i18n } = useTranslation()
    const menuItems = [
        {
            href: '/',
            name: t('nav.home'),
        },
        {
            href: '/#mywork',
            name: t('nav.my_work'),
        },
    ]

    const handleClickOnMenuBar = () => {
        setIsExpanded(!isExpanded)
        setLocaleDropdownIsExpanded(false)
    }

    const handleClickOnLocaleDropdown = () => {
        setLocaleDropdownIsExpanded(!localDropdownIsExpanded)
        setIsExpanded(false)
    }

    const renderLanguageSelector = () => (
        <div className="w-14 sm:block md:relative text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                    id="menu-button"
                    aria-expanded={localDropdownIsExpanded}
                    aria-haspopup="true"
                    onClick={handleClickOnLocaleDropdown}
                >
                    {router.locale.toUpperCase()}
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            {localDropdownIsExpanded && (
                <div
                    className="origin-top-right absolute w-full right-0 mt-2 md:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        <Link href={router.asPath} locale="en" passHref>
                            <a
                                className={`${
                                    router.locale === 'en'
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-900 hover:bg-gray-100'
                                } block p-3 text-sm transition-all`}
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-en"
                            >
                                EN
                            </a>
                        </Link>
                        <Link href={router.asPath} locale="fr" passHref>
                            <a
                                className={`${
                                    router.locale === 'fr'
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-900 hover:bg-gray-100'
                                } block p-3 text-sm transition-all`}
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-fr"
                            >
                                FR
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isExpanded}
                            onClick={handleClickOnMenuBar}
                        >
                            <span className="sr-only">
                                {t('nav.open_menu')}
                            </span>

                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>

                            <svg
                                className="hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-between sm:items-stretch">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {menuItems.map((item) => {
                                    const isActive =
                                        router?.asPath === item.href
                                    return (
                                        <Link
                                            href={item.href}
                                            passHref
                                            key={`${item.href}-desktop`}
                                        >
                                            <a
                                                className={`${
                                                    isActive
                                                        ? 'bg-gray-900 text-white'
                                                        : 'text-gray-900'
                                                } px-3 py-2 rounded-md text-sm font-medium`}
                                            >
                                                {item.name}
                                            </a>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="sm:block">{renderLanguageSelector()}</div>
                </div>
            </div>
            {isExpanded && (
                <div
                    className="sm:hidden"
                    id="mobile-menu"
                    onClick={handleClickOnMenuBar}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {menuItems.map((item) => {
                            const isActive = router?.asPath === item.href

                            return (
                                <Link
                                    href={item.href}
                                    passHref
                                    key={`${item.href}-desktop`}
                                >
                                    <a
                                        className={`${
                                            isActive
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-900'
                                        } block px-3 py-2 rounded-md text-base font-medium`}
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
