"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const PromptCard = ({
	post,
	handleTagClick,
	handleEdit,
	handleDelete,
}) => {
	const [copy, setCopy] = useState("");

	return (
		<div className="prompt_card">
			<div className="flex justify-between items-start gap-5">
				<div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
					<Image
						src={post.creator.image}
						alt="user_image"
						width={40}
						height={40}
						className="rounded-full object-contain"
					/>
					<div className="flex flex-col">
						<h3 className="font-satoshi font-semibold text-gray-900">
							{post.creator.username}
						</h3>
						<p className="font-inter text-sm text-gray-500">
							{post.creator.email}
						</p>
					</div>
				</div>

				<div
					className="copy_btn"
					onClick={() => {}}>
					<Image
						height={12}
						width={12}
						src={
							copy === post.prompt
								? "/assets/icons/tick.svg"
								: "/assets/icons/copy.svg"
						}
					/>
				</div>
			</div>

			<p className="my-4 font-satoshi text-sm text-gray-700">
				{post.prompt}
			</p>
			<p
				className="blue_gradient font-inter text-sm cursor-pointer"
				onClick={() =>
					handleTagClick && handleTagClick(post.tag)
				}>
				{post.tag}
			</p>
		</div>
	);
};

export default PromptCard;
