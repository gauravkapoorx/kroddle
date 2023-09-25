import React from 'react'
import '../../styles/comingSoon.css';

export default function ComingSoon() {
    return (
        <div className='flex flex-1 text-center items-center'>
            <div className="mobile-container">
                <header>
                    <section className="hero-banner">
                        <div className="logo-wrapper">
                        </div>
                        <div className="hero-image"></div>
                    </section>
                </header>
                <article className="text-info">
                    <h2>We're</h2>
                    <h2>Coming<br />Soon</h2>
                    <p>Bespoke embroidered items. Sign up for updates</p>
                    <section className="email-signup">
                        <form>
                            <input className="email-input" type="email" required placeholder="Email Address" name="email-address" />
                            <input className="email-submit" value="Go" type="submit"/>
                        </form>
                    </section>
                </article>
            </div>
        </div>
    )
}
