import React, { useState } from "react";
import Head from "next/head";
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
	Clock,
	ExternalLink,
} from "lucide-react";
import SEO from "../lib/modules/SEO";

const LandingPage = () => {
	const [expandedFaq, setExpandedFaq] = useState(null);
	const [showPrivacyModal, setShowPrivacyModal] = useState(false);
	const [showLegalModal, setShowLegalModal] = useState(false);
	const [activeSeoTab, setActiveSeoTab] = useState("meta");
	const [activeRepoTab, setActiveRepoTab] = useState("supabase-starter");

	// Get tech stack links for the active repository tab
	const getRepoTechStack = () => {
		const baseTech = [
			{
				name: "Next.js",
				link: "https://nextjs.org",
				logo: techStack.find((t) => t.name === "Next.js")?.logo,
			},
			{
				name: "Tailwind",
				link: "https://tailwindcss.com",
				logo: techStack.find((t) => t.name === "Tailwind")?.logo,
			},
			{
				name: "TanStack",
				link: "https://tanstack.com",
				logo: techStack.find((t) => t.name === "TanStack")?.logo,
			},
		];

		switch (activeRepoTab) {
			case "supabase-starter":
				return [
					...baseTech,
					{
						name: "Supabase",
						link: "https://supabase.com",
						logo: techStack.find((t) => t.name === "Supabase")?.logo,
					},
				];
			case "firebase-stripe":
				return [
					...baseTech,
					{ name: "Firebase", link: "https://firebase.google.com", logo: null },
					{
						name: "Stripe",
						link: "https://stripe.com",
						logo: techStack.find((t) => t.name === "Stripe")?.logo,
					},
				];
			case "firebase-polar":
				return [
					...baseTech,
					{ name: "Firebase", link: "https://firebase.google.com", logo: null },
					{ name: "Polar", link: "https://polar.sh", logo: null },
				];
			case "supabase-polar":
				return [
					...baseTech,
					{
						name: "Supabase",
						link: "https://supabase.com",
						logo: techStack.find((t) => t.name === "Supabase")?.logo,
					},
					{ name: "Polar", link: "https://polar.sh", logo: null },
				];
			default:
				return baseTech;
		}
	};

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

	const starterPricingFeatures = [
		{ text: "Next.js frontend application", icon: Rocket },
		{
			text: "All frontend pages (pricing, blog, features, legal, contact)",
			icon: Globe,
		},
		{ text: "Admin panel with email, user & blog management", icon: Settings },
		{ text: "Complete login and signup flow", icon: Shield },
		{ text: "Supabase integration", icon: Database },
		{ text: "TipTap rich text editor", icon: FileText },
		{ text: "Lucide React icons", icon: Sparkles },
		{ text: "TanStack Query", icon: Code2 },
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

	const testimonials = [
		{
			id: 1,
			name: "Harshit Nagar",
			company: "",
			message:
				"I've used buildsaas starter template amazing work by shrey with Supabase and Stripe",
			socialType: "linkedin",
			socialLink: "https://www.linkedin.com/in/harshit-nagar-352807161/",
		},
		{
			id: 2,
			name: "Ayush Sharma",
			company: "",
			message: "buildsaas is perfect one for 2026 to build SAAS app",
			socialType: "twitter",
			socialLink: "https://x.com/taggosaurus",
		},
		// {
		// 	id: 3,
		// 	name: "Phil",
		// 	company: "TUFF++ Global",
		// 	message:
		// 		"Shrey has been amazing to help us with code repository and build SAAS crm for our business",
		// 	socialType: "website",
		// 	socialLink: "https://tuffplus.global/",
		// },
		{
			id: 4,
			name: "Myriam",
			company: "Anima AI",
			message:
				"I have been using buildsaas, amazing repository and quite helpful",
			socialType: "company",
			socialLink: "https://anima.ai",
		},
	];

	return (
		<>
			<SEO />
			<Head>
				<title>Buildsaas - Build Your SaaS in Minutes</title>
				<meta
					name="description"
					content="Complete SaaS boilerplate with authentication, payments, admin panel, and more. Get started in minutes, not months."
				/>
			</Head>

			<div className="min-h-screen bg-white font-mono">
				{/* Header */}
				<header className="border-b border-zinc-200">
					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<Rocket className="w-5 h-5 text-zinc-900" />
								<h1 className="text-lg font-bold text-zinc-900">Buildsaas</h1>
							</div>
							<div className="flex items-center">
								<a
									href="https://buildsaas-s18e.vercel.app/docs"
									target="_blank"
									rel="noopener noreferrer"
									className="p-1 mr-2 hover:text-black text-zinc-600 hover:bg-zinc-50  text-sm font-medium transition-colors"
								>
									Docs
								</a>
								<motion.a
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									href="https://buy.polar.sh/polar_cl_4DKKA9Ohkz60mo6VtK0VetQLUkkS5lWnjpeRv4Y9rPK"
									target="_blank"
									rel="noopener noreferrer"
									className="px-4 py-1 bg-zinc-900 text-white rounded text-sm font-medium hover:bg-zinc-800 transition-colors"
								>
									Build Your SAAS
								</motion.a>
							</div>
						</div>
					</div>
				</header>

				{/* Banner Section */}
				<section id="banner" className="py-20">
					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
										className="px-6 py-2 bg-green-200 text-black border border-black  text-sm font-medium hover:bg-green-800 hover:text-white transition-colors flex items-center gap-3"
									>
										Get access
										<ArrowRight className="w-3.5 h-3.5" />
									</motion.a>
								</motion.div>
								<motion.div className="flex items-center justify-start gap-3 my-2">
									<motion.a
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										href="https://buildsaas-s18e.vercel.app/"
										target="_blank"
										rel="noopener noreferrer"
										className="px-6 py-2 bg-purple-100 text-zinc-900  text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
									>
										<Play className="w-3.5 h-3.5" />
										Try Demo
									</motion.a>
									{/* Curved SVG Icons with Links - Pointing to Try Demo Button */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 1 }}
										className="mt-1 space-y-2 flex flex-col items-start"
									>
										{/* Admin Panel Link */}
										<div className="relative flex items-center gap-1">
											<svg
												className="w-16 h-8 text-zinc-400"
												viewBox="0 0 80 50"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M 5 45 Q 20 30, 35 25 Q 50 20, 65 15"
													stroke="currentColor"
													strokeWidth="1.5"
													fill="none"
													strokeLinecap="round"
												/>
												<path
													d="M 60 12 L 65 15 L 60 18"
													stroke="currentColor"
													strokeWidth="1.5"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											<a
												href="https://buildsaas-s18e.vercel.app/admin"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm text-zinc-600 hover:text-zinc-900 hover:underline transition-all"
											>
												check admin panel
											</a>
										</div>
										{/* Read Docs Link - Middle */}
										<div className="relative flex items-center gap-1">
											<svg
												className="w-16 h-6 text-zinc-400"
												viewBox="0 0 80 50"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M 5 30 Q 20 25, 35 25 Q 50 25, 65 25"
													stroke="currentColor"
													strokeWidth="1.5"
													fill="none"
													strokeLinecap="round"
												/>
												<path
													d="M 60 22 L 65 25 L 60 28"
													stroke="currentColor"
													strokeWidth="1.5"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											<a
												href="https://buildsaas-s18e.vercel.app/docs"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm text-zinc-600 hover:text-zinc-900 hover:underline transition-all"
											>
												read docs
											</a>
										</div>
										{/* Frontend Application Link */}
										<div className="relative flex items-center gap-1">
											<svg
												className="w-16 h-6 text-zinc-400"
												viewBox="0 0 80 50"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M 5 15 Q 20 30, 35 25 Q 50 20, 65 35"
													stroke="currentColor"
													strokeWidth="1.5"
													fill="none"
													strokeLinecap="round"
												/>
												<path
													d="M 60 32 L 65 35 L 60 38"
													stroke="currentColor"
													strokeWidth="1.5"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											<a
												href="https://buildsaas-s18e.vercel.app/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm text-zinc-600 hover:text-zinc-900 hover:underline transition-all"
											>
												try frontend application
											</a>
										</div>
									</motion.div>
								</motion.div>
							</div>

							{/* Right Column - Banner Image */}
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="relative rounded-2xl overflow-hidden"
							>
								<img
									src="https://b4fcijccdw.ufs.sh/f/mVUSE925dTRYo9pGrkQGL8ds7z9t2vD05fIReEJKO3Cy1jZP"
									alt="SAAS Starter - Build Your SaaS 10x Faster"
									className="w-full h-full object-cover rounded-2xl border border-zinc-200"
								/>
							</motion.div>
						</div>
					</div>
					<br />
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
					<br />
					{/* Time Saved Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="mt-12 mb-12"
					>
						<div className="max-w-4xl mx-auto">
							<p className="text-center w-fit mx-auto p-1 my-1 text-xs bg-zinc-50  text-zinc-500">
								Why choose buildsaas
							</p>
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
										className="text-center p-4 bg-zinc-50  border border-zinc-200"
									>
										<div className="text-2xl font-bold text-zinc-900 mb-1">
											8+ hours
										</div>
										<div className="text-xs text-zinc-600">
											Next.js setup, routing & configuration
										</div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: 1.0 }}
										className="text-center p-4 bg-zinc-50  border border-zinc-200"
									>
										<div className="text-2xl font-bold text-zinc-900 mb-1">
											6+ hours
										</div>
										<div className="text-xs text-zinc-600">
											Authentication (Email/Password & Google OAuth)
										</div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: 1.1 }}
										className="text-center p-4 bg-zinc-50  border border-zinc-200"
									>
										<div className="text-2xl font-bold text-zinc-900 mb-1">
											5+ hours
										</div>
										<div className="text-xs text-zinc-600">
											Resend email API, templates & webhooks
										</div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: 1.2 }}
										className="text-center p-4 bg-zinc-50  border border-zinc-200"
									>
										<div className="text-2xl font-bold text-zinc-900 mb-1">
											15+ hours
										</div>
										<div className="text-xs text-zinc-600">
											Stripe payment integration & webhooks
										</div>
									</motion.div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: 1.3 }}
										className="text-center p-4 bg-zinc-50  border border-zinc-200"
									>
										<div className="text-2xl font-bold text-zinc-900 mb-1">
											12+ hours
										</div>
										<div className="text-xs text-zinc-600">
											Admin panel with tables (Customers, Payments,
											Subscriptions)
										</div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: 1.4 }}
										className="text-center p-4 bg-zinc-50  border border-zinc-200"
									>
										<div className="text-2xl font-bold text-zinc-900 mb-1">
											4+ hours
										</div>
										<div className="text-xs text-zinc-600">
											Blog system with Tiptap editor
										</div>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: 1.5 }}
										className="text-center p-4 bg-zinc-50  border border-zinc-200"
									>
										<div className="text-2xl font-bold text-zinc-900 mb-1">
											10+ hours
										</div>
										<div className="text-xs text-zinc-600">
											SEO setup, documentation & deployment
										</div>
									</motion.div>
								</div>
								<div className="mt-6 text-center">
									<div className="text-lg font-bold text-zinc-900">
										Total: <span className="text-2xl">50+ hours</span> saved
									</div>
									<p className="text-xs text-zinc-600 mt-1">
										Start building your features instead of boilerplate code
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</section>

				{/* Code Repository Section */}
				<section id="code-repository" className="">
					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<div className="flex items-center justify-center gap-2 mb-3">
								<Code2 className="w-6 h-6 text-zinc-900" />
								<h2 className="text-2xl font-bold text-zinc-900">
									What You Get Once Purchased
								</h2>
							</div>
							<p className="text-base text-zinc-600">
								Complete code repository with all features and integrations
							</p>
						</div>

						{/* Repository Tabs */}
						<div className="max-w-5xl mx-auto">
							{/* Tab Buttons */}
							<div className="flex flex-wrap items-center justify-start gap-2 mb-4 border border-zinc-900 p-2 ">
								<button
									onClick={() => setActiveRepoTab("supabase-starter")}
									className={`px-4 py-1.5 text-sm font-medium transition-colors ${
										activeRepoTab === "supabase-starter"
											? "bg-zinc-900 text-white"
											: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
									}`}
								>
									Supabase Starter
								</button>
								<button
									onClick={() => setActiveRepoTab("firebase-stripe")}
									className={`px-4 py-1.5 text-sm font-medium transition-colors ${
										activeRepoTab === "firebase-stripe"
											? "bg-zinc-900 text-white"
											: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
									}`}
								>
									Firebase + Stripe
								</button>
								<button
									onClick={() => setActiveRepoTab("firebase-polar")}
									className={`px-4 py-1.5 text-sm font-medium transition-colors ${
										activeRepoTab === "firebase-polar"
											? "bg-zinc-900 text-white"
											: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
									}`}
								>
									Firebase + Polar
								</button>
								<button
									onClick={() => setActiveRepoTab("supabase-polar")}
									className={`px-4 py-1.5 text-sm font-medium transition-colors ${
										activeRepoTab === "supabase-polar"
											? "bg-zinc-900 text-white"
											: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
									}`}
								>
									Supabase + Next.js + Polar
								</button>
							</div>

							{/* Tech Stack Links */}
							<div className="flex flex-wrap items-center justify-start gap-3 mb-6">
								{getRepoTechStack().map((tech, index) => (
									<a
										key={index}
										href={tech.link}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-900 transition-colors"
									>
										{tech.logo && (
											<img
												src={tech.logo}
												alt={tech.name}
												className="w-4 h-4 object-contain"
											/>
										)}
										<span>{tech.name}</span>
									</a>
								))}
							</div>

							{/* Tab Content */}
							<AnimatePresence mode="wait">
								{activeRepoTab === "supabase-starter" && (
									<motion.div
										key="supabase-starter"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3 }}
										className="bg-white border border-zinc-900 p-6"
									>
										<h3 className="text-lg font-semibold text-zinc-900 mb-4">
											Supabase Starter Code Repository
										</h3>
										<div className="space-y-3">
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Complete Next.js Frontend Application
													</p>
													<p className="text-xs text-zinc-600">
														Full frontend app with all pages: pricing, blog,
														features, legal, and contact page
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Admin Panel
													</p>
													<p className="text-xs text-zinc-600">
														Complete admin dashboard with email management, user
														management, and blog management
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Authentication System
													</p>
													<p className="text-xs text-zinc-600">
														Complete login and signup flow integrated throughout
														the entire application
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Supabase Integration
													</p>
													<p className="text-xs text-zinc-600">
														Supabase for authentication and database with
														pre-configured setup
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														TipTap Rich Text Editor
													</p>
													<p className="text-xs text-zinc-600">
														TipTap editor integrated for blog post creation and
														editing
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Lucide React Icons
													</p>
													<p className="text-xs text-zinc-600">
														Modern icon library with Lucide React icons
														throughout the application
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														TanStack Query
													</p>
													<p className="text-xs text-zinc-600">
														TanStack Query for efficient data fetching and state
														management
													</p>
												</div>
											</div>
											<div className="mt-4 pt-4 border-t border-zinc-200">
												<a
													href="https://buildsaas-supabase-starter.vercel.app/"
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
												>
													<ExternalLink className="w-4 h-4" />
													View Live Demo
												</a>
											</div>
										</div>
									</motion.div>
								)}
								{activeRepoTab === "firebase-stripe" && (
									<motion.div
										key="firebase-stripe"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3 }}
										className="bg-white border border-zinc-900 p-6"
									>
										<h3 className="text-lg font-semibold text-zinc-900 mb-4">
											Firebase + Stripe Code Repository
										</h3>
										<div className="space-y-3">
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Complete Next.js 15 Application
													</p>
													<p className="text-xs text-zinc-600">
														Full source code with TypeScript support and modern
														React patterns
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Firebase Authentication
													</p>
													<p className="text-xs text-zinc-600">
														Email/password and Google OAuth authentication fully
														configured
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Stripe Payment Integration
													</p>
													<p className="text-xs text-zinc-600">
														Complete Stripe setup with subscriptions, one-time
														payments, and webhooks
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Firestore Database
													</p>
													<p className="text-xs text-zinc-600">
														Pre-configured Firestore with user management, blog
														system, and data models
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Admin Dashboard
													</p>
													<p className="text-xs text-zinc-600">
														Complete admin panel for managing users, payments,
														subscriptions, and blogs
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Resend Email Integration
													</p>
													<p className="text-xs text-zinc-600">
														Email templates and API integration for
														transactional emails
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Blog System with Tiptap
													</p>
													<p className="text-xs text-zinc-600">
														Rich text editor for creating and managing blog
														posts
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														SEO Optimization
													</p>
													<p className="text-xs text-zinc-600">
														Complete SEO setup with meta tags, Open Graph, and
														structured data
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Comprehensive Documentation
													</p>
													<p className="text-xs text-zinc-600">
														Step-by-step guides for setup, deployment, and
														customization
													</p>
												</div>
											</div>
										</div>
									</motion.div>
								)}

								{activeRepoTab === "firebase-polar" && (
									<motion.div
										key="firebase-polar"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3 }}
										className="bg-white border border-zinc-900 p-6"
									>
										<h3 className="text-lg font-semibold text-zinc-900 mb-4">
											Firebase + Polar Code Repository
										</h3>
										<div className="space-y-3">
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Complete Next.js 15 Application
													</p>
													<p className="text-xs text-zinc-600">
														Full source code with TypeScript support and modern
														React patterns
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Firebase Authentication
													</p>
													<p className="text-xs text-zinc-600">
														Email/password and Google OAuth authentication fully
														configured
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Polar Payment Integration
													</p>
													<p className="text-xs text-zinc-600">
														Complete Polar setup with subscriptions, one-time
														payments, and webhooks
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Firestore Database
													</p>
													<p className="text-xs text-zinc-600">
														Pre-configured Firestore with user management, blog
														system, and data models
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Admin Dashboard
													</p>
													<p className="text-xs text-zinc-600">
														Complete admin panel for managing users, payments,
														subscriptions, and blogs
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Resend Email Integration
													</p>
													<p className="text-xs text-zinc-600">
														Email templates and API integration for
														transactional emails
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Blog System with Tiptap
													</p>
													<p className="text-xs text-zinc-600">
														Rich text editor for creating and managing blog
														posts
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														SEO Optimization
													</p>
													<p className="text-xs text-zinc-600">
														Complete SEO setup with meta tags, Open Graph, and
														structured data
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Comprehensive Documentation
													</p>
													<p className="text-xs text-zinc-600">
														Step-by-step guides for setup, deployment, and
														customization
													</p>
												</div>
											</div>
										</div>
									</motion.div>
								)}

								{activeRepoTab === "supabase-polar" && (
									<motion.div
										key="supabase-polar"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3 }}
										className="bg-white border border-zinc-900 p-6"
									>
										<h3 className="text-lg font-semibold text-zinc-900 mb-4">
											Supabase + Next.js + Polar Code Repository
										</h3>
										<div className="space-y-3">
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Complete Next.js 15 Application
													</p>
													<p className="text-xs text-zinc-600">
														Full source code with TypeScript support and modern
														React patterns
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Supabase Authentication
													</p>
													<p className="text-xs text-zinc-600">
														Email/password and OAuth authentication fully
														configured with Supabase Auth
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Polar Payment Integration
													</p>
													<p className="text-xs text-zinc-600">
														Complete Polar setup with subscriptions, one-time
														payments, and webhooks
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Supabase PostgreSQL Database
													</p>
													<p className="text-xs text-zinc-600">
														Pre-configured Supabase database with user
														management, blog system, and data models
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Admin Dashboard
													</p>
													<p className="text-xs text-zinc-600">
														Complete admin panel for managing users, payments,
														subscriptions, and blogs
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Resend Email Integration
													</p>
													<p className="text-xs text-zinc-600">
														Email templates and API integration for
														transactional emails
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Blog System with Tiptap
													</p>
													<p className="text-xs text-zinc-600">
														Rich text editor for creating and managing blog
														posts
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														SEO Optimization
													</p>
													<p className="text-xs text-zinc-600">
														Complete SEO setup with meta tags, Open Graph, and
														structured data
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Comprehensive Documentation
													</p>
													<p className="text-xs text-zinc-600">
														Step-by-step guides for setup, deployment, and
														customization
													</p>
												</div>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</section>

				{/* SEO Section */}
				<section id="seo" className="py-20">
					<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<div className="flex items-center justify-center gap-2 mb-3">
								<Globe className="w-6 h-6 text-zinc-900" />
								<h2 className="text-2xl font-bold text-zinc-900">
									SEO Optimized Out of the Box
								</h2>
							</div>
							<p className="text-base text-zinc-600">
								Built-in SEO features to help your SaaS rank better in search
								engines
							</p>
						</div>

						{/* SEO Tabs */}
						<div className="max-w-4xl mx-auto">
							{/* Tab Buttons */}
							<div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-zinc-200">
								<button
									onClick={() => setActiveSeoTab("meta")}
									className={`px-4 py-2 text-sm font-medium rounded-t-xl transition-colors ${
										activeSeoTab === "meta"
											? "bg-zinc-900 text-white border-b-2 border-zinc-900"
											: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
									}`}
								>
									Meta Tags
								</button>
								<button
									onClick={() => setActiveSeoTab("og")}
									className={`px-4 py-2 text-sm font-medium rounded-t-xl transition-colors ${
										activeSeoTab === "og"
											? "bg-zinc-900 text-white border-b-2 border-zinc-900"
											: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
									}`}
								>
									Open Graph
								</button>
								<button
									onClick={() => setActiveSeoTab("twitter")}
									className={`px-4 py-2 text-sm font-medium rounded-t-xl transition-colors ${
										activeSeoTab === "twitter"
											? "bg-zinc-900 text-white border-b-2 border-zinc-900"
											: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
									}`}
								>
									Twitter Cards
								</button>
								<button
									onClick={() => setActiveSeoTab("structured")}
									className={`px-4 py-2 text-sm font-medium rounded-t-xl transition-colors ${
										activeSeoTab === "structured"
											? "bg-zinc-900 text-white border-b-2 border-zinc-900"
											: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
									}`}
								>
									Structured Data
								</button>
							</div>

							{/* Tab Content */}
							<AnimatePresence mode="wait">
								{activeSeoTab === "meta" && (
									<motion.div
										key="meta"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3 }}
										className="bg-white border border-zinc-200 rounded-2xl p-6"
									>
										<h3 className="text-lg font-semibold text-zinc-900 mb-4">
											Meta Tags
										</h3>
										<div className="space-y-3">
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Title & Description
													</p>
													<p className="text-xs text-zinc-600">
														Automatically optimized title and meta description
														for each page
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Keywords & Canonical URLs
													</p>
													<p className="text-xs text-zinc-600">
														Proper keyword management and canonical URLs to
														prevent duplicate content
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Robots Meta Tags
													</p>
													<p className="text-xs text-zinc-600">
														Automatic robots meta tags for proper search engine
														crawling
													</p>
												</div>
											</div>
										</div>
									</motion.div>
								)}

								{activeSeoTab === "og" && (
									<motion.div
										key="og"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3 }}
										className="bg-white border border-zinc-200 rounded-2xl p-6"
									>
										<h3 className="text-lg font-semibold text-zinc-900 mb-4">
											Open Graph Tags
										</h3>
										<div className="space-y-3">
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Social Media Sharing
													</p>
													<p className="text-xs text-zinc-600">
														Beautiful preview cards when sharing on Facebook,
														LinkedIn, and other platforms
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Dynamic OG Images
													</p>
													<p className="text-xs text-zinc-600">
														Customizable Open Graph images for each page
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Type & URL Management
													</p>
													<p className="text-xs text-zinc-600">
														Proper OG type and URL configuration for better
														social engagement
													</p>
												</div>
											</div>
										</div>
									</motion.div>
								)}

								{activeSeoTab === "twitter" && (
									<motion.div
										key="twitter"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3 }}
										className="bg-white border border-zinc-200 rounded-2xl p-6"
									>
										<h3 className="text-lg font-semibold text-zinc-900 mb-4">
											Twitter Cards
										</h3>
										<div className="space-y-3">
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Summary Large Image Cards
													</p>
													<p className="text-xs text-zinc-600">
														Optimized Twitter card format for maximum engagement
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Twitter Image Optimization
													</p>
													<p className="text-xs text-zinc-600">
														Properly sized images for Twitter sharing
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Automatic Card Generation
													</p>
													<p className="text-xs text-zinc-600">
														Twitter cards automatically generated for all pages
													</p>
												</div>
											</div>
										</div>
									</motion.div>
								)}

								{activeSeoTab === "structured" && (
									<motion.div
										key="structured"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3 }}
										className="bg-white border border-zinc-200 rounded-2xl p-6"
									>
										<h3 className="text-lg font-semibold text-zinc-900 mb-4">
											Structured Data
										</h3>
										<div className="space-y-3">
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														JSON-LD Schema
													</p>
													<p className="text-xs text-zinc-600">
														Rich snippets support with structured data markup
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														Centralized SEO Config
													</p>
													<p className="text-xs text-zinc-600">
														Easy-to-manage SEO configuration for all routes
													</p>
												</div>
											</div>
											<div className="flex items-start gap-3">
												<Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<div>
													<p className="text-sm font-medium text-zinc-900">
														SEO Component
													</p>
													<p className="text-xs text-zinc-600">
														Reusable SEO component that automatically applies
														best practices
													</p>
												</div>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section id="features" className="py-20 bg-white">
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
										className="p-4 border border-zinc-200  hover:border-zinc-300 transition-colors"
									>
										<div className="flex items-start gap-3">
											<div className="p-1.5 bg-zinc-100 ">
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
					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="text-2xl font-bold text-zinc-900 mb-3">
								Simple Pricing
							</h2>
							<p className="text-base text-zinc-600">
								One-time payment, lifetime access
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
							{/* Starter Repository Card */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								className="bg-white border-2 border-zinc-200 rounded-2xl p-6"
							>
								<div className="text-center mb-6">
									<h3 className="text-2xl font-bold text-zinc-900 mb-2">
										Starter
									</h3>
									<div className="flex items-baseline justify-center gap-2">
										<span className="text-3xl font-bold text-zinc-900">
											$29
										</span>
										<span className="text-sm text-zinc-600">USD</span>
									</div>
								</div>

								<ul className="space-y-2.5 mb-6">
									{starterPricingFeatures.map((feature, index) => {
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
									href="https://buy.polar.sh/polar_cl_mjqAv3fPiFCKlZbWJVI5hmoX9Pl1UAgOPTFaW1DDMAG"
									target="_blank"
									rel="noopener noreferrer"
									className="block w-full py-2.5 bg-zinc-900 text-white  text-sm font-semibold text-center hover:bg-zinc-800 transition-colors"
								>
									Buy Now
								</motion.a>
							</motion.div>

							{/* SAAS Starter Card */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
								className="bg-white border-2 border-zinc-900 rounded-2xl p-6"
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
									className="block w-full py-2.5 bg-zinc-900 text-white  text-sm font-semibold text-center hover:bg-zinc-800 transition-colors"
								>
									Buy Now
								</motion.a>
							</motion.div>
						</div>

						<p className="text-center text-xs text-zinc-600 mt-4">
							One time payment • Forever yours • All upgrades included
						</p>
					</div>
				</section>

				{/* Testimonials Section */}
				<section id="testimonials" className="py-20">
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="text-2xl font-bold text-zinc-900 mb-3">
								What Our Users Say
							</h2>
							<p className="text-base text-zinc-600">
								Trusted by developers and businesses worldwide
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={testimonial.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
									className="bg-white rotate-2 border  shadow border-zinc-200  p-6 hover:border-zinc-300 hover:shadow-lg transition-all"
								>
									<div className="mb-4">
										<p className="text-sm text-zinc-700 leading-relaxed">
											"{testimonial.message}"
										</p>
									</div>
									<div className="flex items-center justify-between pt-4 border-t border-zinc-100">
										<div>
											<p className="text-sm font-semibold text-zinc-900">
												{testimonial.name}
											</p>
											{testimonial.company && (
												<p className="text-xs text-zinc-600">
													{testimonial.company}
												</p>
											)}
										</div>
										<a
											href={testimonial.socialLink}
											target="_blank"
											rel="noopener noreferrer"
											className="text-zinc-600 hover:text-zinc-900 transition-colors"
										>
											{testimonial.socialType === "linkedin" && (
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
												</svg>
											)}
											{testimonial.socialType === "twitter" && (
												<Twitter className="w-5 h-5" />
											)}
											{testimonial.socialType === "website" && (
												<ExternalLink className="w-5 h-5" />
											)}
											{testimonial.socialType === "company" && (
												<Globe className="w-5 h-5" />
											)}
										</a>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* FAQ Section */}
				<section id="faq" className="py-20 bg-white">
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
									className="border border-zinc-200  overflow-hidden"
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

				{/* About Me Section */}
				<section id="about-creator" className="py-20">
					<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="bg-white rounded-2xl p-8"
						>
							<div className="text-left mb-6">
								<h2 className="text-2xl font-bold text-zinc-900 mb-3 flex gap-2 items-center justify-start">
									<img
										className="w-16 h-16 object-center rounded-full"
										src="./shrey-img.JPG"
									/>
									About the Creator
								</h2>
							</div>
							<div className="space-y-4 -rotate-2 hover:rotate-0 shadow-lg hover:shadow-none shadow-zinc-400 text-sm text-zinc-700 leading-relaxed border border-zinc-200 p-2  transition-all duration-75 ease-in">
								<p>
									Hello, I am Shrey, I am software developer with 6 years of
									experience in companies, startups and now running my own small
									company, I love to write code and build interfaces (because I
									am frontend developer by love 😁),
								</p>
								<div className="pt-4">
									<p>
										I made buildsaas to help businesses, indie-hackers and
										freelancers to build SAAS applications using buildsaas SAAS
										starter. I learn the simple technique of creating system to
										build, manage and scale your next idea or saas application
										including frontend application to backend admin panels along
										with APIs and database integration, while creating that
										system I realised that this might help people like you in
										building your next idea or next business, so give it try do
										check demo
									</p>
									<p className="mt-4 font-medium text-zinc-900">Cheers</p>
									<p className="font-medium text-zinc-900">Shrey</p>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Footer */}
				<footer className="py-12 border-t border-zinc-100">
					<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
										href="https://twitter.com/@treyvijay"
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
								className="bg-white  shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col"
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
								className="bg-white  shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col"
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
