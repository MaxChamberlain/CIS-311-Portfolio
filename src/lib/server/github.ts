import { GITHUB_AUTH_TOKEN } from '$env/static/private';
import axios from 'axios';
export async function getAllGithubRepositories() {
	const { data } = await axios.get('https://api.github.com/users/MaxChamberlain/repos', {
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
			Accept: 'application/json',
			Authorization: `Bearer ${GITHUB_AUTH_TOKEN}`
		}
	});
	return data;
}
