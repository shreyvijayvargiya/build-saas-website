import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const Navbar = () => {
	const router = useRouter();
	return (
		<>
			<header className="border-b border-zinc-200">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center justify-between">
						<div
							className="flex items-center gap-2 cursor-pointer"
							onClick={() => router.push("/")}
						>
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
		</>
	);
};

export default Navbar;
