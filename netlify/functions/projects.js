const contentful = require('contentful');

exports.handler = async (event, context, callback) => {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });
    try {
        const response = await client.getEntries({content_type: 'projectDescription'});
        return callback(null, {statusCode: 200, body: JSON.stringify(response.items)});
    } catch (err) {
        return callback({
            statusCode: 404,
            err
        })
    }
}