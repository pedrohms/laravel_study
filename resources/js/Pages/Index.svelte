<script lang="ts">
    import NavItem from "../components/NavItem.svelte";
    import Navbar from "../components/Navbar.svelte";
    import { Person, type EcfEmpresa } from "../shared/CustomType";

    export let teste_var: EcfEmpresa[];
    export let count: number;

    let empresa = teste_var === null ? null : teste_var[0];

    let teste: Person = {
        name: "Pedro",
        age: 34,
    };
</script>

<Navbar title={empresa?.empNom}>
    <NavItem text="Home" />
    <NavItem text="Products" />
    <NavItem text="Details" />
    <NavItem text="Contact us" />
</Navbar>
<h1 class="text-red-900 font-bold text-2xl p-1">index</h1>
{#if teste_var}
    <h2>{teste_var[0].empNom}</h2>
    <h3>&nbsp{teste_var[0].empNumCnpj}</h3>
{/if}
<h3>{count}</h3>
<h3>{teste.name}</h3>
<h2>{teste.age}</h2>
