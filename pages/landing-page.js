import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
	Rocket,
	Check,
	ArrowRight,
	ChevronDown,
	ChevronUp,
	Twitter,
	Mail,
	Zap,
	Shield,
	CreditCard,
	Database,
	Mail as MailIcon,
	Settings,
	Code2,
	Globe,
	FileText,
	Users,
	Lock,
	Sparkles,
	Send,
	BookOpen,
	Monitor,
	RefreshCw,
	X,
	ShieldCheck,
	Scale,
	Play,
	ExternalLink,
	Clock,
} from "lucide-react";
import SEO from "../lib/modules/SEO";

const LandingPage = () => {
	const [expandedFaq, setExpandedFaq] = useState(null);
	const [showPrivacyModal, setShowPrivacyModal] = useState(false);
	const [showLegalModal, setShowLegalModal] = useState(false);

	const techStack = [
		{
			name: "Next.js",
			logo: "https://b4fcijccdw.ufs.sh/f/mVUSE925dTRYmo2uXr5dTRYUQ1ZJNSXlV8uxqtfcEz9rp62L",
			link: "https://nextjs.org",
		},
		{
			name: "Stripe",
			link: "https://stripe.com",
			logo: "https://b4fcijccdw.ufs.sh/f/mVUSE925dTRYnDGvbbaFQlNLrmkEMC8dWyZ6SRh5OUeiAcGg",
		},
		{
			name: "Supabase",
			logo: "https://b4fcijccdw.ufs.sh/f/mVUSE925dTRY3eNktrqCWeogKhF19bTi7I6zQ0q8EafskJrG",
			link: "https://supabase.com",
		},
		{
			name: "Resend",
			logo: "https://b4fcijccdw.ufs.sh/f/mVUSE925dTRYcOv0UqAEYCMdAPzJlq68Keyf0NtwGT9LgOXu",
			link: "https://supabase.com",
		},
		{
			name: "TanStack",
			logo: "https://b4fcijccdw.ufs.sh/f/mVUSE925dTRYiQ5wM8lKavenfPpi3Zb1mAg4d50CY2RWLOsk",
			link: "https://tanstack.com",
		},
		{
			name: "Tailwind",
			logo: "https://b4fcijccdw.ufs.sh/f/mVUSE925dTRYobgAXeQGL8ds7z9t2vD05fIReEJKO3Cy1jZP",
			link: "https://tailwindcss.com",
		},
		{
			name: "Tiptap",
			logo: "https://b4fcijccdw.ufs.sh/f/mVUSE925dTRYCkGejb99lEJVSgFcNYy6WDRowUt2QGLmhdeM",
			link: "https://tiptap.dev",
		},
	];

	const features = [
		{
			icon: Zap,
			title: "Lightning Fast",
			description: "Built with Next.js 15 for optimal performance",
		},
		{
			icon: Shield,
			title: "Secure Authentication",
			description: "Complete auth system with Firebase",
		},
		{
			icon: CreditCard,
			title: "Payment Integration",
			description: "Stripe integration ready to use",
		},
		{
			icon: Database,
			title: "Database Setup",
			description: "Firestore configured and ready",
		},
		{
			icon: MailIcon,
			title: "Email System",
			description: "Resend integration for emails",
		},
		{
			icon: Settings,
			title: "Admin Panel",
			description: "Complete admin dashboard included",
		},
		{
			icon: Code2,
			title: "Clean Code",
			description: "Well-structured and documented",
		},
		{
			icon: Globe,
			title: "SEO Ready",
			description: "SEO optimization built-in",
		},
		{
			icon: FileText,
			title: "Documentation",
			description: "Comprehensive docs included",
		},
		{
			icon: Users,
			title: "User Management",
			description: "Complete user system",
		},
		{
			icon: Lock,
			title: "Security",
			description: "Best practices implemented",
		},
		{
			icon: Sparkles,
			title: "Modern UI",
			description: "Beautiful, responsive design",
		},
	];

	const pricingFeatures = [
		{ text: "Complete Next.js 15 boilerplate", icon: Rocket },
		{ text: "Firebase Authentication setup", icon: Shield },
		{ text: "Stripe payment integration", icon: CreditCard },
		{ text: "Resend email integration", icon: MailIcon },
		{ text: "Admin dashboard with all features", icon: Settings },
		{ text: "Blog system with editor", icon: FileText },
		{ text: "Email newsletter system", icon: Send },
		{ text: "User management system", icon: Users },
		{ text: "SEO optimization", icon: Globe },
		{ text: "Comprehensive documentation", icon: BookOpen },
		{ text: "Clean, maintainable code", icon: Code2 },
		{ text: "Responsive design", icon: Monitor },
		{ text: "All future updates included", icon: RefreshCw },
	];

	const faqs = [
		{
			id: 1,
			question: "What's included in the purchase?",
			answer:
				"You get the complete source code, documentation, and all future updates. Everything you need to build your SaaS application.",
		},
		{
			id: 2,
			question: "Do I need to know coding?",
			answer:
				"Basic knowledge of JavaScript and React is recommended. The code is well-documented and easy to understand.",
		},
		{
			id: 3,
			question: "Can I customize it?",
			answer:
				"Yes! The code is yours to modify, customize, and use however you want. No restrictions. You can change colors, add features, remove components, or completely rebrand it.",
		},
		{
			id: 4,
			question: "What about updates?",
			answer:
				"All future updates and improvements are included in your one-time payment. You'll have access to everything.",
		},
		{
			id: 5,
			question: "Is support included?",
			answer:
				"The code is well-documented. For additional support, you can reach out via email.",
		},
		{
			id: 6,
			question: "Can I use it for commercial projects?",
			answer:
				"Absolutely! Once purchased, you can use it for any commercial or personal project without restrictions.",
		},
		{
			id: 7,
			question: "Where can I find the documentation?",
			answer:
				"Complete documentation is included in the repository and available at the demo site. It covers setup, configuration, customization, API usage, and deployment instructions.",
		},
		{
			id: 8,
			question: "How do I customize the design and branding?",
			answer:
				"You can easily customize colors, fonts, logos, and styling through Tailwind CSS classes. The codebase is well-organized with reusable components, making it simple to modify the UI to match your brand.",
		},
		{
			id: 9,
			question: "Can I add my own features to the starter?",
			answer:
				"Yes! The codebase is structured for easy extension. You can add new pages, components, API routes, and features. The architecture follows Next.js best practices, making it straightforward to build upon.",
		},
		{
			id: 10,
			question: "How long does it take to set up?",
			answer:
				"With the comprehensive documentation, you can have the starter running locally in under 30 minutes. Full deployment with Firebase and Stripe configuration typically takes 1-2 hours depending on your experience level.",
		},
		{
			id: 11,
			question: "Do I need separate accounts for Firebase, Stripe, and Resend?",
			answer:
				"Yes, you'll need to create free accounts with Firebase (for authentication and database), Stripe (for payments), and Resend (for emails). The documentation includes step-by-step setup guides for each service.",
		},
	];

	return (
		<>
			<SEO />
			<Head>
				<title>SAAS Starter - Build Your SaaS 10x Faster</title>
				<meta
					name="description"
					content="Complete SaaS boilerplate with authentication, payments, admin panel, and more. Get started in minutes, not months."
				/>
				{/* Open Graph / Facebook */}
				<meta
					property="og:image"
					content="https://b4fcijccdw.ufs.sh/f/mVUSE925dTRYo9pGrkQGL8ds7z9t2vD05fIReEJKO3Cy1jZP"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:type" content="image/png" />
				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:image"
					content="https://b4fcijccdw.ufs.sh/f/mVUSE925dTRYo9pGrkQGL8ds7z9t2vD05fIReEJKO3Cy1jZP"
				/>
			</Head>

			<div className="min-h-screen bg-white font-mono">
				{/* Header */}
				<header className="border-b border-zinc-200">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<Rocket className="w-5 h-5 text-zinc-900" />
								<h1 className="text-lg font-bold text-zinc-900">
									SAAS Starter
								</h1>
							</div>
							<motion.a
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								href="https://buy.polar.sh/polar_cl_4DKKA9Ohkz60mo6VtK0VetQLUkkS5lWnjpeRv4Y9rPK"
								target="_blank"
								rel="noopener noreferrer"
								className="px-4 py-1.5 bg-zinc-900 text-white rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors"
							>
								Buy Now
							</motion.a>
						</div>
					</div>
				</header>

				{/* Banner Section */}
				<section className="py-20">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
							{/* Left Column - Title and Description */}
							<div>
								<motion.h1
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6 }}
									className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4"
								>
									Build SAAS App
									<br />
									<span className="text-zinc-600">10x Faster</span>
								</motion.h1>
								<motion.p
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
									className="text-base text-zinc-600"
								>
									Complete SaaS boilerplate with everything you need. Get
									started in minutes, build any SAAS application to start
									earning online, content website, SAAS application, aggregator
									platforms, newsletter etc
								</motion.p>
								{/* CTA Buttons */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.8 }}
									className="flex flex-col sm:flex-row items-center justify-start gap-3 mt-6"
								>
									<motion.a
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										href="https://buy.polar.sh/polar_cl_4DKKA9Ohkz60mo6VtK0VetQLUkkS5lWnjpeRv4Y9rPK"
										target="_blank"
										rel="noopener noreferrer"
										className="px-6 py-2 bg-green-200 text-black border border-black rounded-xl text-sm font-medium hover:bg-green-800 hover:text-white transition-colors flex items-center gap-3"
									>
										Buy SAAS Starter Kit
										<ArrowRight className="w-3.5 h-3.5" />
									</motion.a>
								</motion.div>
								<motion.div className="flex flex-col sm:flex-row items-center justify-start gap-3 my-2">
									<motion.a
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										href="https://buildsaas-s18e.vercel.app/"
										target="_blank"
										rel="noopener noreferrer"
										className="px-6 py-2 bg-purple-100 text-zinc-900 rounded-xl text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
									>
										<Play className="w-3.5 h-3.5" />
										Try Demo
									</motion.a>
									<motion.a
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										href="https://buildsaas-s18e.vercel.app/docs"
										target="_blank"
										rel="noopener noreferrer"
										className="px-6 py-2 bg-zinc-100 text-zinc-900 rounded-xl text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
									>
										<FileText className="w-3.5 h-3.5" />
										View Docs
									</motion.a>
								</motion.div>
							</div>

							{/* Right Column - Banner Image Placeholder */}
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="bg-zinc-200 rounded-2xl h-48 md:h-64 flex items-center justify-center"
							>
								<img
									src="https://b4fcijccdw.ufs.sh/f/mVUSE925dTRYo9pGrkQGL8ds7z9t2vD05fIReEJKO3Cy1jZP"
									className=" border border-zinc-200 rounded-xl"
								/>
							</motion.div>
						</div>
					</div>
					{/* Tech Stack */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="mt-12"
					>
						<h2 className="text-xl font-semibold text-zinc-900 text-center mb-6">
							Powered by Modern Tech Stack
						</h2>
						<div className="flex flex-wrap items-center justify-center gap-6">
							{techStack.map((tech, index) => (
								<motion.a
									key={tech.name}
									href={tech.link}
									target="_blank"
									rel="noopener noreferrer"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
									whileHover={{ scale: 1.1 }}
									className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
								>
									{tech.logo.startsWith("http") ? (
										<img
											src={tech.logo}
											alt={tech.name}
											className="w-12 h-12 object-contain"
										/>
									) : (
										<div className="text-3xl">{tech.logo}</div>
									)}
									<span className="text-xs font-medium text-zinc-700">
										{tech.name}
									</span>
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Time Saved Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="mt-12 mb-12"
					>
						<div className="max-w-4xl mx-auto">
							<div className="bg-white border-2 border-zinc-900 rounded-2xl p-6 shadow-lg">
								<div className="text-center mb-6">
									<div className="flex items-center justify-center gap-2 mb-2">
										<Clock className="w-5 h-5 text-zinc-900" />
										<h3 className="text-xl font-bold text-zinc-900">
											Time Saved with SAAS Starter
										</h3>
									</div>
									<p className="text-sm text-zinc-600">
										Hours of development time you save by using our boilerplate
									</p>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: 0.9 }}
										className="text-center p-4 bg-zinc-50 rounded-xl border border-zinc-200"
									>
										<div className="text-2xl font-bold text-zinc-900 mb-1">
											4+ hours
										</div>
										<div className="text-xs text-zinc-600">
											Next.js setup & configuration
										</div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: 1.0 }}
										className="text-center p-4 bg-zinc-50 rounded-xl border border-zinc-200"
									>
										<div className="text-2xl font-bold text-zinc-900 mb-1">
											2+ hours
										</div>
										<div className="text-xs text-zinc-600">
											Authentication (Email/Password & Google)
										</div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: 1.1 }}
										className="text-center p-4 bg-zinc-50 rounded-xl border border-zinc-200"
									>
										<div className="text-2xl font-bold text-zinc-900 mb-1">
											3+ hours
										</div>
										<div className="text-xs text-zinc-600">
											Resend email API & HTML templates
										</div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: 1.2 }}
										className="text-center p-4 bg-zinc-50 rounded-xl border border-zinc-200"
									>
										<div className="text-2xl font-bold text-zinc-900 mb-1">
											8+ hours
										</div>
										<div className="text-xs text-zinc-600">
											Admin panel (Blogs, Emails, Payments, Subscriptions,
											Customers)
										</div>
									</motion.div>
								</div>
								<div className="mt-6 text-center">
									<div className="text-lg font-bold text-zinc-900">
										Total: <span className="text-2xl">17+ hours</span> saved
									</div>
									<p className="text-xs text-zinc-600 mt-1">
										Start building your features instead of boilerplate code
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</section>

				{/* Features Section */}
				<section className="py-20 bg-white">
					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="text-2xl font-bold text-zinc-900 mb-3">
								Everything You Need
							</h2>
							<p className="text-base text-zinc-600">
								Complete SaaS boilerplate with all essential features
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{features.map((feature, index) => {
								const IconComponent = feature.icon;
								return (
									<motion.div
										key={feature.title}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.4, delay: index * 0.1 }}
										className="p-4 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors"
									>
										<div className="flex items-start gap-3">
											<div className="p-1.5 bg-zinc-100 rounded-xl">
												<IconComponent className="w-5 h-5 text-zinc-900" />
											</div>
											<div>
												<h3 className="text-sm font-semibold text-zinc-900 mb-1">
													{feature.title}
												</h3>
												<p className="text-zinc-600 text-xs">
													{feature.description}
												</p>
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Pricing Section */}
				<section id="pricing" className="py-20">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="text-2xl font-bold text-zinc-900 mb-3">
								Simple Pricing
							</h2>
							<p className="text-base text-zinc-600">
								One-time payment, lifetime access
							</p>
						</div>

						<div className="max-w-2xl mx-auto">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								className="bg-white border-2 border-zinc-900 rounded-2xl p-6 shadow-xl shadow-zinc-400 hover:shadow-zinc-300"
							>
								<div className="text-center mb-6">
									<h3 className="text-2xl font-bold text-zinc-900 mb-2">
										SAAS Starter
									</h3>
									<div className="flex items-baseline justify-center gap-2">
										<span className="text-3xl font-bold text-zinc-900">
											$129
										</span>
										<span className="text-sm text-zinc-600">USD</span>
									</div>
								</div>

								<ul className="space-y-2.5 mb-6">
									{pricingFeatures.map((feature, index) => {
										const IconComponent = feature.icon;
										return (
											<motion.li
												key={index}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ duration: 0.4, delay: index * 0.05 }}
												className="flex items-start gap-2"
											>
												<IconComponent className="w-4 h-4 text-zinc-900 flex-shrink-0 mt-0.5" />
												<span className="text-xs text-zinc-700">
													{feature.text}
												</span>
											</motion.li>
										);
									})}
								</ul>

								<motion.a
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									href="https://buy.polar.sh/polar_cl_4DKKA9Ohkz60mo6VtK0VetQLUkkS5lWnjpeRv4Y9rPK"
									target="_blank"
									rel="noopener noreferrer"
									className="block w-full py-2.5 bg-zinc-900 text-white rounded-xl text-sm font-semibold text-center hover:bg-zinc-800 transition-colors"
								>
									Buy Now
								</motion.a>
							</motion.div>

							<p className="text-center text-xs text-zinc-600 mt-4">
								One time payment • Forever yours • All upgrades included
							</p>
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="py-20 bg-white">
					<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="text-2xl font-bold text-zinc-900 mb-4">
								Frequently Asked Questions
							</h2>
						</div>

						<div className="space-y-4">
							{faqs.map((faq) => (
								<motion.div
									key={faq.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4 }}
									className="border border-zinc-200 rounded-xl overflow-hidden"
								>
									<button
										onClick={() =>
											setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
										}
										className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors"
									>
										<span className="text-sm font-semibold text-zinc-900">
											{faq.question}
										</span>
										{expandedFaq === faq.id ? (
											<ChevronUp className="w-4 h-4 text-zinc-600" />
										) : (
											<ChevronDown className="w-4 h-4 text-zinc-600" />
										)}
									</button>
									{expandedFaq === faq.id && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											className="px-4 py-3 bg-zinc-50"
										>
											<p className="text-xs text-zinc-700">{faq.answer}</p>
										</motion.div>
									)}
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="py-12 border-t border-zinc-100">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-8">
							<div className="flex items-center justify-center gap-2 mb-3">
								<Rocket className="w-5 h-5" />
								<h3 className="text-lg font-bold">SAAS Starter</h3>
							</div>
							<p className="text-sm text-zinc-900 max-w-2xl mx-auto mb-5">
								Complete SaaS boilerplate to build your application faster. Get
								started in minutes with authentication, payments, admin panel,
								and more.
							</p>
							<div className="flex flex-col items-center gap-3">
								<div className="flex items-center justify-center gap-5">
									<a
										href="https://twitter.com/yourusername"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1.5 text-xs text-zinc-800 hover:text-black hover:bg-zinc-50 p-1 transition-colors"
									>
										<Twitter className="w-4 h-4" />
										<span>Twitter</span>
									</a>
									<a
										href="mailto:shreyvijayvargiya26@gmail.com"
										className="flex items-center gap-1.5 text-xs text-zinc-800 hover:text-black hover:bg-zinc-50 p-1 transition-colors"
									>
										<Mail className="w-4 h-4" />
										<span>Email</span>
									</a>
								</div>
								<div className="flex items-center justify-center gap-4">
									<button
										onClick={() => setShowPrivacyModal(true)}
										className="flex items-center gap-1.5 text-xs text-zinc-800 hover:text-black hover:bg-zinc-50 p-1 transition-colors"
									>
										<ShieldCheck className="w-4 h-4" />
										<span>Privacy</span>
									</button>
									<button
										onClick={() => setShowLegalModal(true)}
										className="flex items-center gap-1.5 text-xs text-zinc-800 hover:text-black hover:bg-zinc-50 p-1 transition-colors"
									>
										<Scale className="w-4 h-4" />
										<span>Legal</span>
									</button>
								</div>
							</div>
						</div>
						<div className="pt-6 text-center text-xs text-zinc-500">
							<p>
								© {new Date().getFullYear()} SAAS Starter. All rights reserved.
							</p>
						</div>
					</div>
				</footer>

				{/* Privacy Modal */}
				<AnimatePresence>
					{showPrivacyModal && (
						<div
							className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
							onClick={() => setShowPrivacyModal(false)}
						>
							<motion.div
								initial={{ opacity: 0, scale: 0.95, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.95, y: 20 }}
								onClick={(e) => e.stopPropagation()}
								className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col"
							>
								<div className="p-6 border-b border-zinc-200 flex items-center justify-between">
									<div className="flex items-center gap-2">
										<ShieldCheck className="w-5 h-5 text-zinc-900" />
										<h3 className="text-lg font-bold text-zinc-900">
											Privacy Policy
										</h3>
									</div>
									<button
										onClick={() => setShowPrivacyModal(false)}
										className="p-1 hover:bg-zinc-100 rounded transition-colors"
									>
										<X className="w-5 h-5 text-zinc-600" />
									</button>
								</div>
								<div className="flex-1 overflow-y-auto p-6">
									<div className="space-y-4 text-sm text-zinc-700">
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												1. Information We Collect
											</h4>
											<p>
												SAAS Starter (buildsaas) collects minimal information
												necessary to provide our services. This includes email
												addresses for authentication and subscription
												management, payment information processed securely
												through Stripe, and usage data to improve our services.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												2. How We Use Your Information
											</h4>
											<p>
												We use collected information to provide, maintain, and
												improve our services, process payments, send important
												notifications, and respond to your inquiries. We do not
												sell or share your personal information with third
												parties for marketing purposes.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												3. Data Security
											</h4>
											<p>
												We implement industry-standard security measures to
												protect your data. All data is encrypted in transit and
												at rest. Payment information is processed securely
												through Stripe and is never stored on our servers.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												4. Your Rights
											</h4>
											<p>
												You have the right to access, update, or delete your
												personal information at any time. You can also opt-out
												of non-essential communications. Contact us at
												shreyvijayvargiya26@gmail.com to exercise these rights.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												5. Cookies and Tracking
											</h4>
											<p>
												We use essential cookies for authentication and session
												management. We may also use analytics cookies to
												understand how our service is used. You can control
												cookie preferences through your browser settings.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												6. Third-Party Services
											</h4>
											<p>
												Our service integrates with Firebase for authentication
												and data storage, Stripe for payment processing, and
												Resend for email delivery. These services have their own
												privacy policies governing data handling.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												7. Changes to This Policy
											</h4>
											<p>
												We may update this Privacy Policy from time to time. We
												will notify you of any material changes by posting the
												new policy on this page and updating the "Last Updated"
												date.
											</p>
										</div>
										<div className="pt-4 border-t border-zinc-200">
											<p className="text-xs text-zinc-500">
												Last Updated: {new Date().toLocaleDateString()}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					)}
				</AnimatePresence>

				{/* Legal Modal */}
				<AnimatePresence>
					{showLegalModal && (
						<div
							className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
							onClick={() => setShowLegalModal(false)}
						>
							<motion.div
								initial={{ opacity: 0, scale: 0.95, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.95, y: 20 }}
								onClick={(e) => e.stopPropagation()}
								className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col"
							>
								<div className="p-6 border-b border-zinc-200 flex items-center justify-between">
									<div className="flex items-center gap-2">
										<Scale className="w-5 h-5 text-zinc-900" />
										<h3 className="text-lg font-bold text-zinc-900">
											Terms of Service & Legal
										</h3>
									</div>
									<button
										onClick={() => setShowLegalModal(false)}
										className="p-1 hover:bg-zinc-100 rounded transition-colors"
									>
										<X className="w-5 h-5 text-zinc-600" />
									</button>
								</div>
								<div className="flex-1 overflow-y-auto p-6">
									<div className="space-y-4 text-sm text-zinc-700">
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												1. Acceptance of Terms
											</h4>
											<p>
												By purchasing and using SAAS Starter (buildsaas), you
												agree to be bound by these Terms of Service. If you do
												not agree to these terms, please do not use our service.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												2. License and Usage Rights
											</h4>
											<p>
												Upon purchase, you receive a one-time license to use,
												modify, and customize the SAAS Starter codebase for your
												commercial or personal projects. You may not
												redistribute, resell, or share the source code with
												third parties.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												3. Payment and Refunds
											</h4>
											<p>
												All payments are processed securely through Stripe. Due
												to the digital nature of our product, refunds are
												provided at our discretion within 7 days of purchase if
												you are unsatisfied with the product.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												4. Intellectual Property
											</h4>
											<p>
												The SAAS Starter codebase, documentation, and all
												related materials are the intellectual property of the
												seller. You receive a license to use the code but do not
												acquire ownership rights.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												5. Modifications and Updates
											</h4>
											<p>
												You are free to modify the codebase to suit your needs.
												All future updates to the original codebase are included
												in your purchase, but modifications you make are your
												responsibility to maintain.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												6. Support and Warranty
											</h4>
											<p>
												The product is provided "as is" without warranties of
												any kind. While we provide comprehensive documentation,
												direct support is not guaranteed. The codebase is
												well-documented and maintained.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												7. Limitation of Liability
											</h4>
											<p>
												SAAS Starter and its creators shall not be liable for
												any indirect, incidental, special, or consequential
												damages arising from the use or inability to use the
												product.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												8. Third-Party Services
											</h4>
											<p>
												SAAS Starter integrates with third-party services
												(Firebase, Stripe, Resend). You are responsible for
												complying with their respective terms of service and
												privacy policies.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												9. Termination
											</h4>
											<p>
												We reserve the right to terminate or suspend access to
												updates if you violate these terms. Your license to use
												the codebase remains valid.
											</p>
										</div>
										<div>
											<h4 className="font-semibold text-zinc-900 mb-2">
												10. Contact Information
											</h4>
											<p>
												For questions about these terms, please contact us at
												shreyvijayvargiya26@gmail.com.
											</p>
										</div>
										<div className="pt-4 border-t border-zinc-200">
											<p className="text-xs text-zinc-500">
												Last Updated: {new Date().toLocaleDateString()}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default LandingPage;
