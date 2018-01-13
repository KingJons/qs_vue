<template>
    <button class="el-button" :class="[type? 'el-button--' + type : '', 
    buttonSize? 'el-button--' + buttonSize : '',{
        'is-disabled': disabled
    }]" 
    @click="handleClick" :type="nativeType" :disabled="disabled">
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: String,
        nativeType: {
            type: String,
            default: 'default'
        },
        disabled: Boolean
    },
    computed: {
        buttonSize() {
            return this.size
        }
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
        
    
}
</script>

<style>

</style>
