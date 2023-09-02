<script>
	import githubLogo from '../assets/icons/github-mark.svg';
	import linkedInLogo from '../assets/icons/linkedin-mark.svg';
	import bgLines from '../assets/icons/bg-lines.svg';
	import csuLogo from '../assets/images/csu-pueblo-logo.png';
	import CourseListItem from '../components/CourseListItem.svelte';
	import Button from '../components/Button.svelte';
</script>

<main class="p-4 w-full xl:max-w-7xl flex items-start xl:items-center mx-auto min-h-acc-header">
	<div
		class="h-full w-full flex flex-col-reverse xl:flex-row justify-end xl:justify-between items-start xl:items-center pt-2 xl:pt-0 gap-8"
	>
		<section
			class="flex flex-col gap-8 xl:gap-14 w-full max-w-md text-center items-center mx-auto xl:text-left xl:items-start xl:mx-0 py-8"
		>
			<h1 class="tracking-tight text-4xl xl:text-6xl">
				CIS 311 <span class="text-[#D02030]">Student</span>
			</h1>
			<p class="text-sm xl:text-base">
				Hi, I'm Max Chamberlain, a full-stack developer and student at the Colorado State University
				Pueblo. I'm currently studying Computer and Information Science and am expected to graduate
				in 2026.
			</p>
			<div class="flex gap-4">
				<Button
					label="Learn More"
					type="primary"
					onClick={() => (window.location.href = '/about')}
				/>
				<Button
					label="Projects"
					type="secondary"
					onClick={() => (window.location.href = '/projects')}
				/>
			</div>
			<ul class="flex gap-4 -z-20">
				<li>
					<a
						href="https://github.com/MaxChamberlain"
						target="_blank"
						aria-label="Github Link"
						class="flex items-center gap-2"
					>
						<img src={githubLogo} alt="Github Logo" class="w-6 h-6 opacity-80" aria-hidden="true" />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/max-chamberlain-2430811b0/"
						target="_blank"
						aria-label="Github Link"
						class="flex items-center gap-2"
					>
						<img
							src={linkedInLogo}
							alt="Linkedin Link"
							class="w-6 h-6 opacity-80"
							aria-hidden="true"
						/>
					</a>
				</li>
			</ul>
		</section>
		<section
			class="flex flex-col gap-12 w-full max-w-xl text-center items-center mx-auto xl:text-left xl:items-start xl:mx-0"
		>
			<img src={csuLogo} alt="CSU Pueblo Logo" class="w-full h-fit xl:h-32 xl:w-fit" />
			<ul class="flex flex-col gap-4 xl:gap-2 w-full">
				<CourseListItem
					title="business communication"
					credits={3}
					courseNumber="bsad270"
					courseDescriptionLink="https://catalog.csupueblo.edu/course-description-information/bsad/"
				/>
				<CourseListItem
					title="advanced statistics"
					credits={3}
					courseNumber="Bsad360"
					courseDescriptionLink="https://catalog.csupueblo.edu/course-description-information/bsad/"
				/>
				<CourseListItem
					title="Introduction to Web Development"
					credits={3}
					courseNumber="cis311"
					courseDescriptionLink="https://catalog.csupueblo.edu/course-description-information/cis/"
				/>
				<CourseListItem
					title="database management"
					credits={3}
					courseNumber="cis350"
					courseDescriptionLink="https://catalog.csupueblo.edu/course-description-information/cis/"
				/>
				<CourseListItem
					title="network systems administration"
					credits={3}
					courseNumber="cis401"
					courseDescriptionLink="https://catalog.csupueblo.edu/course-description-information/cis/"
				/>
			</ul>
		</section>
	</div>
	<div
		class="min-h-acc-header absolute top-16 right-0 opacity-30 -z-10 w-full hidden xl:flex justify-center overflow-hidden"
	>
		<img
			src={bgLines}
			alt="Background Lines"
			class="w-fit -z-10 h-full -scale-x-100"
			aria-hidden="true"
		/>
		<img src={bgLines} alt="Background Lines" class="w-fit -z-10 h-full" aria-hidden="true" />
		<img
			src={bgLines}
			alt="Background Lines"
			class="w-fit -z-10 h-full -scale-x-100"
			aria-hidden="true"
		/>
		<img src={bgLines} alt="Background Lines" class="w-fit -z-10 h-full" aria-hidden="true" />
	</div>
</main>
