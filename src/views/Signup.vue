<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-6 offset-sm-3">
				<form>
				<small class="text-danger text-center display-7 bold">{{ err }} </small>
					<div class="form-group">
						<label>Name </label>
						<input 
							v-model="name" 
							type="text" 
							class="form-control" 
							v-bind:class="{ 'is-invalid' : err,'is-valid' : !err && this.sub }"
							placeholder="Name" 
						/>

					</div>
					<div class="form-group">
						<label>Email</label>
						<input 
							v-model="email" 
							type="email" 
							class="form-control" 
							v-bind:class="{ 'is-invalid' : err, 'is-valid' : !err && this.sub }"
							placeholder="Email" 
						/>
					</div>
					<div class="form-group">
						<label>Password</label>
						<input 
							v-model="password" 
							type="password" 
							class="form-control" 
							v-bind:class="{ 'is-invalid' : err,'is-valid' : !err && this.sub }"
							placeholder="Password"
						/>
					</div>
					<div class="form-group">
						<button 
							@click="regUser()" 
							type="submit" 
							:disabled="loading"
							class="btn btn-block btn-dark">
							<i class='fa fa-spin fa-spinner' v-if="loading"></i>  
							{{ loading ? '' : 'REGISTER' }}
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import Axios from 'axios';
import config from '@/config';

export default {
	data() {
		return {
			name: '', email: '', password: '', err: '', sub: false, loading: false
		}
	},
	methods: {
		regUser(){
			this.loading = true;
			let payload = {name: this.name, email:this.email, password: this.password}
			if(payload.name && payload.email && payload.password !== ""){
				Axios.post(`${config.apiUrl}/register.php`, payload)
				.then(response => {
					const authUserData = response.data;
					this.sub = true;
					if (authUserData.code === '00'){
						this.loading = false;
						this.$router.push('login');
					} else if (authUserData.code === '01'){
						this.loading = false;
						this.err = authUserData.data;
					}
				}).catch(error => {
					this.loading = false;
					this.sub = true;
					console.log(error)
				})
			} else {
				this.loading = false;
				this.err = "Empty Inputs";
			}
		}
	}
}
</script>

<style scoped>
form {
	padding:  20px;
	max-width: 450px;
	margin: 30px auto;
	display: block;
	background: #cfcfcf;
}
form label {
	margin-bottom: 10px;
	font-size: 16px;
	font-weight: bold;
}
form .form-group {
	margin-bottom: 20px;
}
form .form-control {
	box-shadow: none
}
small {
	text-align: center;
	font-weight: bold;
	font-size: 11px;
}
</style>