import React, { useState, useMemo } from "react";
import Head from "next/head";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { motion } from "framer-motion";
import {
	Check,
	X,
	Search,
	Grid3x3,
	Mail,
	Shield,
	CreditCard,
	MessageSquare,
	Users,
	FileEdit,
	FileText,
	Receipt,
	Package,
	UsersRound,
	LayoutDashboard,
} from "lucide-react";
import Fuse from "fuse.js";

// Comprehensive AST (Abstract Syntax Tree) representing all features in the starter kit
// Export this AST for use in other parts of the application
export const FEATURES_AST = {
	metadata: {
		name: "SAAS Starter Kit",
		version: "1.0.0",
		description: "Complete SAAS boilerplate with all essential features",
		lastUpdated: new Date().toISOString(),
	},
	categories: [
		{
			id: "technical",
			name: "Technical Features",
			icon: "Code",
			features: [
				{
					id: "nextjs",
					name: "Next.js 15 Framework",
					description: "Modern React framework",
					details: [
						"Next.js 15 with App Router",
						"Server-side rendering",
						"Static site generation",
						"API routes",
						"SEO optimization",
					],
				},
				{
					id: "react-query",
					name: "React Query Integration",
					description: "Data fetching and caching",
					details: [
						"TanStack React Query",
						"Automatic caching",
						"Background refetching",
						"Optimistic updates",
					],
				},
				{
					id: "redux",
					name: "Redux State Management",
					description: "Global state management",
					details: [
						"Redux Toolkit",
						"Subscription state management",
						"Persistent state",
					],
				},
				{
					id: "firebase",
					name: "Firebase Integration",
					description: "Backend services",
					details: [
						"Firebase Firestore",
						"Firebase Authentication",
						"Real-time data sync",
					],
				},
				{
					id: "ui-components",
					name: "UI Components",
					description: "Reusable UI components",
					details: [
						"Tailwind CSS styling",
						"Framer Motion animations",
						"Lucide React icons",
						"Responsive design",
						"Modern UI/UX",
					],
				},
				{
					id: "file-uploads",
					name: "File Upload System",
					description: "File upload capabilities",
					details: [
						"Image uploads",
						"Polar Files API integration",
						"Base64 to Buffer conversion",
						"MIME type detection",
						"File validation",
					],
				},
			],
		},
		{
			id: "content-management",
			name: "Content Management",
			icon: "FileText",
			features: [
				{
					id: "blog-editor",
					name: "Advanced Blog Editor",
					description: "Rich text editor with Tiptap for blog posts",
					details: [
						"Tiptap rich text editor",
						"Markdown support",
						"Image uploads",
						"Banner image management",
						"Slug generation",
						"Author assignment",
						"Content preview",
						"HTML to Markdown conversion",
					],
				},
				{
					id: "blog-scheduling",
					name: "Blog Scheduling",
					description: "Schedule blog posts for future publication",
					details: [
						"Schedule posts for specific dates",
						"Draft, published, and scheduled statuses",
						"Automatic publication",
						"Date-time picker",
					],
				},
				{
					id: "email-editor",
					name: "Email Campaign Editor",
					description: "Rich text editor for email campaigns",
					details: [
						"Tiptap email editor",
						"Email template creation",
						"Subject line management",
						"Content preview",
						"Markdown support",
					],
				},
				{
					id: "email-scheduling",
					name: "Email Scheduling",
					description: "Schedule email campaigns",
					details: [
						"Schedule emails for future sending",
						"Draft, published, and scheduled statuses",
						"Date-time picker",
					],
				},
				{
					id: "content-preview",
					name: "Content Preview",
					description: "Preview content before publishing",
					details: [
						"Live preview mode",
						"Markdown rendering",
						"Responsive preview",
					],
				},
			],
		},
		{
			id: "user-management",
			name: "User Management",
			icon: "Users",
			features: [
				{
					id: "user-tracking",
					name: "User Tracking",
					description: "Track all authenticated users",
					details: [
						"View all users",
						"User profile management",
						"User activity tracking",
						"Search users",
					],
				},
				{
					id: "authentication",
					name: "Authentication System",
					description: "Complete authentication with Firebase",
					details: [
						"Email/password authentication",
						"Google OAuth",
						"Firebase Auth integration",
						"Session management",
						"Cookie-based user tracking",
					],
				},
			],
		},
		{
			id: "customer-management",
			name: "Customer Management",
			icon: "Building2",
			features: [
				{
					id: "customer-tracking",
					name: "Customer Tracking",
					description: "Track customers and subscriptions",
					details: [
						"View all customers",
						"Customer profile management",
						"Subscription status tracking",
						"Payment history",
						"Search customers",
					],
				},
			],
		},
		{
			id: "payment-subscriptions",
			name: "Payment & Subscriptions",
			icon: "CreditCard",
			features: [
				{
					id: "polar-checkout",
					name: "Polar Checkout Integration",
					description: "Complete checkout flow with Polar payment processing",
					details: [
						"Secure checkout API endpoints",
						"Checkout link generation",
						"Payment processing",
						"Customer creation",
						"Subscription management",
					],
				},
				{
					id: "product-management",
					name: "Product Management",
					description: "Full CRUD operations for products",
					details: [
						"Create products with Polar API",
						"Update product details",
						"Delete products",
						"Product media uploads",
						"File upload to Polar Files API",
						"Product metadata management",
					],
				},
				{
					id: "subscription-management",
					name: "Subscription Management",
					description: "Complete subscription lifecycle management",
					details: [
						"Subscription creation",
						"Subscription cancellation",
						"Subscription status tracking",
						"Webhook handling for subscription events",
						"Subscription renewal management",
						"Expiration date tracking",
					],
				},
				{
					id: "payment-tracking",
					name: "Payment Tracking",
					description: "Track all payment transactions",
					details: [
						"Payment history",
						"Payment status tracking",
						"Customer payment records",
						"Revenue analytics",
					],
				},
			],
		},
		{
			id: "invoice-management",
			name: "Invoice Management",
			icon: "Receipt",
			features: [
				{
					id: "invoice-creation",
					name: "Invoice Creation",
					description: "Create professional invoices",
					details: [
						"Client selection (Users, Customers, Subscribers)",
						"Custom email option",
						"Itemized billing",
						"Automatic total calculation",
						"Invoice number generation",
						"From/To sections",
						"Notes and signature fields",
						"Date and due date management",
					],
				},
				{
					id: "invoice-pdf",
					name: "PDF Generation",
					description: "Generate PDF invoices",
					details: [
						"PDF invoice generation",
						"Invoice preview",
						"PDF download",
						"Professional formatting",
					],
				},
				{
					id: "invoice-email",
					name: "Email Invoices",
					description: "Send invoices via email",
					details: ["Send invoice via email", "Email delivery tracking"],
				},
				{
					id: "invoice-management",
					name: "Invoice Management",
					description: "Manage invoice lifecycle",
					details: [
						"View all invoices",
						"Edit invoice details",
						"Delete invoices",
						"Mark as paid/unpaid",
						"Status filtering",
						"Search invoices",
					],
				},
			],
		},
		{
			id: "team-rbac",
			name: "Team & Role-Based Access Control",
			icon: "Shield",
			features: [
				{
					id: "role-system",
					name: "Role-Based Access Control (RBAC)",
					description: "Complete role and permission system",
					details: [
						"Four role levels: Admin, Editor, Author, Viewer",
						"Granular permissions per resource",
						"Permission checking utilities",
						"Role-based UI rendering",
						"Permission inheritance",
					],
				},
				{
					id: "team-management",
					name: "Team Management",
					description: "Manage team members and their roles",
					details: [
						"Add team members",
						"Update team member roles",
						"Remove team members",
						"Email-based team management",
						"Username assignment",
						"Role assignment per member",
					],
				},
				{
					id: "permission-system",
					name: "Permission System",
					description: "Fine-grained permission control",
					details: [
						"View permissions",
						"Create permissions",
						"Edit permissions",
						"Delete permissions",
						"Publish permissions",
						"Send permissions",
						"Resource-specific permissions",
					],
				},
			],
		},
		{
			id: "email-campaigns",
			name: "Email Campaigns",
			icon: "Mail",
			features: [
				{
					id: "email-to-subscribers",
					name: "Send to Subscribers",
					description: "Send emails to all active subscribers",
					details: [
						"Bulk email sending",
						"Subscriber list management",
						"Email delivery tracking",
						"Success/failure statistics",
					],
				},
				{
					id: "email-to-users",
					name: "Send to Authenticated Users",
					description: "Send emails to all authenticated users",
					details: [
						"Bulk email to users",
						"Verified email filtering",
						"Email delivery tracking",
						"Success/failure statistics",
					],
				},
				{
					id: "single-email",
					name: "Single Email Sending",
					description: "Send individual emails",
					details: [
						"Send to specific users",
						"Send to specific customers",
						"Send to custom email addresses",
						"Email validation",
						"Name customization",
					],
				},
				{
					id: "email-templates",
					name: "Email Templates",
					description: "Pre-built email templates",
					details: [
						"Subscription confirmation emails",
						"Subscription cancellation emails",
						"Subscription upgrade emails",
						"HTML email templates",
					],
				},
			],
		},
		{
			id: "task-management",
			name: "Task Management (Kanban Board)",
			icon: "LayoutGrid",
			features: [
				{
					id: "kanban-board",
					name: "Kanban Board",
					description: "Visual task management with drag and drop",
					details: [
						"Drag and drop task management",
						"Three-column board (Backlog, In Progress, Done)",
						"Task card visualization",
						"Real-time status updates",
						"Keyboard navigation support",
					],
				},
				{
					id: "task-types",
					name: "Task Types",
					description: "Categorize tasks by type",
					details: [
						"Task type: Task, Bug, Feature, Improvement",
						"Color-coded task types",
						"Type filtering",
					],
				},
				{
					id: "task-priorities",
					name: "Task Priorities",
					description: "Set task priorities",
					details: [
						"Priority levels: High, Medium, Low",
						"Priority filtering",
						"Visual priority indicators",
					],
				},
				{
					id: "task-assignees",
					name: "Task Assignment",
					description: "Assign tasks to team members",
					details: [
						"Assign tasks to team members",
						"Multiple assignees support",
						"Assignee filtering",
						"Team member integration",
					],
				},
				{
					id: "task-views",
					name: "Multiple View Modes",
					description: "View tasks in different formats",
					details: [
						"Kanban board view",
						"List view",
						"Table view",
						"View switching",
					],
				},
				{
					id: "task-filtering",
					name: "Task Filtering & Search",
					description: "Advanced filtering and search",
					details: [
						"Fuzzy search with Fuse.js",
						"Filter by type",
						"Filter by priority",
						"Filter by status",
						"Filter by assignee",
						"Combined filters",
					],
				},
			],
		},
		{
			id: "waitlist",
			name: "Waitlist Management",
			icon: "UsersRound",
			features: [
				{
					id: "waitlist-management",
					name: "Waitlist Management",
					description: "Manage waitlist entries",
					details: [
						"Add waitlist entries",
						"Remove waitlist entries",
						"View all waitlist members",
						"Search waitlist",
						"Sort by name, email, or date",
					],
				},
				{
					id: "waitlist-messaging",
					name: "Waitlist Messaging",
					description: "Send messages to waitlist members",
					details: ["Send messages to waitlist members", "Email integration"],
				},
			],
		},
		{
			id: "messaging",
			name: "Messaging & Contact Forms",
			icon: "MessageSquare",
			features: [
				{
					id: "message-management",
					name: "Message Management",
					description: "Manage contact form messages",
					details: [
						"View all messages",
						"Filter by status (new/replied)",
						"Filter by read/unread",
						"Search messages",
						"Sort by date",
					],
				},
				{
					id: "message-reply",
					name: "Reply to Messages",
					description: "Reply to contact form messages",
					details: [
						"Reply via email",
						"Include original message",
						"Mark as replied",
						"Mark as read",
					],
				},
			],
		},
		{
			id: "issue-tracking",
			name: "Issue Tracking",
			icon: "AlertCircle",
			features: [
				{
					id: "issue-reporting",
					name: "Issue Reporting",
					description: "Report and track issues",
					details: [
						"Report issues",
						"View all issues",
						"Issue status tracking",
						"Search issues",
					],
				},
			],
		},
		{
			id: "admin-panel",
			name: "Admin Panel",
			icon: "LayoutDashboard",
			features: [
				{
					id: "admin-dashboard",
					name: "Admin Dashboard",
					description: "Comprehensive admin interface",
					details: [
						"Home dashboard with statistics",
						"Quick actions",
						"Analytics overview",
						"Recent activity",
					],
				},
				{
					id: "admin-search",
					name: "Global Search",
					description: "Search across all content",
					details: [
						"Keyboard shortcut (Cmd/Ctrl + K)",
						"Search all content types",
						"Quick navigation",
					],
				},
				{
					id: "admin-navigation",
					name: "Admin Navigation",
					description: "Organized admin interface",
					details: [
						"Sidebar navigation",
						"Tab-based interface",
						"Mobile responsive",
						"Animated transitions",
					],
				},
			],
		},
	],
};

// Flatten features for comparison table
const getAllFeatures = () => {
	const features = [];
	FEATURES_AST.categories.forEach((category) => {
		category.features.forEach((feature) => {
			features.push({
				category: category.name,
				categoryId: category.id,
				...feature,
			});
		});
	});
	return features;
};

const PricingComparisonPage = () => {
	const allFeatures = getAllFeatures();
	const [searchQuery, setSearchQuery] = useState("");
	const [activeFilter, setActiveFilter] = useState("All");

	// Filter mapping
	const filterMap = {
		All: null,
		Email: { categoryId: "email-campaigns" },
		Authentication: {
			categoryId: "user-management",
			featureId: "authentication",
		},
		Payments: { categoryId: "payment-subscriptions" },
		Messaging: { categoryId: "messaging" },
		Teams: { categoryId: "team-rbac" },
		Editor: {
			categoryId: "content-management",
			featureIds: ["blog-editor", "email-editor"],
		},
		Blog: {
			categoryId: "content-management",
			featureIds: ["blog-editor", "blog-scheduling"],
		},
		Invoice: { categoryId: "invoice-management" },
		Products: {
			categoryId: "payment-subscriptions",
			featureId: "product-management",
		},
		Waitlist: { categoryId: "waitlist" },
		Admin: { categoryId: "admin-panel" },
	};

	// Configure Fuse.js for search
	const fuse = useMemo(
		() =>
			new Fuse(allFeatures, {
				keys: [
					{ name: "name", weight: 0.5 },
					{ name: "description", weight: 0.3 },
					{ name: "category", weight: 0.2 },
				],
				threshold: 0.3,
				includeScore: true,
				minMatchCharLength: 2,
			}),
		[allFeatures]
	);

	// Apply search
	const searchedFeatures = useMemo(() => {
		if (!searchQuery.trim()) {
			return allFeatures;
		}
		const results = fuse.search(searchQuery);
		return results.map((result) => result.item);
	}, [searchQuery, fuse, allFeatures]);

	// Apply filter
	const filteredFeatures = useMemo(() => {
		const filter = filterMap[activeFilter];
		if (!filter) {
			return searchedFeatures;
		}

		return searchedFeatures.filter((feature) => {
			// Check category match
			if (filter.categoryId && feature.categoryId !== filter.categoryId) {
				return false;
			}

			// Check feature ID match
			if (filter.featureId && feature.id !== filter.featureId) {
				return false;
			}

			// Check feature IDs array match
			if (filter.featureIds && !filter.featureIds.includes(feature.id)) {
				return false;
			}

			return true;
		});
	}, [searchedFeatures, activeFilter, filterMap]);

	const filterOptions = [
		"All",
		"Email",
		"Authentication",
		"Payments",
		"Messaging",
		"Teams",
		"Editor",
		"Blog",
		"Invoice",
		"Products",
		"Waitlist",
		"Admin",
	];

	// Icon mapping for each filter
	const filterIcons = {
		All: Grid3x3,
		Email: Mail,
		Authentication: Shield,
		Payments: CreditCard,
		Messaging: MessageSquare,
		Teams: Users,
		Editor: FileEdit,
		Blog: FileText,
		Invoice: Receipt,
		Products: Package,
		Waitlist: UsersRound,
		Admin: LayoutDashboard,
	};

	return (
		<>
			<Head>
				<title>Pricing Comparison - SAAS Starter Kit</title>
				<meta
					name="description"
					content="Compare features included in the SAAS Starter Kit. Complete feature list and pricing comparison."
				/>
			</Head>
			<div className="min-h-screen flex flex-col ">
				<Navbar />
				<main className="flex-1 py-6 px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						{/* Header */}
						<div className="text-center mb-4">
							<motion.h1
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-2xl font-bold text-zinc-900 mb-2"
							>
								Complete Feature List
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 }}
								className="text-sm text-zinc-600 max-w-3xl mx-auto"
							>
								Everything you get with the SAAS Starter Kit. Build your SAAS
								10x faster with all these features included.
							</motion.p>
						</div>

						{/* Search and Filters */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.15 }}
							className="mb-4 space-y-4"
						>
							{/* Search Input */}
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
								<input
									type="text"
									placeholder="Search features..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="w-full pl-10 pr-4 py-2.5 border border-zinc-300  focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent text-sm text-zinc-900 bg-white"
								/>
							</div>

							{/* Filter Chips */}
							<div className="flex flex-wrap gap-2">
								{filterOptions.map((filter) => {
									const Icon = filterIcons[filter];
									return (
										<button
											key={filter}
											onClick={() => setActiveFilter(filter)}
											className={`px-4 py-1.5 flex items-center gap-2 text-xs font-medium transition-colors ${
												activeFilter === filter
													? "bg-zinc-900 text-white"
													: "bg-white text-zinc-700 border border-zinc-300 hover:bg-zinc-50"
											}`}
										>
											<Icon className="w-3.5 h-3.5" />
											{filter}
										</button>
									);
								})}
							</div>
						</motion.div>

						{/* Single Unified Table */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="bg-white  shadow-sm border border-zinc-200 overflow-hidden mb-4"
						>
							<div className="overflow-x-auto">
								<table className="w-full">
									<thead className="bg-zinc-50 border-b border-zinc-200">
										<tr>
											<th className="px-3 py-2 text-left text-xs font-semibold text-zinc-900 w-60">
												Feature
											</th>
											<th className="px-3 py-2 text-left text-xs font-semibold text-zinc-900 w-44">
												Category
											</th>
											<th className="px-3 py-2 text-left text-xs font-semibold text-zinc-900 w-53">
												Description
											</th>
											<th className="px-3 py-2 text-center text-xs font-semibold text-zinc-900 w-20">
												Included
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-zinc-200">
										{filteredFeatures.length === 0 ? (
											<tr>
												<td colSpan={4} className="px-3 py-8 text-center">
													<div className="text-sm text-zinc-500">
														No features found matching your search or filter.
													</div>
												</td>
											</tr>
										) : (
											filteredFeatures.map((feature, index) => (
												<tr
													key={feature.id}
													className="hover:bg-zinc-50 transition-colors"
												>
													<td className="px-3 py-2">
														<div className="text-xs font-medium text-zinc-900">
															{feature.name}
														</div>
														{feature.details && feature.details.length > 0 && (
															<div className="mt-1">
																<details className="group">
																	<summary className="text-[10px] text-zinc-500 cursor-pointer hover:text-zinc-700 list-none">
																		<span className="group-open:hidden">
																			{feature.details.length} details
																		</span>
																		<span className="hidden group-open:inline">
																			Hide
																		</span>
																	</summary>
																	<ul className="mt-1 space-y-0.5 pl-3">
																		{feature.details.map((detail, idx) => (
																			<li
																				key={idx}
																				className="text-[10px] text-zinc-600 flex items-start gap-1"
																			>
																				<Check className="w-2.5 h-2.5 text-green-600 mt-0.5 flex-shrink-0" />
																				{detail}
																			</li>
																		))}
																	</ul>
																</details>
															</div>
														)}
													</td>
													<td className="px-3 py-2">
														<div className="text-xs font-medium text-zinc-700">
															{feature.category}
														</div>
													</td>
													<td className="px-3 py-2">
														<div className="text-xs text-zinc-600">
															{feature.description}
														</div>
													</td>
													<td className="px-3 py-2 text-center">
														<div className="flex justify-center">
															<Check className="w-4 h-4 text-green-600" />
														</div>
													</td>
												</tr>
											))
										)}
									</tbody>
								</table>
							</div>
						</motion.div>

						{/* CTA Section */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="text-center"
						>
							<h2 className="text-xl font-bold text-zinc-900 mb-2">
								Ready to Build Your SAAS?
							</h2>
							<p className="text-sm text-zinc-600 mb-4">
								Get started with all these features included. No setup required.
							</p>
							<a
								href="https://buy.polar.sh/polar_cl_4DKKA9Ohkz60mo6VtK0VetQLUkkS5lWnjpeRv4Y9rPK"
								className="inline-block px-6 py-2 bg-zinc-900 text-white  text-sm font-medium hover:bg-zinc-800 transition-colors"
							>
								Buy Now
							</a>
						</motion.div>
					</div>
				</main>

				<Footer />
			</div>
		</>
	);
};

export default PricingComparisonPage;
