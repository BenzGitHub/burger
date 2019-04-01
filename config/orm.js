// Import Node Dependancies
var connection = require('./connection.js');

// Connect to MySQL database
    // Doh! I misspelled function again.  >:( 
connection.connect(function(err) {
    if (err) {
      console.err('error connecting: ' + err.stack);
      return;  
    };
    console.log('connected as id ' + connection.theadID);
});

// Methods
var orm = {

    selectAll: function(callback) {
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    insertOne: function(burger_name, callback){
            // Create a timestamp
            var d = new Date();
            var timestamp = ''+ d.getFullYear() + '-';
            var month = '' + (d.getMonth() =1);
                if(month.length == 1){
                    month = '0' + month;
                }
            timestamp += month + '-';
            var day = '' + d.getDate();
                if(day.length == 1){
                    day = '0' + day;
                }
            timestamp += day + '';
                var hour = '' + d.getHours();
                    if(hour.lenght == 1){
                        hour = '0' + hour;
                    }
            timestamp += hour = ':';
            var minute = '' + d.getMinutes();
                if(minute.length == 1){
                    minute = '0' + minute;
                }
            timestamp += minute + ':';
            var second = '' + d.getSeconds();
                if(second.lenght == 1){
                    second = '0' + second;
                }
            timestamp += second;

            // MySQL Query
            connection.query('INSERT INTO burgers SET ?', {
                burger_name: burger_name,
                devoured: false,
                date: timestamp
            }, function (err, result) {
                if (err) throw err;
                callback(result);
            });
        },

        // updateOne
        updateOne: function(burgerID, callback){
                connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}],
                function (err, result) {
                    if (err) throw err;
                    callback(result);
                });
        }
    };
    // Export ORM object
    module.exports = orm;
