import React from 'react'
import Link from 'next/link'

const CTALink = (props) => {
    return (
        <Link href={props.url}>
            <a className='uppercase text-sm pr-1 pb-1 border-b-2 border-current'>{props.text}
                <div className='inline'>
                    <svg style={{ display: 'inline' }} viewBox="-5 -5 20 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg" stroke="#ff00a5" strokeWidth="2" fill="#ff00a5" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                </div>
            </a>
        </Link>
    )
}

export default CTALink