'use client'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import {Popover, PopoverTrigger, PopoverContent, Image,Button} from "@nextui-org/react";
// import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";


import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	WeChatIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";
import { usePathname } from 'next/navigation';
import {isAppleDevice} from "@react-aria/utils";
import { Logo } from "@/components/icons";
import { useEffect, useState } from "react";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);
	const pathname = usePathname();
	useEffect(() => {
		if (isMenuOpen) {
		  setIsMenuOpen(false);
		}
	  }, [pathname]);

	// const [commandKey, setCommandKey] = useState<"ctrl" | "command">("command");

	//   useEffect(() => {
	// 	setCommandKey(isAppleDevice() ? "command" : "ctrl");
	//   }, []);

	//   const handleOpenCmdk = () => {
	// 	cmdkStore.onOpen();

	//   };
	
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<NextUINavbar maxWidth="xl" position="sticky"   isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">PIGENO STUDIO</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
								data-active={pathname===item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					{/* <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link> */}
					{/* <Link isExternal href={siteConfig.links.discord} aria-label="WeChat">
						<WeChatIcon className="text-default-500" />
					</Link> */}
					{/* <Popover placement="bottom" offset={20} showArrow>
						<PopoverTrigger>
							<WeChatIcon className="text-default-500" />
						</PopoverTrigger>
						<PopoverContent>
							<Image
								isBlurred
								alt="WeChat Image"
								src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
								className="sm:w-20 md:w-32 lg:w-48"
							/>
						</PopoverContent>
					</Popover> */}
					    <Popover placement="bottom" offset={20} showArrow>
							<PopoverTrigger>
								<Link href="#">
									<WeChatIcon className="text-default-500" />
								</Link>
							</PopoverTrigger>
							<PopoverContent>
								<Image
									isBlurred
									alt="WeChat Image"
									src="./wechat.jpg"
									className="sm:w-20 md:w-32 lg:w-48"
								/>
							</PopoverContent>
						</Popover>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				{/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
				{/* <NavbarItem className="hidden md:flex">
					<Button
            isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={siteConfig.links.sponsor}
						startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
						Sponsor
					</Button>
				</NavbarItem> */}
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Popover placement="bottom" offset={20} showArrow>
					<PopoverTrigger>
						<Link href="#">
							<WeChatIcon className="text-default-500" />
						</Link>
					</PopoverTrigger>
					<PopoverContent>
						<Image
							isBlurred
							alt="WeChat Image"
							src="./wechat.jpg"
							className="w-36 sm:w-20 md:w-32 lg:w-48"
						/>
					</PopoverContent>
				</Popover>

				{/* <Link isExternal href={siteConfig.links.github} aria-label="WeChat">
					<WeChatIcon className="text-default-500" />
				</Link> */}
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{/* {searchInput} */}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									item.href === pathname
										? "primary"
										: "foreground"
								}
								// color={"foreground"}
								href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
