const contentful = require('contentful');

exports.handler = async (event, context, callback) => {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });
    console.log('request received')
    try {
        const response = await client.getEntries({content_type: 'projectDescription'});
        console.log(response.items);
        return callback(null, {statusCode: 200, body: JSON.stringify(response.items)});
    } catch (err) {
        console.log(err)
        return callback({
            statusCode: 404,
            err
        })
    }
}