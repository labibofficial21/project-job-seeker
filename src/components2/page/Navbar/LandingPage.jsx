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
	Tag,
	AutoComplete,
	Divider,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { React, useState } from "react";
import {
	EnvironmentOutlined,
	SearchOutlined,
	ArrowRightOutlined,
	RedditOutlined,
	DropboxOutlined,
	WeiboSquareOutlined,
	YahooOutlined,
	CodepenCircleOutlined,
	FacebookFilled,
	InstagramFilled,
	MailFilled,
	LinkedinFilled,
	TwitterSquareFilled,
} from "@ant-design/icons";
import CategoryOne from "../../../images/jobCategory_design.png";

const { Text, Title, Link } = Typography;
const { Meta } = Card;

const headerStyle = {
	textAlign: "center",
	height: 64,
	paddingInline: 0,
	lineHeight: "64px",
	backgroundColor: "#fff",
};

const ButtonCustom_1 = {
	token: {
		borderRadius: 1,
		fontSize: 10,
		colorText: "#FFFFFF",
		colorBgContainer: "#4640DE",
		colorPrimaryHover: "#FFFFFF",
	},
};

const items = [
	{
		label: "Find Jobs",
		key: "jobs",
	},
	{
		label: "Browse Companies",
		key: "companies",
	},
];

const { Option } = Select;

const ButtonCustom_2 = {
	token: {
		borderRadius: 1,
		colorText: "#4640DE",
		fontSize: 12,
		colorPrimaryHover: "#4640DE",
	},
};

const ButtonCustom_3 = {
	token: {
		colorText: "#FFFFFF",
		colorBgContainer: "#4640DE",
		colorPrimaryHover: "#FFFFFF",
	},
};

const categoryCard = [
	{
		title: "Design 1",
		extra: <ArrowRightOutlined key="ellipsis" />,
		actions: ["225 Jobs available"],
		image: <CategoryOne />,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},
	{
		title: "Design 2",
		extra: <ArrowRightOutlined key="ellipsis" />,
		actions: ["225 Jobs available"],
		image: <CategoryOne />,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},
	{
		title: "Design 1",
		extra: <ArrowRightOutlined key="ellipsis" />,
		actions: ["225 Jobs available"],
		image: <CategoryOne />,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},
	{
		title: "Design 2",
		extra: <ArrowRightOutlined key="ellipsis" />,
		actions: ["225 Jobs available"],
		image: <CategoryOne />,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},
	{
		title: "Design 1",
		extra: <ArrowRightOutlined key="ellipsis" />,
		actions: ["225 Jobs available"],
		image: <CategoryOne />,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},
	{
		title: "Design 2",
		extra: <ArrowRightOutlined key="ellipsis" />,
		actions: ["225 Jobs available"],
		image: <CategoryOne />,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},
	{
		title: "Design 1",
		extra: <ArrowRightOutlined key="ellipsis" />,
		actions: ["225 Jobs available"],
		image: <CategoryOne />,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},
	{
		title: "Design 2",
		extra: <ArrowRightOutlined key="ellipsis" />,
		actions: ["225 Jobs available"],
		image: <CategoryOne />,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},
];

const categoryJobs = [
	{
		title: (
			<div>
				<Space
					direction="horizontal"
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBlockEnd: "5%",
					}}>
					<RedditOutlined style={{ fontSize: "48px" }} />
					<Button>Full Time</Button>
				</Space>
				<Text>Email Marketing</Text>
			</div>
		),
		typeJob: "Agency",
		location: "Madrid, Spain",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		tag: [
			<Tag color="success">Marketing</Tag>,
			<Tag color="warning"> Design</Tag>,
		],
	},
	{
		title: (
			<div>
				<Space
					direction="horizontal"
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBlockEnd: "5%",
					}}>
					<DropboxOutlined style={{ fontSize: "48px" }} />
					<Button>Full Time</Button>
				</Space>
				<Text>Brand Designer</Text>
			</div>
		),
		typeJob: "Agency",
		location: "San Francisco, US",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		tag: [<Tag color="warning"> Design</Tag>, <Tag color="blue">Business</Tag>],
	},
	{
		title: (
			<div>
				<Space
					direction="horizontal"
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBlockEnd: "5%",
					}}>
					<WeiboSquareOutlined style={{ fontSize: "48px" }} />
					<Button>Full Time</Button>
				</Space>
				<Text>Email Marketing</Text>
			</div>
		),
		typeJob: "Agency",
		location: "Berlin, Germany",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		tag: [<Tag color="green">Marketing</Tag>],
	},
	{
		title: (
			<div>
				<Space
					direction="horizontal"
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBlockEnd: "5%",
					}}>
					<YahooOutlined style={{ fontSize: "48px" }} />
					<Button>Full Time</Button>
				</Space>
				<Text>Visual Designer</Text>
			</div>
		),
		typeJob: "Agency",
		location: "Granada, Spain",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		tag: [<Tag color="warning">Design</Tag>],
	},
	{
		title: (
			<div>
				<Space
					direction="horizontal"
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBlockEnd: "5%",
					}}>
					<YahooOutlined style={{ fontSize: "48px" }} />
					<Button>Full Time</Button>
				</Space>
				<Text>Visual Designer</Text>
			</div>
		),
		typeJob: "Agency",
		location: "Granada, Spain",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		tag: [<Tag color="warning">Design</Tag>],
	},
	{
		title: (
			<div>
				<Space
					direction="horizontal"
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBlockEnd: "5%",
					}}>
					<YahooOutlined style={{ fontSize: "48px" }} />
					<Button>Full Time</Button>
				</Space>
				<Text>Visual Designer</Text>
			</div>
		),
		typeJob: "Agency",
		location: "Granada, Spain",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		tag: [<Tag color="warning">Design</Tag>],
	},
	{
		title: (
			<div>
				<Space
					direction="horizontal"
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBlockEnd: "5%",
					}}>
					<YahooOutlined style={{ fontSize: "48px" }} />
					<Button>Full Time</Button>
				</Space>
				<Text>Visual Designer</Text>
			</div>
		),
		typeJob: "Agency",
		location: "Granada, Spain",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		tag: [<Tag color="warning">Design</Tag>],
	},
	{
		title: (
			<div>
				<Space
					direction="horizontal"
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBlockEnd: "5%",
					}}>
					<YahooOutlined style={{ fontSize: "48px" }} />
					<Button>Full Time</Button>
				</Space>
				<Text>Visual Designer</Text>
			</div>
		),
		typeJob: "Agency",
		location: "Granada, Spain",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		tag: [<Tag color="warning">Design</Tag>],
	},
];

const openJobs = [
	{
		logo: <CodepenCircleOutlined style={{ fontSize: 48 }} />,
		title: "Social Media Assistant",
		typeJob: "Agency",
		location: "Paris, France",
		tag: [
			<Tag color="success">Full-Time</Tag>,
			<Tag color="warning">Marketing</Tag>,
			<Tag color="magenta">Design</Tag>,
		],
	},
	{
		logo: <CodepenCircleOutlined style={{ fontSize: 48 }} />,
		title: "Social Media Assistant",
		typeJob: "Agency",
		location: "Paris, France",
		tag: [
			<Tag color="success">Full-Time</Tag>,
			<Tag color="warning">Marketing</Tag>,
			<Tag color="magenta">Design</Tag>,
		],
	},
	{
		logo: <CodepenCircleOutlined style={{ fontSize: 48 }} />,
		title: "Social Media Assistant",
		typeJob: "Agency",
		location: "Paris, France",
		tag: [
			<Tag color="success">Full-Time</Tag>,
			<Tag color="warning">Marketing</Tag>,
			<Tag color="magenta">Design</Tag>,
		],
	},
	{
		logo: <CodepenCircleOutlined style={{ fontSize: 48 }} />,
		title: "Social Media Assistant",
		typeJob: "Agency",
		location: "Paris, France",
		tag: [
			<Tag color="success">Full-Time</Tag>,
			<Tag color="warning">Marketing</Tag>,
			<Tag color="magenta">Design</Tag>,
		],
	},
	{
		logo: <CodepenCircleOutlined style={{ fontSize: 48 }} />,
		title: "Social Media Assistant",
		typeJob: "Agency",
		location: "Paris, France",
		tag: [
			<Tag color="success">Full-Time</Tag>,
			<Tag color="warning">Marketing</Tag>,
			<Tag color="magenta">Design</Tag>,
		],
	},
	{
		logo: <CodepenCircleOutlined style={{ fontSize: 48 }} />,
		title: "Social Media Assistant",
		typeJob: "Agency",
		location: "Paris, France",
		tag: [
			<Tag color="success">Full-Time</Tag>,
			<Tag color="warning">Marketing</Tag>,
			<Tag color="magenta">Design</Tag>,
		],
	},
	{
		logo: <CodepenCircleOutlined style={{ fontSize: 48 }} />,
		title: "Social Media Assistant",
		typeJob: "Agency",
		location: "Paris, France",
		tag: [
			<Tag color="success">Full-Time</Tag>,
			<Tag color="warning">Marketing</Tag>,
			<Tag color="magenta">Design</Tag>,
		],
	},
	{
		logo: <CodepenCircleOutlined style={{ fontSize: 48 }} />,
		title: "Social Media Assistant",
		typeJob: "Agency",
		location: "Paris, France",
		tag: [
			<Tag color="success">Full-Time</Tag>,
			<Tag color="warning">Marketing</Tag>,
			<Tag color="magenta">Design</Tag>,
		],
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
						<Row>
							<Col span={14} style={{ padding: 25 }}>
								<Space direction="vertical">
									<Title style={{ margin: 0, fontSize: "5.5vw" }}>
										Discover <br /> more than <br /> 5000+ Jobs
									</Title>
									<Image
										src={require("../../../images/headerLine.png")}
										style={{ width: "100%" }}
									/>
									<Text style={{ fontSize: "1.5vw" }}>
										Great platform for the job seeker that searching for <br />
										new career heights and passionate about startups
									</Text>

									<Space style={{ backgroundColor: "white" }}>
										<SearchOutlined />
										<Input
											style={{
												borderBottom: "1px solid black",
												borderRadius: 1,
											}}
											placeholder="Job title or keyword"
											bordered={false}
										/>

										<Space>
											<EnvironmentOutlined />
											<Select
												defaultValue={"florence"}
												bordered={false}
												style={{
													borderBottom: "1px solid black",
													borderRadius: 1,
												}}>
												<Option value="florence">Florence, Italy</Option>
												<Option value="bandung">Bandung, Indonesia</Option>
											</Select>
										</Space>

										<ConfigProvider theme={ButtonCustom_2}>
											<ConfigProvider theme={ButtonCustom_3}>
												<Button
													style={{
														fontWeight: "bold",
													}}>
													Search my job
												</Button>
											</ConfigProvider>
										</ConfigProvider>
									</Space>

									<Text style={{ fontSize: "clamp(8px, 1vw, 30px)" }}>
										Popular: UI Designer, UX Researcher, Android, Admin
									</Text>
								</Space>
							</Col>
							<Col span={10}>
								<Image src={require("../../../images/headerImg.png")} />
							</Col>
						</Row>
					</Content>

					<Content>
						<Text style={{ fontSize: "2vw" }}>Companies we helped grow</Text>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<Space>
								<Image
									src={require("../../../images/logo-jobox.png")}
									width={"3.5vw"}
								/>
								<Text style={{ fontSize: "1.5vw" }}>Jobox</Text>
							</Space>
							<Space>
								<Image
									src={require("../../../images/logo-jobox.png")}
									width={"3.5vw"}
								/>
								<Text style={{ fontSize: "1.5vw" }}>Jobox</Text>
							</Space>
							<Space>
								<Image
									src={require("../../../images/logo-jobox.png")}
									width={"3.5vw"}
								/>
								<Text style={{ fontSize: "1.5vw" }}>Jobox</Text>
							</Space>
							<Space>
								<Image
									src={require("../../../images/logo-jobox.png")}
									width={"3.5vw"}
								/>
								<Text style={{ fontSize: "1.5vw" }}>Jobox</Text>
							</Space>
							<Space>
								<Image
									src={require("../../../images/logo-jobox.png")}
									width={"3.5vw"}
								/>
								<Text style={{ fontSize: "1.5vw" }}>Jobox</Text>
							</Space>
						</div>
					</Content>

					<Content>
						<div style={{ display: "flex" }}>
							<Text style={{ fontSize: "2vw" }}>Explore by Category</Text>
							<Space style={{ marginInlineStart: "auto", fontSize: "1vw" }}>
								<Text style={{ fontSize: "clamp(10px, 1.5vw, 30px)" }}>
									Show all jobs
								</Text>
								<ArrowRightOutlined />
							</Space>
						</div>

						<div>
							<Row
								style={{
									display: "flex",
									justifyContent: "space-between",
									columnGap: 40,
									rowGap: 40,
								}}>
								{categoryCard.map((value, key) => (
									<Col flex="20%">
										<Card
											title={value.title}
											extra={value.extra}
											actions={value.actions}
											key={key}
											style={{
												width: "100%",
												textAlign: "center",
												fontSize: "clamp(10px, 1.5vw, 20px)",
											}}>
											<div style={{ display: "flex" }}>
												<Space direction="vertical">
													<Image src={`./${value.image}.png`} />
													<Meta description={value.description} />
												</Space>
											</div>
										</Card>
									</Col>
								))}
							</Row>
						</div>
					</Content>

					<Content>
						<div style={{ backgroundColor: "yellowgreen", padding: 50 }}>
							<Row>
								<Col span={12}>
									<Space direction="vertical">
										<Title style={{ fontSize: "4vw" }}>
											Start posting <br /> jobs today
										</Title>
										<Text style={{ fontSize: "1.2vw" }}>
											Start posting jobs for only $10
										</Text>
										<ConfigProvider theme={ButtonCustom_2}>
											<ConfigProvider theme={ButtonCustom_3}>
												<Button
													style={{
														fontWeight: "bold",
													}}>
													Sign Up For Free
												</Button>
											</ConfigProvider>
										</ConfigProvider>
									</Space>
								</Col>
								<Col span={12}>
									<Image src={require("../../../images/dashboard.png")} />
								</Col>
							</Row>
						</div>
					</Content>

					<Content>
						<div style={{ display: "flex" }}>
							<Text style={{ fontSize: "2vw" }}>Featured Jobs</Text>
							<Space style={{ marginInlineStart: "auto", fontSize: "1vw" }}>
								<Text style={{ fontSize: "1vw" }}>Show all jobs</Text>
								<ArrowRightOutlined />
							</Space>
						</div>

						<div>
							<Row
								style={{
									display: "flex",
									justifyContent: "space-between",
									columnGap: 30,
									rowGap: 30,
								}}>
								{categoryJobs.map((value, key) => (
									<Col flex="20%">
										<Card
											style={{
												width: "100%",
											}}>
											<Meta
												title={value.title}
												description={
													<Space direction="vertical">
														<Space direction="horizontal">
															<Text>{value.typeJob}</Text>
															<Text>&#x2022;</Text>
															<Text>{value.location}</Text>
														</Space>
														<Text type="secondary">
															<div
																style={{
																	fontSize: 12,
																	textAlign: "justify",
																}}>
																{value.description}
															</div>
														</Text>
														<Space>{value.tag}</Space>
													</Space>
												}
											/>
										</Card>
									</Col>
								))}
							</Row>
						</div>
					</Content>

					<Content>
						<div style={{ display: "flex" }}>
							<Text style={{ fontSize: "2vw" }}>Latest jobs open</Text>
							<Space style={{ marginInlineStart: "auto", fontSize: "1vw" }}>
								<Text style={{ fontSize: "1vw" }}>Show all jobs</Text>
								<ArrowRightOutlined />
							</Space>
						</div>

						<div>
							<Row
								style={{
									display: "flex",
									justifyContent: "space-between",
									rowGap: 20,
								}}>
								{openJobs.map((value, key) => (
									<Col flex="35%">
										<Card style={{ width: "100%" }}>
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
											</Space>
										</Card>
									</Col>
								))}
							</Row>
						</div>
					</Content>
				</Layout>

				<Footer style={{ padding: 0 }}>
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
				</Footer>
			</Layout>
		</div>
	);
}
