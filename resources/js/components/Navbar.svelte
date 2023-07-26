<script lang="ts">
    export let title :String = "Title"
</script>
<div class="bg-white w-screen sticky">
    <div
        class="bg-red-300 justify-between drop-shadow-xl  p-1 pr-20 ml-1 mr-1 flex  font-sans font-bold rounded "
    >
        <div class="title self-center pl-4">{title}</div>
        <div class="flex min-[320px]:space-x-3 sm:space-x-7"><slot /></div>
    </div>
</div>
