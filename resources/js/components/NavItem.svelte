<script lang="ts">
    export let text: String;
</script>

<h1 class={$$props.class +
        " hover:bg-blue-400 bg-blue-200 active:bg-blue-600 shadow-md hover:shadow-xl " +
        " hover:drop-shadow-xl active:drop-shadow-2xl p-3 select-none" +
        " max-sm:collapse rounded-lg"} >
    {text}
</h1>
