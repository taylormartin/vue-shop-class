<template>
    <ul>
        <li>
            <strong>Example-1&nbsp;</strong>
            <router-link to="/ex-1">Parent Passes Props to Child</router-link>
        </li>
        <li>
            <strong>Example-2&nbsp;</strong>
            <router-link to="/ex-2">Child Communicates with Parent via $emit</router-link>
        </li>
    </ul>
</template>

<style scoped lang="scss">
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
            padding: 5px;
        }
    }
</style>

<script>
    export default {
        name: 'Home'
    }
</script>
