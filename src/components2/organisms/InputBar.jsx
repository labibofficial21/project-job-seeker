import React from "react";
import Input from "antd/es/input/Input";
import { ConfigProvider, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const InputCustom_1 = {
	token: {
		borderRadius: 1,
		fontSize: 12,
	},
};

const InputCustom_2 = {
	token: {
		colorTextPlaceholder: "#000000",
	},
};

const InputCustom_3 = {
	token: {
		colorBorder: "#4640DE",
	},
};

const InputCustom_4 = {
	token: {
		colorBorder: "#FF6550",
	},
};

export default function InputBar() {
	return (
		<div>
			<h3>Input</h3>

			<div className="BoxPosition">
				<ConfigProvider theme={InputCustom_1}>
					<Space direction="vertical">
						<Space>
							<Input placeholder="This is placeholder" />
							<Input
								prefix={<SearchOutlined style={{ color: "#808080" }} />}
								placeholder="This is placeholder"
							/>
						</Space>

						<ConfigProvider theme={InputCustom_3}>
							<Space>
								<Input placeholder="This is placeholder" />
								<Input
									prefix={<SearchOutlined style={{ color: "#808080" }} />}
									placeholder="This is placeholder"
								/>
							</Space>
						</ConfigProvider>

						<ConfigProvider theme={InputCustom_2}>
							<Space>
								<Input placeholder="This is placeholder" />
								<Input
									prefix={<SearchOutlined style={{ color: "#808080" }} />}
									placeholder="This is placeholder"
								/>
							</Space>
						</ConfigProvider>

						<ConfigProvider theme={InputCustom_2}>
							<ConfigProvider theme={InputCustom_4}>
								<Space>
									<Input placeholder="This is placeholder" />
									<Input
										prefix={<SearchOutlined style={{ color: "#808080" }} />}
										placeholder="This is placeholder"
									/>
								</Space>
							</ConfigProvider>
						</ConfigProvider>
					</Space>
				</ConfigProvider>
			</div>
		</div>
	);
}
