import { ConfigProvider, Space, Tabs } from "antd";
import React from "react";

const TabsCustom = {
	token: {
		colorPrimary: "#4640DE",
		colorPrimaryHover: "#000000",
	},
};

const onChange = (value) => {
	console.log(value);
};

const TabItems = [
	{
		key: "1",
		label: `My Profile`,
		children: `Content of Tab Pane 1`,
	},
	{
		key: "2",
		label: `Login Details`,
		children: `Content of Tab Pane 2`,
	},
	{
		key: "3",
		label: `Notifications`,
		children: `Content of Tab Pane 3`,
	},
];

const TabItems2 = [
	{
		key: "1",
		label: `All`,
		children: `Content of Tab Pane 1`,
	},
	{
		key: "2",
		label: `In Review`,
		children: `Content of Tab Pane 2`,
	},
	{
		key: "3",
		label: `Interviewing`,
		children: `Content of Tab Pane 3`,
	},
	{
		key: "4",
		label: `Assessment`,
		children: `Content of Tab Pane 4`,
	},
	{
		key: "5",
		label: `Offered`,
		children: `Content of Tab Pane 5`,
	},
	{
		key: "6",
		label: `Hired`,
		children: `Content of Tab Pane 6`,
	},
];

export default function TabsBar() {
	return (
		<div>
			<h3>TabsBar</h3>
			<div className="BoxPosition">
				<Space direction="vertical">
					<ConfigProvider theme={TabsCustom}>
						<Tabs items={TabItems} defaultActiveKey="1" onChange={onChange} />
					</ConfigProvider>

					<ConfigProvider theme={TabsCustom}>
						<Tabs items={TabItems2} defaultActiveKey="1" onChange={onChange} />
					</ConfigProvider>
				</Space>
			</div>
		</div>
	);
}
