<template>
    <div>
        <LinkHome />
        <Description
            description="In this component we are passing data from the parent component down to a child component"
        />
        <Parent />
    </div>
</template>

<script>
import Description from '@/components/Description.vue'
import LinkHome from '@/components/LinkHome.vue'
import Parent from '@/examples/ex-1/Parent.vue'

export default {
    name: 'Example1',
    components: {
        Description,
        LinkHome,
        Parent
    }
}
</script>
