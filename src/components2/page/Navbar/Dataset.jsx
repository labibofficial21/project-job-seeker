import { Button, Space, Typography, Tag } from "antd";

import { React } from "react";
import {
	ArrowRightOutlined,
	RedditOutlined,
	DropboxOutlined,
	WeiboSquareOutlined,
	YahooOutlined,
	CodepenCircleOutlined,
} from "@ant-design/icons";
import CategoryOne from "../../../images/jobCategory_design.png";

const { Text } = Typography;

export const headerStyle = {
	textAlign: "center",
	height: 64,
	paddingInline: 0,
	lineHeight: "64px",
	backgroundColor: "#fff",
};

export const ButtonCustom_1 = {
	token: {
		borderRadius: 1,
		fontSize: 10,
		colorText: "#FFFFFF",
		colorBgContainer: "#4640DE",
		colorPrimaryHover: "#FFFFFF",
	},
};

export const ButtonCustom_2 = {
	token: {
		borderRadius: 1,
		fontSize: 12,
		colorText: "#FFFFFF",
		colorBgContainer: "#4640DE",
		colorPrimaryHover: "#FFFFFF",
	},
};

export const items = [
	{
		label: "Find Jobs",
		key: "jobs",
	},
	{
		label: "Browse Companies",
		key: "companies",
	},
];

export const categoryCard = [
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

export const categoryJobs = [
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

export const openJobs = [
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
