

function hi()
{
	document.getElementById("demo").innerHTML = "Login successful Welcome to Pizza world";
}
function validate()
{
	var k=document.forms["rell"]["username"].value;
	var fa=document.forms["rell"]["fathername"].value;
	ag = document.getElementById("kara").value;
	p = document.getElementById("vijay").value;
	em = document.getElementById("email").value;
	var uni=document.forms["rell"]["universityname"].value;
	var l=document.forms["rell"]["password"].value;
	var le=document.forms["rell"]["repassword"].value;
	var gen=document.forms["rell"]["gender"].value;
if(k==null || k=="")
	{alert('Enter user name!');
	return false;
	}
else if(fa==null || fa=="")
	{alert('Enter Father Name !');
	return false;}
else if(uni==null || uni=="")
	{alert('Enter University name !');
	return false;}
else if(ag==null || ag=="")
	{alert('Enter Age !');
	return false;}
else if(isNaN(ag) || ag>125 || ag<13)
	{alert('Enter a valid age ! (14-125)');
	return false;}
else if(gen==null || gen=="")
	{alert('Enter your Gender !');
	return false;}
else if(p==null || p=="")
	{alert('Enter Phone Number !');
	return false;}
else if(isNaN(p) || p>9999999999 || p<999999999)
	{alert('Enter a valid 10 digit mobile number !');
	return false;}
else if(em==null || em=="")
	{alert('Enter Email address !');
	return false;}
else if(l==null || l=="")
	{alert('Enter Password !');
	return false;}

else if(le==null || le=="")
	{alert('Re-enter Password !');
	return false;}
else if(le!=l)
	{alert('Password not matched \n Please enter the same password');
	return false;}

	
}
function callme()
{
	var ck = document.forms["login"]["username"].value;
	var cp = document.forms["login"]["password"].value;
	if(ck==null || ck=="")
	{alert('Enter Username !');
	return false;}
	else if(cp==null || cp=="")
	{alert('Enter Password !');
	return false;}
}

 


