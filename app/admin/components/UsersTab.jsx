import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { getAllEmails } from "../../../lib/api/emails";
import TableSkeleton from "../../../lib/ui/TableSkeleton";
import { Search, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

const loadUsers = async () => {
	const usersRef = collection(db, "users");
	const q = query(usersRef, orderBy("createdAt", "desc"));
	const querySnapshot = await getDocs(q);
	const usersData = [];

	querySnapshot.forEach((doc) => {
		usersData.push({
			id: doc.id,
			...doc.data(),
		});
	});

	return usersData;
};

const UsersTab = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [sortField, setSortField] = useState(null); // 'name', 'email', 'provider', 'createdAt', 'lastSignIn'
	const [sortDirection, setSortDirection] = useState("asc"); // 'asc' or 'desc'

	// Fetch users with React Query
	const {
		data: users = [],
		isLoading,
		error,
	} = useQuery({
		queryKey: ["users"],
		queryFn: loadUsers,
	});

	const filteredUsers = users.filter((user) => {
		const searchLower = searchQuery.toLowerCase();
		return (
			user.email?.toLowerCase().includes(searchLower) ||
			user.name?.toLowerCase().includes(searchLower) ||
			user.displayName?.toLowerCase().includes(searchLower) ||
			user.uid?.toLowerCase().includes(searchLower)
		);
	});

	// Sort users
	const sortedUsers = [...filteredUsers].sort((a, b) => {
		if (!sortField) return 0;

		// Handle date comparison separately
		if (sortField === "createdAt" || sortField === "lastSignIn") {
			const dateA = a[sortField]?.toDate
				? a[sortField].toDate()
				: new Date(a[sortField] || 0);
			const dateB = b[sortField]?.toDate
				? b[sortField].toDate()
				: new Date(b[sortField] || 0);
			return sortDirection === "asc"
				? dateA - dateB
				: dateB - dateA;
		}

		// Handle string comparison for other fields
		let aValue, bValue;

		switch (sortField) {
			case "name":
				aValue = ((a.name || a.displayName) || "").toLowerCase();
				bValue = ((b.name || b.displayName) || "").toLowerCase();
				break;
			case "email":
				aValue = (a.email || "").toLowerCase();
				bValue = (b.email || "").toLowerCase();
				break;
			case "provider":
				aValue = (a.provider || "").toLowerCase();
				bValue = (b.provider || "").toLowerCase();
				break;
			default:
				return 0;
		}

		// String comparison
		if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
		if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
		return 0;
	});

	// Handle column sort
	const handleSort = (field) => {
		if (sortField === field) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		} else {
			setSortField(field);
			setSortDirection("asc");
		}
	};

	// Get sort icon for column header
	const getSortIcon = (field) => {
		if (sortField !== field) {
			return <ArrowUpDown className="w-3.5 h-3.5 ml-1 text-zinc-400" />;
		}
		return sortDirection === "asc" ? (
			<ArrowUp className="w-3.5 h-3.5 ml-1 text-zinc-900" />
		) : (
			<ArrowDown className="w-3.5 h-3.5 ml-1 text-zinc-900" />
		);
	};

	const [demoUsers, setDemoUsers] = useState([
		{
			id: "1",
			name: "Shrey Vijay Vargiya",
			email: "shreyvijayvargiya26@gmail.com",
			photoURL: "https://github.com/shreyvijayvargiya.png",
			provider: "google",
			emailVerified: true,
			createdAt: new Date("2025-01-01"),
			lastSignIn: new Date("2025-01-01"),
		},
		
	]);


	// Format date
	const formatDate = (dateString) => {
		if (!dateString) return "N/A";
		const date = dateString?.toDate
			? dateString.toDate()
			: new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	return (
		<div>
			<div className="mb-4">
				<h2 className="text-xl font-semibold text-zinc-900">
					Authenticated Users
				</h2>
				<p>List of users that have signed in to the websites</p>
			</div>

			{/* Search */}
			<div className="relative mb-4">
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
				<input
					type="text"
					placeholder="Search users by email, name, or UID..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="w-full pl-10 pr-4 py-2 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 text-sm"
				/>
			</div>

			<div className="overflow-x-auto border border-zinc-200 rounded-xl">
				<table className="w-full">
					<thead>
						<tr className="border-b border-zinc-200 bg-zinc-50">
							<th
								className="text-left py-3 px-4 font-semibold text-zinc-700 border-l border-r border-zinc-200 cursor-pointer hover:bg-zinc-100 transition-colors"
								onClick={() => handleSort("name")}
							>
								<div className="flex items-center">
									User
									{getSortIcon("name")}
								</div>
							</th>
							<th
								className="text-left py-3 px-4 font-semibold text-zinc-700 border-r border-zinc-200 cursor-pointer hover:bg-zinc-100 transition-colors"
								onClick={() => handleSort("email")}
							>
								<div className="flex items-center">
									Email
									{getSortIcon("email")}
								</div>
							</th>
							<th
								className="text-left py-3 px-4 font-semibold text-zinc-700 border-r border-zinc-200 cursor-pointer hover:bg-zinc-100 transition-colors"
								onClick={() => handleSort("provider")}
							>
								<div className="flex items-center">
									Provider
									{getSortIcon("provider")}
								</div>
							</th>
							<th className="text-left py-3 px-4 font-semibold text-zinc-700 border-r border-zinc-200">
								Email Verified
							</th>
							<th
								className="text-left py-3 px-4 font-semibold text-zinc-700 border-r border-zinc-200 cursor-pointer hover:bg-zinc-100 transition-colors"
								onClick={() => handleSort("createdAt")}
							>
								<div className="flex items-center">
									Created
									{getSortIcon("createdAt")}
								</div>
							</th>
							<th
								className="text-left py-3 px-4 font-semibold text-zinc-700 border-r border-zinc-200 cursor-pointer hover:bg-zinc-100 transition-colors"
								onClick={() => handleSort("lastSignIn")}
							>
								<div className="flex items-center">
									Last Sign In
									{getSortIcon("lastSignIn")}
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{isLoading ? (
							<TableSkeleton rows={5} columns={6} />
						) : error ? (
							<tr>
								<td colSpan={6} className="py-8 text-center text-zinc-500">
									Error loading users. Please try again.
								</td>
							</tr>
						) : sortedUsers.length === 0 ? (
							<tr>
								<td colSpan={6} className="py-8 text-center text-zinc-500">
									{searchQuery
										? "No users found matching your search."
										: "No users found."}
								</td>
							</tr>
						) : (
							sortedUsers.map((user, index) => (
								<tr
									key={user.id}
									className={`${
										index === sortedUsers.length - 1 ? "" : "border-b border-zinc-200"
									} hover:bg-zinc-50 transition-colors`}
								>
									<td className="py-3 px-4 border-l border-r border-zinc-200">
										<div className="flex items-center gap-3">
											{user.photoURL ? (
												<img
													src={user.photoURL}
													alt={user.name}
													className="w-8 h-8 rounded-full object-cover"
												/>
											) : (
												<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center">
													<span className="text-xs font-medium text-zinc-600">
														{user.name
															?.split(" ")
															.map((n) => n[0])
															.join("")
															.toUpperCase() || "U"}
													</span>
												</div>
											)}
											<div>
												<div className="font-medium text-zinc-900">
													{user.name || user.displayName || "Unknown"}
												</div>
												<div className="text-xs text-zinc-500 font-mono">
													{user.uid}
												</div>
											</div>
										</div>
									</td>
									<td className="py-3 px-4 border-r border-zinc-200">
										<div className="font-medium text-zinc-900">
											{user.email}
										</div>
									</td>
									<td className="py-3 px-4 border-r border-zinc-200">
										<span
											className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
												user.provider === "google"
													? "bg-zinc-100 text-zinc-800"
													: "bg-purple-100 text-purple-800"
											}`}
										>
											{user.provider === "google" ? "Google" : "Email"}
										</span>
									</td>
									<td className="py-3 px-4 border-r border-zinc-200">
										<span
											className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
												user.emailVerified
													? "bg-green-100 text-green-800"
													: "bg-yellow-100 text-yellow-800"
											}`}
										>
											{user.emailVerified ? "Verified" : "Unverified"}
										</span>
									</td>
									<td className="py-3 px-4 text-sm text-zinc-600 border-r border-zinc-200">
										{formatDate(user.createdAt)}
									</td>
									<td className="py-3 px-4 text-sm text-zinc-600 border-r border-zinc-200">
										{formatDate(user.lastSignIn)}
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UsersTab;
