<script lang="ts">
    import { Person, type EcfEmpresa } from "../shared/CustomType";

    export let teste_var: EcfEmpresa[];

    let teste: Person = {
        name: "Pedro",
        age: 34,
    };

</script>

<h1 class="text-red-900 font-bold text-2xl p-1">index</h1>
<h2>{teste_var[0].empNom }</h2>
<h3>{teste.name}</h3>
<h2>{teste.age}</h2>
