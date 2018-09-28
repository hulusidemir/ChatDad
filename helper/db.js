const mongoose = require('mongoose');

module.exports = () => {
    mongoose.set('useCreateIndex', true)
    mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
    mongoose.connection.on('open', () => {
        console.log('VeriTabanı Bağlantısı Gerçekleştirildi');
    });
    mongoose.connection.on('error', (err) => {
        console.log('VeriTabanı Bağlantısı Hatalı. HATA : ' + err);
    });
    mongoose.Promise = global.Promise;
}