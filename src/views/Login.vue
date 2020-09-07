<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-6 offset-sm-3">
				<form>
					<small class="text-danger text-center display-7 bold">{{ err }} </small>
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
							v-bind:class="{ 'is-invalid' : err, 'is-valid' : !err && this.sub }"
							placeholder="Password" 
						/>
					</div>
					<div class="form-group">
						<button 
							@click="logUser()" 
							type="submit" 
							:disabled="loading"
							class="btn btn-block btn-primary"> 
							<i class='fa fa-spin fa-spinner' v-if="loading"></i> 
							{{ loading ? '' : 'LOGIN' }}
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
			email: '', password: '', err: '', sub: false, loading: false
		}
	},
	methods: {
		logUser(){
			this.loading = true;
			let payload = {email:this.email, password: this.password}
			if(payload.email && payload.password !== ""){
				Axios.post(`${config.apiUrl}/login.php`, payload)
				.then(response => {
					this.loading = false;
					if(response.data.code === '00'){
						const authUserData = response.data.data;
						localStorage.setItem('auth', JSON.stringify(authUserData));
						this.$root.admin = null; 
						localStorage.removeItem('admin');
						this.$root.auth = authUserData;
						this.$router.push('home');
					} else if (response.data.code === '09'){
						const authAdminData = response.data.data;
						localStorage.setItem('admin', JSON.stringify(authAdminData));
						this.$root.auth = null;
						localStorage.removeItem('auth');
						this.$root.admin = authAdminData;
						this.$router.push('admin');
					} else {
						this.loading = false;
						this.err = response.data.data;
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
}small {
	text-align: center;
	font-weight: bold;
	font-size: 11px;
}
small {
	text-align: center;
	font-weight: bold;
	font-size: 11px;
}
</style>