export function userInfo(keys,data)
{
  for(var i = 0; i < keys.length; i++)
  {
    var key = keys[i];
    var user = data[key];
    console.log(key);
    console.log(user.name);
    console.log(user.email);
    console.log(user.pass);
    console.log('#########');
  }
}

export function renderUser(data) 
{
  $("body").append(data);
}