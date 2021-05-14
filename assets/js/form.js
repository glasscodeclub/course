const toggleForm = (target) => {
	if (target === 'register') {
		$("form").html(`
			<div class="form-group">
		    	<label for="name">Name</label>
		    	<input type="name" class="form-control" id="name">
		  	</div>
		  	<div class="form-group">
		    	<label for="email">Email</label>
		    	<input type="email" class="form-control" id="email">
		  	</div>
		  	<div class="form-group">
		    	<label for="password">Password</label>
		    	<input type="password" class="form-control" id="password">
		  	</div>
		  	<div class="form-group">
		    	<label for="re_password">Repeat Password</label>
		    	<input type="password" class="form-control" id="re_password">
		  	</div>
		  	<div class="form-group form-check">
		    	<input type="checkbox" class="form-check-input" id="">
		    	<label class="form-check-label" for="">Accept Terms and Conditions</label>
		  	</div>
		  	<button type="submit" class="btn btn-success">Log Into Your Account</button>
		`);

		isLogin = false;
		$('#register').removeClass('btn-outline-primary');
		$('#register').addClass('btn-primary');
		$('#login').removeClass('btn-primary');
		$('#login').addClass('btn-outline-primary');
		document.title = "Register"
		history.replaceState('register', 'Register', '/register.html');
	}
	else if (target === "login"){
		$("form").html(`
			<div class="form-group">
		    	<label for="email">Email</label>
		    	<input type="email" class="form-control" id="email">
		  	</div>
		  	<div class="form-group">
		    	<label for="password">Password</label>
		    	<input type="password" class="form-control" id="password">
		  	</div>
			<div class="form-group form-check">
		    	<input type="checkbox" class="form-check-input" id="remember-me">
		    	<label class="form-check-label" for="remember-me">Remember Me</label>
		  	</div>
		  	<button type="submit" class="btn btn-success">Log Into Your Account</button>
		`);
		isLogin = true;
		$('#register').addClass('btn-outline-primary');
		$('#register').removeClass('btn-primary');
		$('#login').addClass('btn-primary');
		$('#login').removeClass('btn-outline-primary');
		document.title = "Login"
		history.replaceState('login', 'Login', '/login.html');
	}
}

