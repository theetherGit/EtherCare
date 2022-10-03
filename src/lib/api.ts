export async function send(form: HTMLFormElement) {
	const response = await fetch(form.action, {
		method: form.method,
		body: new FormData(form),
		headers: { accept: 'application/json' }
	});
	return response.text().then((json) => {
		try {
			const resParsed = JSON.parse(json);
			if (resParsed?.status === 'error') {
				console.log(`API response error from: ${json}`);
			}
			return resParsed;
		} catch (err) {
			return json;
		}
	});
}
