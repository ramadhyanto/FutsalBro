#Creating Pages
** If generate pages must add the component inside app.component.ts like ProfilePage components.

#Creating Provider 
** 
** If have 2 word create provider eg Login Service must use loginService (camel case). 
** Command Generate Provider : ionic g provider loginService || and then ionic automatic build with the name of service to:login-service inside provider.

#POST
** After POST data if want to console log,use this : console.log(resp["isSuccessFull"]); NOT console.log(resp.isSuccessFull);.
** After POST/PUT if data isSuccessFull=false set the message like this : let errors = resp["errors"].map(e=>e.message).join("/n");

