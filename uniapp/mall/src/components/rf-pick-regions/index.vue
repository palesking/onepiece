<template>
	<picker
		mode="multiSelector"
		@columnchange="bindMultiPickerColumnChange"
		:value="multiIndex"
		range-key="title"
		:range="multiArray"
	>
		{{ multiStr }}
	</picker>
</template>

<script src='./index.js'>

</script>
