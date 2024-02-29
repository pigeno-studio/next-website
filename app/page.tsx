import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Head from 'next/head';

export default function Home() {
	return (
	<div>
      <Head>
        <title>您的一站式项目外包技术伙伴</title>
      </Head>

      <div className="bg-gray-100 dark:bg-gray-900 transition duration-500">
        <header className="flex justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
          <h1 className="text-xl font-bold">欢迎来到PIGENO STUDIO</h1>

        </header>

        <main className="p-8">

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
			{/* 服务：前后端全栈开发 */}
			<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
				<h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">前后端全栈开发</h3>
				<p className="text-gray-600 dark:text-gray-300 mb-4">
				使用 TypeScript、NextJS、NestJS 等现代技术栈，我们为您提供无缝的前后端整合服务，打造高效、可维护的全栈解决方案。
				</p>
			</div>

			<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
				<h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">响应式网站与前端界面设计</h3>
				<p className="text-gray-600 dark:text-gray-300 mb-4">
				采用最新的React和Vue框架进行响应式网站和前端界面设计，以确保您的网站在任何设备上都能完美运作。
				</p>
			</div>

			<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
				<h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">微信小程序开发</h3>
				<p className="text-gray-600 dark:text-gray-300 mb-4">
				我们专注于微信小程序开发，帮您精准接触并留住中国市场的用户群体。
				</p>
			</div>

			<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
				<h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">网站搭建与维护</h3>
				<p className="text-gray-600 dark:text-gray-300">
				提供全方位的网站搭建和维护服务
				</p>
			</div>

			</section>

  
        </main>
      </div>
    </div>
	);
}
