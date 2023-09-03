import { getAllGithubRepositories } from '$lib/server/github';

export async function load() {
	const data = await getAllGithubRepositories();
	const sortedData = data.sort((a: any, b: any) => {
		if (new Date(a.created_at) > new Date(b.created_at)) {
			return -1;
		} else if (new Date(a.created_at) < new Date(b.created_at)) {
			return 1;
		} else return 0;
	});
	return {
		githubRepositories: sortedData.filter((e: any) => e.visibility === 'public' && e.language)
	};
}
