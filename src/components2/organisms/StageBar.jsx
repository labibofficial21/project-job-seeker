import { Button, ConfigProvider, Dropdown, Space } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import React from "react";

const items = [
	{
		key: 1,
		label: (
			<a href="/" target="_blank">
				1st menu item
			</a>
		),
	},
	{
		key: 2,
		label: (
			<a href="/" target="_blank">
				2nd menu item
			</a>
		),
	},
	{
		key: 3,
		label: (
			<a href="/" target="_blank">
				3rd menu item
			</a>
		),
	},
];

export default function StageBar() {
	return (
		<div>
			<h3>Stage Bar</h3>
			<div className="BoxPosition">
				<ConfigProvider
					theme={{
						token: {
							borderRadius: 1,
						},
					}}>
					<Space>
						<Dropdown.Button
							menu={{ items }}
							trigger={["click"]}
							style={{ borderColor: "salmon" }}>
							• In Review
						</Dropdown.Button>
						<Dropdown.Button menu={{ items }} trigger={["click"]}>
							• Shortlisted
						</Dropdown.Button>
						<Dropdown.Button menu={{ items }} trigger={["click"]}>
							• Interview
						</Dropdown.Button>
						<Dropdown.Button menu={{ items }} trigger={["click"]}>
							• Hired
						</Dropdown.Button>
						<Dropdown.Button menu={{ items }} trigger={["click"]}>
							• Declined
						</Dropdown.Button>
					</Space>
				</ConfigProvider>
			</div>
		</div>
	);
}
