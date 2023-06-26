import {
	Select,
	Form,
	Input,
	Space,
	Upload,
	Button,
	ConfigProvider,
	Typography,
} from "antd";
import { PaperClipOutlined } from "@ant-design/icons";
import React from "react";

const { TextArea } = Input;
const { Text } = Typography;

const TextfieldCustom_1 = {
	token: {
		borderRadius: 1,
		fontSize: 12,
	},
};

const optionTags = [
	{
		value: "lucy",
		label: "Lucy",
	},
	{
		value: "jack",
		label: "Jack",
	},
	{
		value: "labib",
		label: "Labib",
	},
	{
		value: "veronica",
		label: "Veronica",
	},
];

const optionMultiple = [
	{
		value: 1,
		label: "1",
	},
	{
		value: 2,
		label: "2",
	},
	{
		value: 3,
		label: "3",
	},
	{
		value: 4,
		label: "4",
	},
];

export default function Textfield() {
	return (
		<div>
			<h3>Textfield</h3>
			<div className="BoxPosition">
				<ConfigProvider theme={TextfieldCustom_1}>
					<Form layout="vertical">
						<Form.Item label="Label">
							<Space direction="vertical">
								<Input placeholder="This is placeholder" />
								<Input placeholder="This is placeholder" />
							</Space>
						</Form.Item>

						<Form.Item label="Label">
							<Space direction="vertical">
								<Select
									placeholder="Pilih Tag"
									mode="tags"
									style={{ width: 159 }}
									options={optionTags}
								/>
							</Space>
						</Form.Item>

						<Form.Item label="Label" extra="This is helper text">
							<Space direction="vertical">
								<Input placeholder="This is placeholder" />
							</Space>
						</Form.Item>

						<Form.Item label="Upload" extra="This is helper text">
							<Upload>
								<Space direction="vertical">
									<Button icon={<PaperClipOutlined />}>
										Attach Resume/ CV
									</Button>
									<Input placeholder="This is placeholder" />
								</Space>
							</Upload>
						</Form.Item>

						<Form.Item label="Upload" extra="Maximum 500 characters">
							<Space direction="vertical">
								<TextArea
									placeholder="Enter job description"
									style={{
										height: 120,
										width: 300,
										resize: "none",
									}}
									showCount
									maxLength={500}
								/>
							</Space>
						</Form.Item>

						<Space direction="vertical">
							<Space direction="horizontal">
								<Text>View</Text>

								<Select
									defaultValue={1}
									style={{
										width: 50,
									}}
									options={optionMultiple}
								/>
								<Text>Applicants per page</Text>
							</Space>
						</Space>
					</Form>
				</ConfigProvider>
			</div>
		</div>
	);
}
