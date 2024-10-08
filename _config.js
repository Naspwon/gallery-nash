var config = {}

// Update to have your correct username and password
config.mongoURI = {
    // production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    // development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    // test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',

    production: 'mongodb+srv://Nayomie:Welcome@123@nash.j03th.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Nash',
    development: 'mongodb+srv://Nayomie:Welcome@123@nash.j03th.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Nash',
    test: 'mongodb+srv://Nayomie:Welcome@123@nash.j03th.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Nash',
}
module.exports = config;