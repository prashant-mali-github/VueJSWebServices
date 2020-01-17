<template>
    <div>
        <h1> Form Field Validations</h1>
          <section>
        <!-- <b-field>
            <b-input placeholder="No label"></b-input>
        </b-field>

        <b-field label="Rounded">
            <b-input placeholder="No label" rounded></b-input>
        </b-field> -->

        <b-field label="Name" :type="check_status($v.name)">
            <b-input placeholder="Name" v-model.trim="$v.name.$model"></b-input>
        </b-field>
        <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
        <div class="error" v-if="!$v.name.alpha"> Name must contain character not a number</div>
        
        <b-field label="Email" :type="check_status($v.email)">
            <b-input placeholder="Email" v-model.trim="$v.email.$model"></b-input>
        </b-field>
        <div class="error" v-if="!$v.email.email">Invalid Id please enter valid email id</div>
    </section>
        <form @submit.prevent="submit">
            <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                <label class="form__label">Name: </label>
                <input :class="status($v.name)" v-model.trim="$v.name.$model"/>
            </div>
            <!-- <div class="error" v-if="!$v.name.required">Name is required</div> -->
            <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
            <div class="error" v-if="!$v.name.alpha"> Name must contain character not a number</div>

            <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                <label class="form__label">Email: </label>
                <input :class="status($v.email)" v-model.trim="$v.email.$model"/>
            </div>
            <!-- <div class="error" v-if="!$v.email.required">Email is required</div> -->
            <div class="error" v-if="!$v.email.email">Invalid Id please enter valid email id</div>

            <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
                <label class="form__label">Age: </label>
                <input :class="status($v.age)" v-model.trim="$v.age.$model"/>
            </div>
            <!-- <div class="error" v-if="!$v.age.required">Age is required</div> -->
            <div class="error" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div>
           

            <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                <label class="form__label">Password:</label>
                <input :class="status($v.password)" v-model.trim="$v.password.$model"/>
            </div>
            <!-- <div class="error" v-if="!$v.password.required">Password is required.</div> -->
            <div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
            <div class="form-group" :class="{ 'form-group--error': $v.repeatPassword.$error }">
                <label class="form__label">Confirm password:</label>
                <input :class="status($v.repeatPassword)" v-model.trim="$v.repeatPassword.$model"/>
            </div>
            <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>

            <div class="form-group" :class="{ 'form-group--error': $v.form.nestedA.$error }">
                <label class="form__label">Parent :</label>
                <input class="form__input" v-model.trim="$v.form.nestedA.$model"/>
            </div>
            <!-- <div class="error" v-if="!$v.form.nestedA.required">Parent is required.</div> -->
            <div class="form-group" :class="{ 'form-group--error': $v.form.nestedB.$error }">
                <label class="form__label">Child :</label>
                <input class="form__input" v-model.trim="$v.form.nestedB.$model"/>
            </div>
            <!-- <div class="error" v-if="!$v.form.nestedB.required">Field is required.</div> -->
            <div class="form-group" :class="{ 'form-group--error': $v.form.$error }"></div>
            <div class="error" v-if="$v.form.$error">Form is invalid.</div>

            
            <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
            <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        </form>
    </div>
</template>
<script>
import { required, minLength, between, sameAs, alpha, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      name: '',
      age: null,
      reg: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      submitStatus: null,
      password: '',
      email: '',
      
      repeatPassword: '',
      form: {
        nestedA: '',
        nestedB: ''
      },
      
    }
  },
  methods:{
        status(validation){
            return{
                error:validation.$error,
                dirty:validation.$dirty
            }
        },
        check_status(validation){
            return{
                "is-danger":validation.$error,
                "is-success":validation.$dirty
            }
        },
        submit() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    // do your submit logic here
                    this.submitStatus = 'PENDING'
                    setTimeout(() => {
                    this.submitStatus = 'OK'
                    }, 500)
                }
        },
        isEmailValid: function() {
            return (this.email == "")? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
        }
  },
  validations: {
    name: {
      required,
      alpha,
      minLength: minLength(4)
    },
    email:{
        required,
        email
    },
    age:{
        required,
        between: between(20, 30)
    },
    password: {
        required,
        minLength: minLength(6)
    },
    repeatPassword: {
        sameAsPassword: sameAs('password')
    },
    form: {
      nestedA: {
        required
      },
      nestedB: {
        required
      }
    }
  }
}

</script>

<style>
.form-group.form-group--error label {
    color: red !important;;
}
.dirty {
  border-color: #5A5 !important;;
}

.dirty:focus {
  outline-color: #8E8 !important;
}

.error{
  border-color: red !important;;
  color:red !important;;
}
</style>