import React from "react";
import { Mail, Rocket, Scale, ShieldCheck, Twitter } from "lucide-react";

const Footer = () => {
	return (
		<>
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
							started in minutes with authentication, payments, admin panel, and
							more.
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
		</>
	);
};

export default Footer;
