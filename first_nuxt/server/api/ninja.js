export default defineEventHandler(async (event) => {
	//Handle query params
	const { name } = useQuery(event);

	//Handle post data
	const { age } = await useBody(event);
	return {
		message: `Hello, ${name}! You are ${age} years old.`,
	};
});
