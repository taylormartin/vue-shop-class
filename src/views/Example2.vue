<template>
    <div>
        <LinkHome />
        <Description
            description="This is example 2"
        />
    </div>
</template>

<script>
import Description from '@/components/Description.vue'
import LinkHome from '@/components/LinkHome.vue'

export default {
    name: 'Example2',
    components: {
        Description,
        LinkHome
    }
}
</script>