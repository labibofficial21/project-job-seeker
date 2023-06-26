import { Space, Steps } from "antd";
import {
	ReconciliationOutlined,
	SolutionOutlined,
	ProfileOutlined,
} from "@ant-design/icons";
import React from "react";

const StepsItems = [
	{
		title: "Job Information",
		description: "Step 1/3",
		icon: <ReconciliationOutlined />,
	},
	{
		title: "Job Description",
		description: "Step 2/3",
		icon: <SolutionOutlined />,
	},
	{
		title: "Perks & Benefit",
		description: "Step 3/3",
		icon: <ProfileOutlined />,
	},
];

export default function StepsBar() {
	return (
		<div>
			<h3>Steps</h3>
			<div className="BoxPosition">
				<Steps current={1} items={StepsItems} type="navigation" />
			</div>
			<div className="BoxPosition">
				<Steps current={1} items={StepsItems} type="inline" size="small" />
			</div>
		</div>
	);
}
