import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60969ac5542aaa001f91fbaa/images/image.png?v=2021-05-08T14:06:48.149Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60969ac5542aaa001f91fbaa/images/image.png?v=2021-05-08T14:06:48.149Z"} />
			<meta name={"msapplication-TileColor"} content={"#d2adad"} />
		</Helmet>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-primary url(https://uploads.quarkly.io/60969ac5542aaa001f91fbaa/images/wp6699985.jpg?v=2021-05-08T14:33:05.119Z) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			md-background=",#870d16 url(https://uploads.quarkly.io/60969ac5542aaa001f91fbaa/images/uwp223598.png?v=2021-05-08T14:26:31.872Z) center/cover"
		>
			<Override
				slot="SectionContent"
				md-border-color="#ec810d"
				md-background="rgba(0, 0, 0, 0.42)"
				lg-text-align="left"
				lg-text-transform="uppercase"
				lg-letter-spacing="inherit"
				lg-white-space="pre-line"
				lg-font="italic 300 20px/1.5 --fontFamily-sans"
			/>
			<Stack>
				<StackItem width="75%" lg-width="100%" border-color="#010202" box-shadow="0 0 0 0 #ffffff">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Excellence in everything
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Striving for perfection in everything we do. I take it as my duty to provid you all with the mixtapes that will inspire and motivate you all.{" "}
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Components.EmbedHTML />
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
			<Image width="64px" height="64px" src="https://uploads.quarkly.io/60969ac5542aaa001f91fbaa/images/image.png?v=2021-05-08T14:06:48.149Z" />
		</Section>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://images.unsplash.com/photo-1474224017046-182ece80b263?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 15%/cover"
			color="--light"
			font="--base"
		>
			<Override
				slot="SectionContent"
				lg-text-decoration-line="underline"
				lg-color="#ffffff"
				lg-background="rgba(0, 0, 0, 0.22)"
				lg-font="--base"
			/>
			<Image width="64px" height="64px" src="https://uploads.quarkly.io/60969ac5542aaa001f91fbaa/images/image.png?v=2021-05-08T14:06:48.149Z" />
			<Box />
			<Box>
				<Box />
			</Box>
			<Stack>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					font="--lead"
					text-transform="uppercase"
					letter-spacing="1px"
				>
					<Text margin="0px">
						About me
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text>
						I was born and raised in India
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text />
					<Text md-display="inline-block" md-overflow-x="inherit" md-overflow-y="visible" md-filter="  brightness(100%)">
						Hey.my name is Jaiveer Singh Shekhawat{" "}
						<br />
						I am a professional video editor .
						<br />
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text>
						I want to be a professional youtuber ,and one day i will be one but i will definately need help for that so support me guys please!!!
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-dark" padding="60px 0" sm-padding="40px 0">
			<SocialMedia
				facebook="https://www.facebook.com/quarklyapp/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCpwfJcmkTfDkK4rkem1f-Wg"
				vkontakte="https://vk.com/quarklyapp"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="transparent"
					hover-background="transparent"
					margin="0 8px"
				/>
			</SocialMedia>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});