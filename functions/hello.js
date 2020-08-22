// functions/hello.js
exports.handler = async (event, context, callback) => {

    console.log(`event payload:  ${JSON.stringify(event)}`)
    console.log(`context payload:  ${JSON.stringify(context)}`)

    const {identity, user} = context.clientContext;

    console.log(`identity:  ${JSON.stringify(identity)}`)
    console.log(`user:  ${JSON.stringify(user)}`)

    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: `Hello ${subject}!`,
    }
  }