<template>
    <section>
        <button class="button is-primary is-medium"
            @click="isComponentModalActive = true">
            Launch component modal
        </button>
        <b-modal :active.sync="isComponentModalActive"
                 has-modal-card
                 trap-focus
                 aria-role="dialog"
                 aria-modal>
            <modal-form v-bind="formProps"></modal-form>
        </b-modal>
    </section>
</template>

<script>
    import ModalForm from './FormComponent.vue'
    export default {
        components: {
            ModalForm
        },
        data() {
            return {
                isComponentModalActive: false,
                formProps: {
                    email: 'evan@you.com',
                    password: 'testing'
                }
            }
        }
    }
</script>
