
import React from 'react';
import Navbar from '../components/LandingPage/Navbar'; // Import Navbar component
import HeroSection from '../components/LandingPage/HeroSection';
import FeaturesSection from '../components/LandingPage/FeaturesSection';
import HowItWorksSection from '../components/LandingPage/HowItWorksSection';
import BenefitsSection from '../components/LandingPage/BenefitsSection';
import TestimonialsSection from '../components/LandingPage/TestimonialsSection';
import CallToActionSection from '../components/LandingPage/CallToActionSection';
import Footer from '../components/LandingPage/Footer';

const LandingPage = () => {
	return (
		<div>
			{/* Include Navbar component */}
			<Navbar />
			<HeroSection />
			<FeaturesSection />
			<HowItWorksSection/>
			<BenefitsSection />
			<TestimonialsSection />
			<CallToActionSection />
			<Footer />
		
		</div>
	);
};

export default LandingPage;
