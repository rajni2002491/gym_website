import React from 'react'
import { Check } from 'lucide-react'

const Pricing = () => {
    const packages = [
        {
            name: "Basic membership",
            price: "$60",
            period: "Month",
            features: [
                "Can access some videos",
                "Question and answer session",
                "Video discussion of questions",
                "Departmental consulting and counseling",
                "20 practice questions given",
                "Live assessment"
            ]
        },
        {
            name: "Favorite membership",
            price: "$60",
            period: "Month",
            features: [
                "Can access some videos",
                "Question and answer session",
                "Video discussion of questions",
                "Departmental consulting and counseling",
                "20 practice questions given",
                "Live assessment"
            ],
            featured: true
        },
        {
            name: "Standard membership",
            price: "$60",
            period: "Month",
            features: [
                "Can access some videos",
                "Question and answer session",
                "Video discussion of questions",
                "Departmental consulting and counseling",
                "20 practice questions given",
                "Live assessment"
            ]
        }
    ]

    return (
        <section className="pricing" id="pricing">
            <div className="pricing-container">
                <h2 className="pricing-title">
                    <span className="title-solid">ONLINE PACKAGE</span>
                    <span className="title-outlined"> PACKAGE</span>
                </h2>
                <div className="pricing-cards">
                    {packages.map((pkg, index) => (
                        <div key={index} className={`pricing-card ${pkg.featured ? 'featured' : ''}`}>
                            <h3 className="package-name">{pkg.name}</h3>
                            <div className="package-price">
                                <span className="price">{pkg.price}</span>
                                <span className="period">/{pkg.period}</span>
                            </div>
                            <ul className="package-features">
                                {pkg.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="feature">
                                        <div className="feature-check">
                                            <Check />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-subscribe">Subscribe To Become Member</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
