//payload of the body
// {
//     "event": "login|signup|validate",
//     "user": {
//       # an Identity user object
//     }
//   }

// If your serverless function returns a 200, you can also return a JSON object with 
// new user_metadata or app_metadata for the Identity user. For example, if you return:

//{"app_metadata": {"roles": ["admin"]}}