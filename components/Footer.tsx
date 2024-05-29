import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section className='mb-24'>
            <div className='padding-container max-container flex w-full flex-col gap-14'>

                <div className='flex flex-col items-start justify-between gap-[10%] border-b-2 pb-10 md:flex-row'>
                    <Link href="/" className="mb-10">
                        <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
                    </Link>

                    <div className='flex flex-wrap justify-between gap-20'>
                        <div className='flex flex-wrap gap-20 sm:justify-between'>
                            {FOOTER_LINKS.map((link) => (
                                <div className='flex flex-col gap-6'>
                                    <h1 className='bold-18'>
                                        {link.title}
                                    </h1>
                                    <div className='flex flex-col gap-4'>
                                        {link.links.map((item, index) => (
                                            <p className='regular-16 text-gray-20'>{item}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='flex flex-col flex-wrap gap-6'>
                            <h1 className='bold-18'>
                                {FOOTER_CONTACT_INFO.title}
                            </h1>
                            <div className='flex flex-col gap-4'>
                                {FOOTER_CONTACT_INFO.links.map((link) => (
                                    <p className='regular-16 text-gray-20'>
                                        {link.label}: <span className='text-blue-70'>{link.value}</span>
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className='flex flex-col flex-wrap gap-6'>
                            <h1 className='bold-18'>
                                {SOCIALS.title}
                            </h1>
                            <ul className="regular-14 flex gap-4 text-gray-30">
                                {SOCIALS.links.map((link) => (
                                    <Link href="/" key={link}>
                                        <Image src={link} alt="logo" width={24} height={24} />
                                    </Link>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <p className="regular-14 w-full text-center text-gray-30 mt-20">2023 Hilink | All rights reserved</p>

        </section>
    )
}

export default Footer
