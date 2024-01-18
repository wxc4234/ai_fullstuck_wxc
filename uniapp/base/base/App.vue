<script setup>
	import { ref } from 'vue';
	const title = ref('你好');
	const changeTile = () => {
		title.value=title.vale === '你好' ? 'Hello World' : '你好';
	}
</script>

<style>
	/*每个页面公共css */
</style>
