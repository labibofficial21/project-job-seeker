import {
	Button,
	Layout,
	Space,
	Menu,
	Image,
	ConfigProvider,
	Row,
	Col,
	Typography,
	Input,
	Select,
	Card,
	Dropdown,
	MenuProps,
	Checkbox,
	AutoComplete,
	Divider,
	Progress,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { React, useState } from "react";
import {
	EnvironmentOutlined,
	DownOutlined,
	AppstoreOutlined,
	SearchOutlined,
	ArrowRightOutlined,
	FacebookFilled,
	InstagramFilled,
	MailFilled,
	LinkedinFilled,
	TwitterSquareFilled,
	SmileOutlined,
} from "@ant-design/icons";

import {
	headerStyle,
	ButtonCustom_1,
	ButtonCustom_2,
	items,
	categoryCard,
	categoryJobs,
	openJobs,
} from "./Dataset";

const { Text, Title, Link } = Typography;
const { Meta } = Card;
const { Option } = Select;

function getItem(label, key, children, type) {
	return {
		label,
		key,
		children,
		type,
	};
}

const itemsEmployment = [
	getItem("Type of Employment", "sub1", [
		getItem("Full-time (3)", "1a"),
		getItem("Part-Time (5)", "1b"),
		getItem("Remote (2)", "1c"),
		getItem("Internship (24)", "1d"),
		getItem("Contract (3)", "1e"),
	]),
	{
		type: "divider",
	},
];

const itemsCategories = [
	getItem("Categories", "sub2", [
		getItem("Design (24)", "2a"),
		getItem("Sales (3)", "2b"),
		getItem("Marketing (3)", "2c"),
		getItem("Business (3)", "2d"),
		getItem("Human Resource (6)", "2e"),
		getItem("Finance (4)", "2f"),
		getItem("Engineering (4)", "2g"),
		getItem("Technology (5)", "2h"),
	]),
	{
		type: "divider",
	},
];

const itemsSalaryRange = [
	getItem("Salary Range", "sub3", [
		getItem("$700 - $1000 (4)", "3a"),
		getItem("$100 - $1500 (6)", "3b"),
		getItem("$1500 - $2000 (10)", "3c"),
		getItem("$3000 or above (4)", "3d"),
	]),
	{
		type: "divider",
	},
];

const itemsJobLevel = [
	getItem("Job Level", "sub4", [
		getItem("Entry Level (57)", "4a"),
		getItem("Mid Level (3)", "4b"),
		getItem("Senior Level (5)", "4c"),
		getItem("Director (12)", "4d"),
		getItem("VP or Above (8)", "4e"),
	]),
	{
		type: "divider",
	},
];

export default function LandingPage() {
	const [current, setCurrent] = useState("mail");
	const onClick = (e) => {
		console.log("click", e);
		setCurrent(e.key);
	};

	return (
		<div>
			<Layout>
				<Header style={headerStyle}>
					<div style={{ display: "flex" }}>
						<Space>
							<Image src={require("../../../images/logo.png")} />
							<h1 style={{ marginBlock: 0 }}>JobHuntly</h1>
							<Menu
								items={items}
								mode="horizontal"
								onClick={onClick}
								selectedKeys={[current]}
							/>
						</Space>
						<Space style={{ marginInlineStart: "auto", maxWidth: "100%" }}>
							<Button type="text">Login</Button>
							<ConfigProvider theme={ButtonCustom_1}>
								<Button size="large">Sign Up</Button>
							</ConfigProvider>
						</Space>
					</div>
				</Header>

				<Layout>
					<Content>
						<div style={{ textAlign: "center" }}>
							<Title>Find Your Dream Job</Title>
							<Text>
								Find your next career at companies like HubSpot, Nike, and
								Dropbox
							</Text>
						</div>
						<div
							style={{
								padding: 10,
								display: "flex",
								justifyContent: "center",
							}}>
							<Space direction="vertical">
								<div style={{ padding: 15, backgroundColor: "white" }}>
									<Space>
										<SearchOutlined />
										<Input
											style={{
												borderBlockEnd: "1px solid black",
												borderRadius: 1,
											}}
											placeholder="Job title or keyword"
											bordered={false}
										/>

										<EnvironmentOutlined />
										<Select
											defaultValue={"florence"}
											bordered={false}
											style={{
												borderBottom: "1px solid black",
												borderRadius: 1,
												width: "100%",
											}}>
											<Option value="florence">Florence, Italy</Option>
											<Option value="bandung">Bandung, Indonesia</Option>
										</Select>

										<ConfigProvider theme={ButtonCustom_2}>
											<Button
												style={{
													fontWeight: "bold",
												}}>
												Search my job
											</Button>
										</ConfigProvider>
									</Space>
								</div>
								<Text>Popular: UI Designer, UX Researcher, Android, Admin</Text>
							</Space>
						</div>
					</Content>

					<Content>
						<Row>
							<Col flex="20%">
								<Menu
									onClick={onClick}
									defaultSelectedKeys={["1a"]}
									defaultOpenKeys={["sub1"]}
									mode="inline"
									items={itemsEmployment}
								/>
								<Menu
									onClick={onClick}
									defaultSelectedKeys={["2a"]}
									defaultOpenKeys={["sub2"]}
									mode="inline"
									items={itemsCategories}
								/>
								<Menu
									onClick={onClick}
									defaultSelectedKeys={["2a"]}
									defaultOpenKeys={["sub2"]}
									mode="inline"
									items={itemsJobLevel}
								/>
								<Menu
									onClick={onClick}
									defaultSelectedKeys={["2a"]}
									defaultOpenKeys={["sub2"]}
									mode="inline"
									items={itemsSalaryRange}
								/>
							</Col>
							<Col flex="80%">
								<div>
									<Space>
										<Space direction="vertical">
											<Title>All Jobs</Title>
											<Text>Showing 73 results</Text>
										</Space>

										<Space>
											<Text>Sort by: </Text>
											<Select
												defaultValue={"Most Relevant"}
												bordered={false}
												style={{
													borderBottom: "1px solid black",
													borderRadius: 1,
													width: "100%",
												}}>
												<Option value="most">Most Relevant</Option>
												<Option value="rare">Older</Option>
											</Select>
										</Space>
									</Space>
								</div>

								<div>
									<Card
										style={{
											width: "100%",
										}}>
										<div style={{ display: "flex" }}>
											<div>
												<p>Card content</p>
												<p>Card content</p>
												<p>Card content</p>
											</div>
											<div>
												<Button>Apply</Button>
												<Progress percent={50} showInfo={false} />
												<Text>5 applied of 10 capacity</Text>
											</div>
										</div>
									</Card>
								</div>

								<div>
									<Row
										style={{
											display: "flex",
											justifyContent: "space-between",
											rowGap: 20,
										}}>
										{openJobs.map((value, key) => (
											<Card style={{ width: "100%" }}>
												<div>
													<Space>
														{value.logo}
														<Space
															direction="vertical"
															style={{ marginInlineStart: 10 }}>
															<Text strong>{value.title}</Text>
															<Space>
																<Text>{value.typeJob}</Text>
																<Text>&#x2022;</Text>
																<Text>{value.location}</Text>
															</Space>
															<Space>{value.tag}</Space>
														</Space>
														<div>
															<Space direction="vertical">
																<Button>Apply</Button>
																<Progress percent={50} showInfo={false} />
																<Text>5 applied of 10 capacity</Text>
															</Space>
														</div>
													</Space>
												</div>
											</Card>
										))}
									</Row>
								</div>
							</Col>
						</Row>
					</Content>
				</Layout>

				{/* <Footer style={{ padding: 0 }}>
					<Row
						style={{
							paddingBlockStart: 20,
							display: "flex",
							justifyContent: "space-between",
						}}>
						<Col flex="35%">
							<Space direction="vertical">
								<Space>
									<Image src={require("../../../images/logo.png")} />
									<Text style={{ fontSize: 20, fontWeight: 600 }}>
										Job Huntly
									</Text>
								</Space>
								<Text>
									Great platform for the job seekeer that passionate about
									startups. Find your dream job easier
								</Text>
							</Space>
						</Col>
						<Col flex="15%">
							<Space direction="vertical">
								<Text strong>About</Text>
								<Link href="https://ant.design" target="_blank">
									Companies
								</Link>
								<Link href="https://ant.design" target="_blank">
									Pricing
								</Link>
								<Link href="https://ant.design" target="_blank">
									Terms
								</Link>
								<Link href="https://ant.design" target="_blank">
									Advice
								</Link>
								<Link href="https://ant.design" target="_blank">
									Privacy Policy
								</Link>
							</Space>
						</Col>
						<Col flex="15%">
							<Space direction="vertical">
								<Text strong>Resources</Text>
								<Link href="https://ant.design" target="_blank">
									Help Docs
								</Link>
								<Link href="https://ant.design" target="_blank">
									Guides
								</Link>
								<Link href="https://ant.design" target="_blank">
									Updates
								</Link>
								<Link href="https://ant.design" target="_blank">
									Contact Us
								</Link>
							</Space>
						</Col>
						<Col flex="25%">
							<Space direction="vertical">
								<Text strong>Get job notifications</Text>
								<Text>
									The latest job news, articles, sent to you inbox weekly
								</Text>
								<Space>
									<AutoComplete
										style={{
											width: 200,
										}}
										placeholder="Email Address"
									/>
									<Button>Subscribe</Button>
								</Space>
							</Space>
						</Col>
					</Row>
					<Divider />
					<div style={{ display: "flex" }}>
						<Text>2023@JobHuntly. All rights reserved</Text>
						<Space style={{ marginInlineStart: "auto" }}>
							<FacebookFilled />
							<InstagramFilled />
							<MailFilled />
							<LinkedinFilled />
							<TwitterSquareFilled />
						</Space>
					</div>

					<Divider />
				</Footer> */}
			</Layout>
		</div>
	);
}
