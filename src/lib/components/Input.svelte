<script lang="ts">
	export let type: string, name: string, placeholder: string, label: string;
</script>

<div>
	<label for={name} class="text-sm font-bold text-gray-900"> {label} </label>
	<div class="mt-2">
		<input
			{type}
			{name}
			id={name}
			{placeholder}
			value=""
			class="block w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-500 caret-indigo-600 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
		/>
	</div>
</div>
