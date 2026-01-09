var createGumb = document.getElementById("create");
var signinGumb = document.getElementById("signin");
var closesignup1x = document.getElementById("close_signup1");
var closesignup2x = document.getElementById("close_signup2");
var closesigninx = document.getElementById("close_signin");
var tosignup2 = document.getElementById("tosign2");
var tofini = document.getElementById("tofin");
var login_gumbek = document.getElementById("login_gumb");
var signup_div = document.getElementById("signup_overlay1");
var signup_div2 = document.getElementById("signup_overlay2");
var signin_div = document.getElementById("signin_overlay");
var black_overlay_div = document.getElementById("black_overlay");
var logoPNG = document.getElementById("logoPNG");
var logoSVG = document.getElementById("logoSVG");
var logoCAN = document.getElementById("logoCAN");
var logoCOL = document.getElementById("logoCOL");
var ImagePNG = document.getElementById("ImagePNG");
var ImageSVG = document.getElementById("ImageSVG");
var ImageCAN = document.getElementById("ImageCAN");
var ImagePNGh = document.getElementById("ImagePNGh");
var ImageSVGh = document.getElementById("ImageSVGh");
var ImageCANh = document.getElementById("ImageCANh");
var inputColor = document.getElementById("colInp");

closesignup1x.addEventListener("click", closesignup1);
closesignup2x.addEventListener("click", closesignup2);
closesigninx.addEventListener("click", closesignin);
createGumb.addEventListener("click", CreateAccount);
signinGumb.addEventListener("click", Signin);
tosignup2.addEventListener("click", tosignup2f);
tofini.addEventListener("click", tofinish);
login_gumbek.addEventListener("click", login);
logoPNG.addEventListener("click", showPNG);
logoSVG.addEventListener("click", showSVG);
logoCAN.addEventListener("click", drawCanvas);
inputColor.addEventListener("input", updateColor);
window.addEventListener("load", setColor);

function CreateAccount(){
	signup_div.style.display = "block";
	black_overlay_div.style.display = "block";
}

function Signin(){
	signin_div.style.display = "block";
	black_overlay_div.style.display = "block";
}

function closesignup1(){
	signup_div.style.display = "none";
	black_overlay_div.style.display = "none";
}

function closesignup2(){
	signup_div2.style.display = "none";
	black_overlay_div.style.display = "none";
}

function closesignin(){
	signin_div.style.display = "none";
	black_overlay_div.style.display = "none";
}

function tosignup2f(){
	var naprej="gre";
	if(document.forms["signup"]["name"].value=="" || document.forms["signup"]["name"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your name",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(document.forms["signup"]["email"].value=="" || document.forms["signup"]["email"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your email",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(document.forms["signup"]["date"].value=="" || document.forms["signup"]["date"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your date of birth",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(!valid(document.forms["signup"]["email"].value)){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "Your email doesn't look right...",
		theme: 'auto'
		});
		naprej="nop";
		
	}
	if(naprej=="gre"){
		/*Swal.fire({
		icon: "success",
		title: "Bravooo",
		theme: 'auto'
		});*/
		signup_div.style.display = "none";
		signup_div2.style.display = "block";
	}
}

function tofinish(){
	var naprej="gre";
	if(document.forms["signup"]["username"].value=="" || document.forms["signup"]["username"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your username",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(document.forms["signup"]["password1"].value=="" || document.forms["signup"]["password1"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to enter your password",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(!validatePassword(document.forms["signup"]["password1"].value)){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "Your password isn't complex enough",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(document.forms["signup"]["password2"].value=="" || document.forms["signup"]["password2"].value==null){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "You forgot to re-enter your password",
		theme: 'auto'
		});
		naprej="nop";
	}
	if(document.forms["signup"]["password1"].value!=document.forms["signup"]["password2"].value){
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "Hmm.. the passwords don't match",
		theme: 'auto'
		});
		naprej="nop";
		
	}
	if(naprej=="gre"){
		Swal.fire({
		icon: "success",
		title: "Sign up complete!",
		theme: 'auto'
		});
		signup_div2.style.display = "none";
		black_overlay_div.style.display = "none";
	}
}

function login(){
	if(document.forms["signin_form"]["inusername"].value=="admin" && document.forms["signin_form"]["inpassword"].value=="admin"){
		Swal.fire({
		icon: "success",
		title: "Welcome!",
		theme: 'auto'
		});
		signin_div.style.display = "none";
		black_overlay_div.style.display = "none";
	}else{
		Swal.fire({
		icon: "error",
		title: "Oh no",
		text: "Incorrect username or password",
		theme: 'auto'
		});
	}
}
function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function validatePassword(pw) {
    return /[A-Z]/       .test(pw) &&
           /[a-z]/       .test(pw) &&
           /[0-9]/       .test(pw) &&
           pw.length > 8;

}

function showPNG(){
	ImagePNG.style.display = "block";
	ImageSVG.style.display = "none";
	ImageCAN.style.display = "none";
	ImagePNGh.style.display = "block";
	ImageSVGh.style.display = "none";
	ImageCANh.style.display = "none";
	logoCOL.style.display = "none";
}

function showSVG(){
	ImagePNG.style.display = "none";
	ImageSVG.style.display = "block";
	ImageCAN.style.display = "none";
	ImagePNGh.style.display = "none";
	ImageSVGh.style.display = "block";
	ImageCANh.style.display = "none";
	logoCOL.style.display = "block";
}

function drawCanvas(){
var c = document.getElementById("ImageCAN");
var ctx = c.getContext("2d");
ctx.save();
ctx.strokeStyle=inputColor.value;
ctx.miterLimit=4;
ctx.font="15px ''";
ctx.font="   15px ''";
ctx.scale(0.79,0.395);
ctx.save();
ctx.fillStyle=inputColor.value;
ctx.font="   15px ''";
ctx.beginPath();
ctx.moveTo(2,0);
ctx.lineTo(122,0);
ctx.lineTo(106,31);
ctx.lineTo(60,31);
ctx.lineTo(274,348);
ctx.lineTo(321,348);
ctx.lineTo(106,31);
ctx.lineTo(122,0);
ctx.lineTo(210,130);
ctx.lineTo(320,0);
ctx.lineTo(368,0);
ctx.lineTo(231,161);
ctx.lineTo(378,378);
ctx.lineTo(258,378);
ctx.lineTo(165,241);
ctx.lineTo(48,378);
ctx.lineTo(0,378);
ctx.lineTo(144,209);
ctx.lineTo(2,0);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();

c = document.getElementById("ImageCANh");
ctx = c.getContext("2d");
ctx.save();
ctx.strokeStyle=inputColor.value;
ctx.miterLimit=4;
ctx.font="15px ''";
ctx.font="   15px ''";
ctx.scale(0.79,0.395);
ctx.save();
ctx.fillStyle=inputColor.value;
ctx.font="   15px ''";
ctx.beginPath();
ctx.moveTo(2,0);
ctx.lineTo(122,0);
ctx.lineTo(106,31);
ctx.lineTo(60,31);
ctx.lineTo(274,348);
ctx.lineTo(321,348);
ctx.lineTo(106,31);
ctx.lineTo(122,0);
ctx.lineTo(210,130);
ctx.lineTo(320,0);
ctx.lineTo(368,0);
ctx.lineTo(231,161);
ctx.lineTo(378,378);
ctx.lineTo(258,378);
ctx.lineTo(165,241);
ctx.lineTo(48,378);
ctx.lineTo(0,378);
ctx.lineTo(144,209);
ctx.lineTo(2,0);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
	
ImagePNG.style.display = "none";
ImageSVG.style.display = "none";
ImageCAN.style.display = "block";
ImagePNGh.style.display = "none";
ImageSVGh.style.display = "none";
ImageCANh.style.display = "block";
logoCOL.style.display = "block";
}

function setColor(){
	console.log(getComputedStyle(document.body).getPropertyValue('--secondary-color'));
	inputColor.value=getComputedStyle(document.body).getPropertyValue('--secondary-color');
}
function updateColor(){
	ImageSVG.style.fill = inputColor.value;
	ImageSVGh.style.fill = inputColor.value;
	
	var c = document.getElementById("ImageCAN");
var ctx = c.getContext("2d");
ctx.save();
ctx.strokeStyle=inputColor.value;
ctx.miterLimit=4;
ctx.font="15px ''";
ctx.font="   15px ''";
ctx.scale(0.79,0.395);
ctx.save();
ctx.fillStyle=inputColor.value;
ctx.font="   15px ''";
ctx.beginPath();
ctx.moveTo(2,0);
ctx.lineTo(122,0);
ctx.lineTo(106,31);
ctx.lineTo(60,31);
ctx.lineTo(274,348);
ctx.lineTo(321,348);
ctx.lineTo(106,31);
ctx.lineTo(122,0);
ctx.lineTo(210,130);
ctx.lineTo(320,0);
ctx.lineTo(368,0);
ctx.lineTo(231,161);
ctx.lineTo(378,378);
ctx.lineTo(258,378);
ctx.lineTo(165,241);
ctx.lineTo(48,378);
ctx.lineTo(0,378);
ctx.lineTo(144,209);
ctx.lineTo(2,0);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();

c = document.getElementById("ImageCANh");
ctx = c.getContext("2d");
ctx.save();
ctx.strokeStyle=inputColor.value;
ctx.miterLimit=4;
ctx.font="15px ''";
ctx.font="   15px ''";
ctx.scale(0.79,0.395);
ctx.save();
ctx.fillStyle=inputColor.value;
ctx.font="   15px ''";
ctx.beginPath();
ctx.moveTo(2,0);
ctx.lineTo(122,0);
ctx.lineTo(106,31);
ctx.lineTo(60,31);
ctx.lineTo(274,348);
ctx.lineTo(321,348);
ctx.lineTo(106,31);
ctx.lineTo(122,0);
ctx.lineTo(210,130);
ctx.lineTo(320,0);
ctx.lineTo(368,0);
ctx.lineTo(231,161);
ctx.lineTo(378,378);
ctx.lineTo(258,378);
ctx.lineTo(165,241);
ctx.lineTo(48,378);
ctx.lineTo(0,378);
ctx.lineTo(144,209);
ctx.lineTo(2,0);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
	
}
