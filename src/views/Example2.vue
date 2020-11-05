<template>
    <div>
        <LinkHome />
        <Description
            description="Children can communicate with their direct parent by emitting an event"
        />
        <Parent />
    </div>
</template>

<script>
import Description from '@/components/Description.vue'
import LinkHome from '@/components/LinkHome.vue'
import Parent from '@/examples/ex-2/Parent.vue'

export default {
    name: 'Example2',
    components: {
        Description,
        LinkHome,
        Parent
    }
}
</script>